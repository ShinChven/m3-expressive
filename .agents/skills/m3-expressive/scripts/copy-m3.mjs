#!/usr/bin/env node
/**
 * Material 3 Expressive — Source Copy & Dependency Resolver CLI
 *
 * Copies Material 3 Expressive component source files, design token stylesheets,
 * and transitive internal dependencies into a target project (vendored / shadcn-style).
 *
 * Usage:
 *   node copy-m3.mjs --list
 *   node copy-m3.mjs --target ./src/m3
 *   node copy-m3.mjs --target ./src/m3 --components Button,Card,Dialog,AppBar,AppScaffold
 *   node copy-m3.mjs --target ./src/m3 --framework vue
 *   node copy-m3.mjs --target ./src/styles/m3 --framework css
 *   node copy-m3.mjs --target ./src/m3 --components Button,TextField --dry-run
 */

import { execFileSync } from 'node:child_process'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DEFAULT_REPO_URL = 'https://github.com/ShinChven/m3-expressive.git'

/** Maps React source modules (relative to `src/`) to their required component CSS files. */
const MODULE_CSS_MAP = {
  'components/Action.tsx': ['components/button.css'],
  'components/AppBar.tsx': ['components/navigation.css', 'components/button.css'],
  'components/Artwork.tsx': ['components/containment.css'],
  'components/Badge.tsx': ['components/badge-tooltip.css'],
  'components/Button.tsx': ['components/button.css', 'components/progress.css'],
  'components/ButtonGroup.tsx': ['components/button.css'],
  'components/Card.tsx': ['components/containment.css'],
  'components/Carousel.tsx': ['components/containment.css'],
  'components/ChatAssistant.tsx': [
    'components/chat.css',
    'components/button.css',
    'components/chip.css',
  ],
  'components/Chip.tsx': ['components/chip.css'],
  'components/DataTable.tsx': [
    'components/data.css',
    'components/button.css',
    'components/selection.css',
  ],
  'components/DatePicker.tsx': [
    'components/pickers.css',
    'components/button.css',
    'components/field.css',
    'components/containment.css',
  ],
  'components/Dialog.tsx': ['components/containment.css', 'components/button.css'],
  'components/FabMenu.tsx': ['components/button.css'],
  'components/Icon.tsx': ['components/icon.css'],
  'components/List.tsx': ['components/containment.css'],
  'components/ListView.tsx': ['components/data.css', 'components/containment.css'],
  'components/LoadingIndicator.tsx': ['components/progress.css'],
  'components/Menu.tsx': ['components/menu.css'],
  'components/Navigation.tsx': ['components/navigation.css', 'components/badge-tooltip.css'],
  'components/Progress.tsx': ['components/progress.css'],
  'components/Ripple.tsx': ['components/button.css'],
  'components/Search.tsx': ['components/navigation.css', 'components/button.css'],
  'components/Select.tsx': ['components/field.css', 'components/menu.css'],
  'components/Selection.tsx': ['components/selection.css'],
  'components/Shape.tsx': ['components/containment.css'],
  'components/Sheet.tsx': ['components/containment.css', 'components/button.css'],
  'components/Slider.tsx': ['components/slider.css'],
  'components/Snackbar.tsx': ['components/badge-tooltip.css', 'components/button.css'],
  'components/SplitButton.tsx': ['components/button.css', 'components/menu.css'],
  'components/Tabs.tsx': ['components/navigation.css', 'components/badge-tooltip.css'],
  'components/TextField.tsx': ['components/field.css', 'components/button.css'],
  'components/TimePicker.tsx': [
    'components/pickers.css',
    'components/button.css',
    'components/field.css',
    'components/containment.css',
  ],
  'components/Tooltip.tsx': ['components/badge-tooltip.css', 'components/button.css'],
  'components/TreeView.tsx': [
    'components/data.css',
    'components/progress.css',
    'components/selection.css',
  ],
  'layout/AppScaffold.tsx': [
    'components/layout.css',
    'components/navigation.css',
    'components/button.css',
  ],
  'layout/Panes.tsx': ['components/layout.css', 'components/containment.css'],
  'theme/ThemeBuilder.tsx': [
    'components/theme-builder.css',
    'components/button.css',
    'components/field.css',
    'components/slider.css',
  ],
}

