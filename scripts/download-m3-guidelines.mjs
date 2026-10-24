/**
 * Downloads official Material Design 3 and Material Design 3 Expressive guidelines
 * and specifications from m3.material.io into local Markdown and JSON files in `guidelines/`.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'
import { JSDOM } from 'jsdom'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GUIDELINES_DIR = join(ROOT, 'guidelines')
const TOKENS_DIR = join(GUIDELINES_DIR, 'tokens')

const dom = new JSDOM()

function nodeToMarkdown(node) {
  if (!node) return ''
  if (node.nodeType === 3) return node.textContent || ''
  if (node.nodeType !== 1) return ''

  const tag = node.tagName.toLowerCase()
  const children = Array.from(node.childNodes).map(nodeToMarkdown).join('')

  switch (tag) {
    case 'h1':
      return `\n# ${children.trim()}\n\n`
    case 'h2':
      return `\n## ${children.trim()}\n\n`
    case 'h3':
      return `\n### ${children.trim()}\n\n`
    case 'h4':
      return `\n#### ${children.trim()}\n\n`
    case 'p':
      return children.trim() ? `${children.trim()}\n\n` : ''
    case 'strong':
    case 'b':
      return `**${children}**`
    case 'em':
    case 'i':
      return `*${children}*`
    case 'code':
      return `\`${children}\``
    case 'pre':
      return `\n\`\`\`\n${children.trim()}\n\`\`\`\n\n`
    case 'a': {
      const href = node.getAttribute('href') || ''
      return href ? `[${children}](${href})` : children
    }
    case 'ul':
      return `\n${children}\n`
    case 'ol': {
      let idx = 1
      let res = '\n'
      for (const li of node.children) {
        if (li.tagName.toLowerCase() === 'li') {
          res += `${idx++}. ${Array.from(li.childNodes).map(nodeToMarkdown).join('').trim()}\n`
        }
      }
      return `${res}\n`
    }
    case 'li':
      return `- ${children.trim()}\n`
    case 'table': {
      const rows = Array.from(node.querySelectorAll('tr'))
      if (!rows.length) return ''
      let tableMd = '\n'
      const headers = Array.from(rows[0].querySelectorAll('th, td')).map((c) =>
        nodeToMarkdown(c).trim().replace(/\n+/g, ' '),
      )
      tableMd += `| ${headers.join(' | ')} |\n`
      tableMd += `| ${headers.map(() => '---').join(' | ')} |\n`
      for (let i = 1; i < rows.length; i++) {
        const cells = Array.from(rows[i].querySelectorAll('td, th')).map((c) =>
          nodeToMarkdown(c).trim().replace(/\n+/g, ' '),
        )
        while (cells.length < headers.length) cells.push('')
        tableMd += `| ${cells.join(' | ')} |\n`
      }
      return `${tableMd}\n`
    }
    case 'br':
      return '\n'
    default:
      return children
  }
}

function htmlToMarkdown(html) {
  if (!html) return ''
  const div = dom.window.document.createElement('div')
  div.innerHTML = html
  return nodeToMarkdown(div)
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

async function getM3Manifest() {
  console.log('Fetching m3.material.io main bundle to discover routes and version...')
  const indexHtml = await (await fetch('https://m3.material.io/')).text()
  const mainMatch = indexHtml.match(/src="(\/static\/angular\/main\.[a-z0-9]+\.js)"/)
  if (!mainMatch) throw new Error('Could not find main.js in m3.material.io')

  const mainUrl = `https://m3.material.io${mainMatch[1]}`
  console.log(`Loading angular bundle: ${mainUrl}`)
  const js = await (await fetch(mainUrl)).text()

  const verMatch = js.match(/carbonVersion:"([0-9_-]+)"/)
  const carbonVersion = verMatch ? verMatch[1] : '2026-10-13_06-10-19'
  console.log(`Carbon version: ${carbonVersion}`)

  // Extract routes table
  const target = 'exportedCarbonFileId'
  let idx = js.indexOf(target)
  const routes = []
  while (idx !== -1) {
    const parseStart = js.lastIndexOf('JSON.parse(', idx)
    if (parseStart !== -1 && idx - parseStart < 100) {
      let end = parseStart + 11
      let depth = 1
      while (end < js.length && depth > 0) {
        if (js[end] === '(') depth++
        else if (js[end] === ')') depth--
        end++
      }
      const snippet = js.slice(parseStart, end)
      try {
        const parsed = vm.runInNewContext(snippet)
        for (const k of Object.keys(parsed)) {
          if (Array.isArray(parsed[k])) {
            for (const item of parsed[k]) {
              if (item?.exportedCarbonFileId) routes.push(item)
            }
          }
        }
      } catch {
        // ignore parse errors
      }
      if (routes.length > 20) break
    }
    idx = js.indexOf(target, idx + 1)
  }

  return { carbonVersion, routes }
}

function routeToFilePath(slug) {
  if (!slug) return 'overview.md'

  if (
    slug === 'building-with-m3-expressive' ||
    slug === 'm3-expressive-motion-theming' ||
    slug === 'whats-new-at-io26' ||
    slug === 'material-is-compose-first'
  ) {
    return join('m3-expressive', `${slug}.md`)
  }

  const parts = slug.split('/')
  const category = parts[0]
  const rest = parts.slice(1).join('-') || 'index'
  return join(category, `${rest}.md`)
}

const tokenTableCache = new Map()

async function fetchTokenTable(resourceName, carbonVersion) {
  const resId = resourceName?.split('components/')[1]
  if (!resId) return null
  if (tokenTableCache.has(resId)) return tokenTableCache.get(resId)

  const url = `https://m3.material.io/_dsm/data/dsdb-m3/${carbonVersion}/TOKEN_TABLE.${resId}.json`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    mkdirSync(TOKENS_DIR, { recursive: true })
    const structuredSets = []
    const tokenSets = data.system?.tokenSets || []
    const tokens = data.system?.tokens || []
    const values = data.system?.values || []
    for (const set of tokenSets) {
      const setTokens = tokens.filter((t) => t.name.startsWith(set.name))
      if (!setTokens.length) continue
      structuredSets.push({
        displayName: set.displayName || set.tokenSetName,
        tokenSetName: set.tokenSetName,
        description: set.description || null,
        isDeprecated: Boolean(
          set.displayName?.startsWith('[Deprecated]') ||
            set.tokenSetName?.startsWith('[Deprecated]'),
        ),
        tokens: setTokens.map((t) => {
          const v = values.find((val) => val.name.startsWith(t.name))
          return {
            name: t.tokenName,
            displayName: t.displayName,
            type: t.tokenValueType,
            value: formatValue(v).replace(/^`|`$/g, '').replace(/^"|"$/g, ''),
          }
        }),
      })
    }
    const structured = {
      id: resId,
      component: data.system?.components?.[0]?.displayName || 'System',
      tokenSets: structuredSets,
    }
    writeFileSync(join(TOKENS_DIR, `${resId}.json`), JSON.stringify(structured, null, 2))
    const item = { resId, data, structured }
    tokenTableCache.set(resId, item)
    return item
  } catch (err) {
    console.warn(`Failed to fetch token table ${resId}:`, err.message)
    return null
  }
}

function formatValue(v) {
  if (!v) return '-'
  if (v.tokenName) return `\`${v.tokenName}\``
  if (v.length) {
    const unit = v.length.unit?.toLowerCase() === 'dips' ? 'dp' : v.length.unit?.toLowerCase() || ''
    return `${v.length.value}${unit}`
  }
  if (v.color) {
    if (v.color.hex) return v.color.hex
    if (v.color.red !== undefined) {
      const r = Math.round(v.color.red * 255)
      const g = Math.round(v.color.green * 255)
      const b = Math.round(v.color.blue * 255)
      const a = v.color.alpha ?? 1
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }
  }
  if (v.text) return `"${v.text.value}"`
  if (v.font) return `${v.font.fontFamily} ${v.font.size?.value}dp`
  return '-'
}

function renderTokenTableMarkdown(tokenTableData, preferredSets) {
  const tokenSets = tokenTableData.system?.tokenSets || []
  const tokens = tokenTableData.system?.tokens || []
  const values = tokenTableData.system?.values || []

  let activeSets = []
  if (preferredSets && preferredSets.length > 0) {
    activeSets = preferredSets
      .map((name) => tokenSets.find((s) => s.displayName === name || s.tokenSetName === name))
      .filter(Boolean)
  }
  if (!activeSets.length) {
    activeSets = tokenSets.filter(
      (s) =>
        !s.displayName?.startsWith('[Deprecated]') && !s.tokenSetName?.startsWith('[Deprecated]'),
    )
  }

  let md = ''
  for (const set of activeSets) {
    const setName = set.displayName || set.tokenSetName
    const setTokens = tokens.filter((t) => t.name.startsWith(set.name))
    if (!setTokens.length) continue

    md += `#### Design Tokens: ${setName}\n\n`
    if (set.description) {
      md += `*${set.description}*\n\n`
    }
    md += `| Token Name | Value / Mapping | Type | Description |\n`
    md += `| :--- | :--- | :--- | :--- |\n`
    for (const t of setTokens) {
      const v = values.find((val) => val.name.startsWith(t.name))
      const valStr = formatValue(v)
      const desc = (t.displayName || '').replace(/\|/g, '\\|')
      md += `| \`${t.tokenName}\` | ${valStr} | ${t.tokenValueType || '-'} | ${desc} |\n`
    }
    md += '\n'
  }
  return md
}

async function downloadRoute(route, carbonVersion) {
  const url = `https://m3.material.io/_dsm/content/m3/${carbonVersion}/${route.exportedCarbonFileId}`
  const res = await fetch(url)
  if (!res.ok) {
    console.warn(`Failed to fetch ${route.slug} (${res.status})`)
    return null
  }

  const data = await res.json()
  const title = data.title || data.headerTitle || route.slug
  const relPath = routeToFilePath(route.slug)
  const fullPath = join(GUIDELINES_DIR, relPath)

  mkdirSync(dirname(fullPath), { recursive: true })

  let md = `# ${title}\n\n`
  md += `> **Official Material Design 3 Specification**\n`
  md += `> Source: [https://m3.material.io/${route.slug}](https://m3.material.io/${route.slug})\n`
  if (data.updatedTimestamp) {
    md += `> Last Updated: ${data.updatedTimestamp}\n`
  }
  md += '\n---\n\n'

  if (data.description) {
    md += `## Summary\n\n${data.description}\n\n`
  }

  if (route.tabs && route.tabs.length > 0) {
    md += `**Table of Sections:**\n`
    for (const tab of route.tabs) {
      md += `- ${tab.label}\n`
    }
    md += '\n---\n\n'
  }

  for (const sec of data.sections || []) {
    if (sec.name && sec.name !== 'Tab 1') {
      md += `## ${sec.name}\n\n`
    }
    for (const block of sec.contentBlocks || []) {
      if (block.title) {
        md += `### ${block.title}\n\n`
      }
      for (const chunk of block.contentChunks || []) {
        if (chunk.htmlValue) {
          const chunkMd = htmlToMarkdown(chunk.htmlValue)
          if (chunkMd) md += `${chunkMd}\n\n`
        }

        // Handle Token Tables (Specs)
        if (chunk.contentChunkType === 'RESOURCE' && chunk.libraryModuleType === 'TOKEN_TABLE') {
          const tokenTable = await fetchTokenTable(chunk.resourceName, carbonVersion)
          if (tokenTable) {
            const tableMd = renderTokenTableMarkdown(
              tokenTable.data,
              chunk.moduleConfigurationOverrides?.tokenSets,
            )
            if (tableMd) md += `${tableMd}\n`
          }
        }

        // Handle Diagrams & Images with Captions
        if (chunk.contentChunkType === 'IMAGE') {
          const imgUrl = chunk.imageUrlFife || chunk.imageUrl
          if (imgUrl) {
            const alt = chunk.altText ? chunk.altText.replace(/\n+/g, ' ') : ''
            md += `![${alt}](${imgUrl})\n\n`
            if (chunk.footer) {
              const footerMd = htmlToMarkdown(chunk.footer)
              if (footerMd) md += `*Caption / Legend:*\n${footerMd}\n\n`
            }
          }
        }
      }
    }
  }

  writeFileSync(fullPath, `${md.trim()}\n`)
  return { slug: route.slug, title, relPath, description: data.description }
}

async function main() {
  const { carbonVersion, routes } = await getM3Manifest()
  console.log(`Found ${routes.length} official guideline routes to download.`)

  mkdirSync(GUIDELINES_DIR, { recursive: true })
  mkdirSync(TOKENS_DIR, { recursive: true })

  const downloaded = []
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    process.stdout.write(`[${i + 1}/${routes.length}] Downloading ${route.slug || 'root'}... `)
    try {
      const item = await downloadRoute(route, carbonVersion)
      if (item) {
        downloaded.push(item)
        console.log('✓')
      }
    } catch (err) {
      console.log(`✗ (${err.message})`)
    }
  }

  // Generate tokens index
  console.log('Generating guidelines/tokens/README.md...')
  let tokensReadme = '# Material Design 3 Design Tokens (DSDB Spec)\n\n'
  tokensReadme +=
    'This directory contains raw design token specifications fetched directly from Google DSDB (Design System Database).\n\n'
  tokensReadme += `Synchronized with Carbon version: \`${carbonVersion}\`.\n\n`
  tokensReadme += '| Token Table ID | Component / System | Token Sets | Total Tokens |\n'
  tokensReadme += '| :--- | :--- | :--- | :--- |\n'
  for (const [resId, item] of tokenTableCache.entries()) {
    const comps = item.data.system?.components?.map((c) => c.displayName).join(', ') || 'System'
    const setsCount = item.data.system?.tokenSets?.length || 0
    const tokensCount = item.data.system?.tokens?.length || 0
    tokensReadme += `| [\`${resId}\`](./${resId}.json) | ${comps} | ${setsCount} | ${tokensCount} |\n`
  }
  writeFileSync(join(TOKENS_DIR, 'README.md'), tokensReadme)

  // Generate README index
  console.log('Generating guidelines/README.md index...')
  let readme = '# Material Design 3 & Material 3 Expressive Guidelines\n\n'
  readme +=
    'This directory contains the official design specifications and guidelines downloaded directly from [m3.material.io](https://m3.material.io/).\n\n'
  readme += `Synchronized with Carbon version: \`${carbonVersion}\`.\n\n`

  readme += '## Re-syncing\n\n'
  readme += 'Run the sync script to pull the latest updates from Google:\n\n'
  readme += '```bash\nnpm run sync:guidelines\n```\n\n'

  const categories = {
    'm3-expressive': 'Material 3 Expressive (Latest Evolution)',
    components: 'Components (Specs, Guidelines & Expressive Updates)',
    styles: 'Styles (Color, Motion, Shape, Typography, Elevation)',
    foundations: 'Foundations (Tokens, Layout, Usability, Accessibility)',
    develop: 'Development & Platforms',
  }

  for (const [catKey, catTitle] of Object.entries(categories)) {
    const items = downloaded.filter(
      (d) =>
        d.relPath.startsWith(`${catKey}/`) ||
        (catKey === 'm3-expressive' && d.relPath.includes('m3-expressive')),
    )
    if (items.length > 0) {
      readme += `## ${catTitle}\n\n`
      for (const item of items) {
        readme += `- [**${item.title}**](./${item.relPath})`
        if (item.description) readme += ` — ${item.description}`
        readme += '\n'
      }
      readme += '\n'
    }
  }

  readme += '## Design Tokens Database (DSDB)\n\n'
  readme += `- [**Design Tokens Directory**](./tokens/README.md) — Raw component design token definitions, values, and mappings downloaded from Google DSDB.\n`

  writeFileSync(join(GUIDELINES_DIR, 'README.md'), readme)
  console.log(
    `Done! Saved ${downloaded.length} official guideline documents and ${tokenTableCache.size} token tables to guidelines/`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
