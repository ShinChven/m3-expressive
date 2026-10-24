// Prints the DSDB token tables in guidelines/tokens as readable `name = value` lines, one token
// set per section, flagging deprecated and no-longer-recommended sets. Use it to check component
// CSS against the spec: `node scripts/tokens-from-dsdb.mjs "Split buttons"` (any part of the
// component name, case-insensitive), or without an argument for every table.
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const dir = fileURLToPath(new URL('../guidelines/tokens/', import.meta.url))
const filter = process.argv[2]?.toLowerCase()

for (const file of readdirSync(dir)
  .filter((f) => f.endsWith('.json'))
  .sort()) {
  const table = JSON.parse(readFileSync(dir + file, 'utf8'))
  if (filter && !table.component.toLowerCase().includes(filter)) continue
  console.log(`# ${table.component} (${table.id})`)
  for (const set of table.tokenSets) {
    const flags = [
      set.isDeprecated ? 'DEPRECATED' : '',
      /no longer recommended/i.test(set.description ?? '') ? 'NOT RECOMMENDED' : '',
    ].filter(Boolean)
    console.log(
      `\n## ${set.tokenSetName} — ${set.displayName}${flags.length ? ` [${flags.join(', ')}]` : ''}`,
    )
    for (const token of [...set.tokens].sort((a, b) => a.name.localeCompare(b.name))) {
      console.log(`${token.name} = ${token.value}`)
    }
  }
  console.log('')
}