/** Alias map so users can pass friendly names like `--components Checkbox,Switch,BottomSheet,Fab`. */
const COMPONENT_ALIASES = {
  action: 'components/Action.tsx',
  appbar: 'components/AppBar.tsx',
  toolbar: 'components/AppBar.tsx',
  artwork: 'components/Artwork.tsx',
  badge: 'components/Badge.tsx',
  button: 'components/Button.tsx',
  iconbutton: 'components/Button.tsx',
  fab: 'components/Button.tsx',
  buttongroup: 'components/ButtonGroup.tsx',
  card: 'components/Card.tsx',
  avatar: 'components/Card.tsx',
  divider: 'components/Card.tsx',
  text: 'components/Card.tsx',
  carousel: 'components/Carousel.tsx',
  chatassistant: 'components/ChatAssistant.tsx',
  chip: 'components/Chip.tsx',
  assistchip: 'components/Chip.tsx',
  filterchip: 'components/Chip.tsx',
  inputchip: 'components/Chip.tsx',
  suggestionchip: 'components/Chip.tsx',
  chipset: 'components/Chip.tsx',
  datatable: 'components/DataTable.tsx',
  datepicker: 'components/DatePicker.tsx',
  calendar: 'components/DatePicker.tsx',
  dialog: 'components/Dialog.tsx',
  fabmenu: 'components/FabMenu.tsx',
  icon: 'components/Icon.tsx',
  list: 'components/List.tsx',
  listitem: 'components/List.tsx',
  listview: 'components/ListView.tsx',
  loadingindicator: 'components/LoadingIndicator.tsx',
  menu: 'components/Menu.tsx',
  menuitem: 'components/Menu.tsx',
  menubutton: 'components/Menu.tsx',
  navigation: 'components/Navigation.tsx',
  navigationbar: 'components/Navigation.tsx',
  navigationrail: 'components/Navigation.tsx',
  progress: 'components/Progress.tsx',
  linearprogress: 'components/Progress.tsx',
  circularprogress: 'components/Progress.tsx',
  ripple: 'components/Ripple.tsx',
  search: 'components/Search.tsx',
  select: 'components/Select.tsx',
  selection: 'components/Selection.tsx',
  checkbox: 'components/Selection.tsx',
  radio: 'components/Selection.tsx',
  radiogroup: 'components/Selection.tsx',
  switch: 'components/Selection.tsx',
  shape: 'components/Shape.tsx',
  sheet: 'components/Sheet.tsx',
  bottomsheet: 'components/Sheet.tsx',
  sidesheet: 'components/Sheet.tsx',
  slider: 'components/Slider.tsx',
  rangeslider: 'components/Slider.tsx',
  snackbar: 'components/Snackbar.tsx',
  splitbutton: 'components/SplitButton.tsx',
  tabs: 'components/Tabs.tsx',
  textfield: 'components/TextField.tsx',
  timepicker: 'components/TimePicker.tsx',
  tooltip: 'components/Tooltip.tsx',
  richtooltip: 'components/Tooltip.tsx',
  treeview: 'components/TreeView.tsx',
  appscaffold: 'components/Navigation.tsx',
  scaffold: 'layout/AppScaffold.tsx',
  panes: 'layout/Panes.tsx',
  listdetaillayout: 'layout/Panes.tsx',
  supportingpanelayout: 'layout/Panes.tsx',
  feedlayout: 'layout/Panes.tsx',
  windowsize: 'layout/windowSize.ts',
  themebuilder: 'theme/ThemeBuilder.tsx',
  themeprovider: 'theme/ThemeProvider.tsx',
}

function parseArgs(argv) {
  const opts = {
    source: null,
    target: null,
    framework: 'react',
    components: null,
    list: false,
    dryRun: false,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--list' || arg === '-l') opts.list = true
    else if (arg === '--dry-run' || arg === '-n') opts.dryRun = true
    else if (arg === '--help' || arg === '-h') opts.help = true
    else if (arg === '--source' && argv[i + 1]) opts.source = argv[++i]
    else if (arg.startsWith('--source=')) opts.source = arg.slice('--source='.length)
    else if ((arg === '--target' || arg === '-t') && argv[i + 1]) opts.target = argv[++i]
    else if (arg.startsWith('--target=')) opts.target = arg.slice('--target='.length)
    else if ((arg === '--framework' || arg === '-f') && argv[i + 1]) opts.framework = argv[++i]
    else if (arg.startsWith('--framework=')) opts.framework = arg.slice('--framework='.length)
    else if ((arg === '--components' || arg === '-c') && argv[i + 1]) opts.components = argv[++i]
    else if (arg.startsWith('--components=')) opts.components = arg.slice('--components='.length)
  }
  return opts
}

function isRepoRoot(dir) {
  return (
    Boolean(dir) &&
    existsSync(join(dir, 'src', 'index.ts')) &&
    existsSync(join(dir, 'src', 'styles', 'index.css'))
  )
}

function resolveRepoRoot(explicitSource) {
  if (explicitSource) {
    const resolved = resolve(explicitSource)
    if (!isRepoRoot(resolved)) {
      throw new Error(
        `--source "${resolved}" does not contain src/index.ts and src/styles/index.css`,
      )
    }
    return resolved
  }

  // 1. Check relative to this script (.agents/skills/m3-expressive/scripts -> repo root)
  const localRepo = resolve(__dirname, '../../../..')
  if (isRepoRoot(localRepo)) return localRepo

  // 2. Check current working directory
  if (isRepoRoot(process.cwd())) return process.cwd()

  // 3. Shallow-clone from GitHub into temporary cache
  const cacheDir = join(tmpdir(), 'm3-expressive-source-cache')
  if (isRepoRoot(cacheDir)) return cacheDir

  console.log(`Cloning Material 3 Expressive source from ${DEFAULT_REPO_URL} ...`)
  execFileSync('git', ['clone', '--depth', '1', DEFAULT_REPO_URL, cacheDir], {
    stdio: 'inherit',
  })
  return cacheDir
}

function walkFiles(dir, baseDir = dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      results.push(...walkFiles(full, baseDir))
    } else {
      results.push(relative(baseDir, full).replace(/\\/g, '/'))
    }
  }
  return results.sort()
}

function resolveRelativeModule(srcDir, fromRelFile, specifier) {
  const base = resolve(srcDir, dirname(fromRelFile), specifier)
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.css`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
  ]
  for (const cand of candidates) {
    if (existsSync(cand) && statSync(cand).isFile()) {
      return relative(srcDir, cand).replace(/\\/g, '/')
    }
  }
  return null
}

function extractImports(code) {
  const specs = []
  const re = /(?:import|export)\s+(?:type\s+)?(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g
  for (const match of code.matchAll(re)) {
    specs.push(match[1])
  }
  return specs
}

function resolveReactSelection(srcDir, requestedNames) {
  const selectedModules = new Set([
    // Always include theme, base hooks, and spring utilities
    'theme/ThemeProvider.tsx',
    'theme/scheme.ts',
    'theme/initScript.ts',
    'utils/hooks.ts',
    'utils/spring.ts',
  ])

  for (const rawName of requestedNames) {
    const key = rawName
      .trim()
      .toLowerCase()
      .replace(/[-_\s]/g, '')
    if (!key) continue
    if (key === 'appscaffold') {
      selectedModules.add('layout/AppScaffold.tsx')
      continue
    }
    if (ALIAS_LOOKUP[key]) {
      selectedModules.add(ALIAS_LOOKUP[key])
      continue
    }
    // Check direct file match in components/, layout/, theme/, shapes/, utils/
    const allFiles = walkFiles(srcDir)
    const found = allFiles.find((f) => {
      const base = f
        .split('/')
        .pop()
        .replace(/\.(tsx|ts)$/, '')
        .toLowerCase()
      return base === key || f.toLowerCase() === rawName.trim().toLowerCase()
    })
    if (!found) {
      throw new Error(
        `Unknown component "${rawName}". Run with --list to see available components.`,
      )
    }
    selectedModules.add(found)
  }

  // Trace transitive relative imports
  const queue = [...selectedModules]
  const externalPackages = new Set(['@fontsource-variable/roboto-flex', 'material-symbols'])

  while (queue.length > 0) {
    const current = queue.shift()
    const fullPath = join(srcDir, current)
    if (!existsSync(fullPath)) continue
    const code = readFileSync(fullPath, 'utf8')
    for (const spec of extractImports(code)) {
      if (spec.startsWith('.')) {
        const target = resolveRelativeModule(srcDir, current, spec)
        if (target && !selectedModules.has(target)) {
          selectedModules.add(target)
          queue.push(target)
        }
      } else if (spec !== 'react' && spec !== 'react-dom' && !spec.startsWith('react/')) {
        externalPackages.add(spec)
      }
    }
  }

  // Collect required CSS files
  const cssFiles = new Set([
    'styles/baseline-scheme.css',
    'styles/tokens.css',
    'styles/base.css',
    'styles/fonts.css',
    'styles/components/icon.css',
  ])
  for (const mod of selectedModules) {
    const mapped = MODULE_CSS_MAP[mod]
    if (mapped) {
      for (const c of mapped) cssFiles.add(`styles/${c}`)
    }
  }

  return {
    modules: [...selectedModules].sort(),
    cssFiles: [...cssFiles].sort(),
    externalPackages: [...externalPackages].sort(),
  }
}

const ALIAS_LOOKUP = {
  ...COMPONENT_ALIASES,
  appscaffold: 'layout/AppScaffold.tsx',
}

function copyFileEnsuringDir(srcFile, destFile, dryRun) {
  if (dryRun) return
  mkdirSync(dirname(destFile), { recursive: true })
  copyFileSync(srcFile, destFile)
}

function printHelp() {
  console.log(`Material 3 Expressive — Copy-Source Setup Tool

Usage:
  node copy-m3.mjs --target <dir> [options]

Options:
  --target, -t <dir>         Destination folder in your project (e.g. ./src/m3)
  --framework, -f <name>     Target framework: react (default) | vue | css
  --components, -c <names>   Comma-separated component names for selective copy
                             (omit to copy the full M3 Expressive source tree)
  --source <repo-dir>        Path to local m3-expressive repo (auto-detected or cloned)
  --list, -l                 List all available components and their dependencies
  --dry-run, -n              Preview files and npm dependencies without writing
  --help, -h                 Show this help message

Examples:
  # Copy full React source tree into ./src/m3
  node copy-m3.mjs --target ./src/m3

  # Copy only Button, Card, Dialog, AppBar, and AppScaffold + their transitive deps
  node copy-m3.mjs --target ./src/m3 --components Button,Card,Dialog,AppBar,AppScaffold

  # Copy Vue 3 source tree (core + styles + vue SFCs) into ./src/m3
  node copy-m3.mjs --target ./src/m3 --framework vue
`)
}

function printList(repoRoot) {
  const srcDir = join(repoRoot, 'src')
  console.log('=== Material 3 Expressive — React Source Modules ===\n')
  const groups = [
    ['Components (src/components/)', 'components'],
    ['Layouts (src/layout/)', 'layout'],
    ['Theme & Color (src/theme/)', 'theme'],
    ['Shapes & Morphing (src/shapes/)', 'shapes'],
    ['Utilities (src/utils/)', 'utils'],
    ['i18n (src/i18n/)', 'i18n'],
  ]
  for (const [title, folder] of groups) {
    console.log(`${title}:`)
    const files = walkFiles(join(srcDir, folder))
    for (const f of files) {
      const relPath = `${folder}/${f}`
      const { modules, cssFiles, externalPackages } = resolveReactSelection(srcDir, [relPath])
      const internalDeps = modules.filter((m) => m !== relPath)
      const cssShort = cssFiles
        .filter((c) => c.startsWith('styles/components/'))
        .map((c) => c.replace('styles/components/', ''))
      const nonFontExt = externalPackages.filter(
        (p) => p !== '@fontsource-variable/roboto-flex' && p !== 'material-symbols',
      )
      console.log(
        `  - ${f.replace(/\.(tsx|ts)$/, '')} (${relPath})` +
          (cssShort.length ? ` | CSS: ${cssShort.join(', ')}` : '') +
          (nonFontExt.length ? ` | npm: ${nonFontExt.join(', ')}` : '') +
          (internalDeps.length ? ` | +${internalDeps.length} internal files` : ''),
      )
    }
    console.log('')
  }
}

function main() {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help) {
    printHelp()
    return
  }

  const repoRoot = resolveRepoRoot(opts.source)
  if (opts.list) {
    printList(repoRoot)
    return
  }

  if (!opts.target) {
    printHelp()
    process.exitCode = 1
    return
  }

  const targetDir = resolve(opts.target)
  const srcDir = join(repoRoot, 'src')
  const framework = opts.framework.toLowerCase()

  if (framework === 'css') {
    const stylesDir = join(srcDir, 'styles')
    const files = walkFiles(stylesDir)
    for (const f of files) {
      copyFileEnsuringDir(join(stylesDir, f), join(targetDir, f), opts.dryRun)
    }
    console.log(
      `${opts.dryRun ? '[DRY RUN] Would copy' : 'Copied'} ${files.length} CSS files to ${targetDir}`,
    )
    console.log('\nInstall font packages:')
    console.log('  npm install @fontsource-variable/roboto-flex material-symbols')
    return
  }

  if (framework === 'vue') {
    const coreDir = join(repoRoot, 'packages', 'core', 'src')
    const stylesDir = join(repoRoot, 'packages', 'styles', 'src')
    const vueDir = join(repoRoot, 'packages', 'vue', 'src')
    let count = 0

    for (const f of walkFiles(coreDir)) {
      copyFileEnsuringDir(join(coreDir, f), join(targetDir, 'core', f), opts.dryRun)
      count++
    }
    for (const f of walkFiles(stylesDir)) {
      copyFileEnsuringDir(join(stylesDir, f), join(targetDir, 'styles', f), opts.dryRun)
      count++
    }
    for (const f of walkFiles(vueDir)) {
      const raw = readFileSync(join(vueDir, f), 'utf8')
      const rewritten = raw.replace(
        /from ['"]@m3-expressive\/core['"]/g,
        f.includes('/') ? "from '../core/index'" : "from './core/index'",
      )
      if (!opts.dryRun) {
        const dest = join(targetDir, f)
        mkdirSync(dirname(dest), { recursive: true })
        writeFileSync(dest, rewritten)
      }
      count++
    }
    console.log(
      `${opts.dryRun ? '[DRY RUN] Would copy' : 'Copied'} ${count} Vue + Core + CSS source files to ${targetDir}`,
    )
    console.log('\n1. Install runtime dependencies:')
    console.log(
      '   npm install @material/material-color-utilities @fontsource-variable/roboto-flex material-symbols',
    )
    console.log('\n2. Add path aliases in tsconfig.json / vite.config.ts:')
    console.log(
      `   "@m3-expressive/vue": "${relative(process.cwd(), join(targetDir, 'index.ts'))}"`,
    )
    console.log(
      `   "@m3-expressive/styles": "${relative(process.cwd(), join(targetDir, 'styles/index.css'))}"`,
    )
    return
  }

  // React mode (full or selective)
  if (!opts.components) {
    const allFiles = walkFiles(srcDir)
    for (const f of allFiles) {
      copyFileEnsuringDir(join(srcDir, f), join(targetDir, f), opts.dryRun)
    }
    console.log(
      `${opts.dryRun ? '[DRY RUN] Would copy' : 'Copied'} all ${allFiles.length} React & CSS source files to ${targetDir}`,
    )
    console.log('\n1. Install required dependencies:')
    console.log(
      '   npm install @material/material-color-utilities @tanstack/react-virtual @fontsource-variable/roboto-flex material-symbols',
    )
  } else {
    const requested = opts.components.split(',').map((s) => s.trim())
    const { modules, cssFiles, externalPackages } = resolveReactSelection(srcDir, requested)

    for (const mod of modules) {
      copyFileEnsuringDir(join(srcDir, mod), join(targetDir, mod), opts.dryRun)
    }
    for (const css of cssFiles) {
      copyFileEnsuringDir(join(srcDir, css), join(targetDir, css), opts.dryRun)
    }

    // Generate tailored styles/index.css
    const fullCssOrder = readFileSync(join(srcDir, 'styles', 'index.css'), 'utf8')
      .split('\n')
      .filter((line) => line.startsWith('@import '))
    const selectedCssSet = new Set(cssFiles.map((c) => c.replace(/^styles\//, './')))
    const tailoredCssLines = [
      '/* Material 3 Expressive — Generated stylesheet for selected components */',
      ...fullCssOrder.filter((line) => {
        const m = line.match(/@import\s+"([^"]+)"/)
        return m && selectedCssSet.has(m[1])
      }),
      '',
    ]

    // Generate tailored index.ts from root src/index.ts keeping only copied modules
    const rootIndex = readFileSync(join(srcDir, 'index.ts'), 'utf8')
    const moduleNoExt = new Set(modules.map((m) => `./${m.replace(/\.(tsx|ts)$/, '')}`))
    const tailoredIndexLines = [
      '// Material 3 Expressive — Generated barrel for selected components',
    ]
    // Parse single-line and multi-line export statements from src/index.ts
    const exportBlocks =
      rootIndex.match(/(?:export\s+(?:type\s+)?(?:\*|\{[\s\S]*?\})\s+from\s+'[^']+')/g) ?? []
    for (const block of exportBlocks) {
      const m = block.match(/from\s+'([^']+)'/)
      if (m && moduleNoExt.has(m[1])) {
        tailoredIndexLines.push(block)
      }
    }
    tailoredIndexLines.push('')

    if (!opts.dryRun) {
      mkdirSync(join(targetDir, 'styles'), { recursive: true })
      writeFileSync(join(targetDir, 'styles', 'index.css'), tailoredCssLines.join('\n'))
      writeFileSync(join(targetDir, 'index.ts'), tailoredIndexLines.join('\n'))
    }

    console.log(
      `${opts.dryRun ? '[DRY RUN] Would copy' : 'Copied'} ${modules.length} TypeScript modules and ${cssFiles.length} CSS files to ${targetDir}`,
    )
    console.log('\nIncluded modules:')
    for (const mod of modules) console.log(`  - ${mod}`)
    console.log('\n1. Install required dependencies for this selection:')
    console.log(`   npm install ${externalPackages.join(' ')}`)
  }

  const relTarget = `./${relative(process.cwd(), targetDir).replace(/\\/g, '/')}`
  console.log('\n2. Add path aliases in tsconfig.json (so docs & component imports work directly):')
  console.log(
    JSON.stringify(
      {
        compilerOptions: {
          paths: {
            '@m3-expressive/react': [`${relTarget}/index.ts`],
            '@m3-expressive/react/styles.css': [`${relTarget}/styles/index.css`],
            '@m3-expressive/react/fonts.css': [`${relTarget}/styles/fonts.css`],
            '@/m3': [`${relTarget}/index.ts`],
          },
        },
      },
      null,
      2,
    ),
  )
}

main()
