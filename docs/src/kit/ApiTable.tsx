import api from 'virtual:m3-api'
import { highlight } from './CodeBlock'
import type { ApiEntry } from './doc'
import { RichText } from './RichText'

/** Expands simple aliases (`ButtonVariant` → `'filled' | 'tonal' | …`) for readers. */
function expandType(type: string): string {
  return type.replace(/\b[A-Z]\w*\b/g, (name) => {
    const alias = api.aliases[name]
    return alias && /^('[^']*'\s*\|\s*)+'[^']*'$/.test(alias) ? alias : name
  })
}

export function ApiTable({ entry }: { entry: ApiEntry }) {
  const defaults = api.defaults[entry.name] ?? {}
  const props = entry.interfaces.flatMap((name) => {
    const iface = api.interfaces[name]
    if (!iface) throw new Error(`Interface ${name} not found in @m3-expressive/react sources`)
    return iface.props
  })
  const extended = entry.interfaces.flatMap((name) => api.interfaces[name]?.extends ?? [])
  return (
    <section className="g-api" aria-labelledby={`api-${entry.name}`}>
      <h3 id={`api-${entry.name}`} className="m3-typescale-title-large">
        {entry.name}
      </h3>
      {props.length > 0 && (
        <div className="g-api__scroll">
          <table className="g-api__table">
            <thead>
              <tr>
                <th scope="col">Prop</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name}>
                  <td>
                    <code className="g-api__name">{p.name}</code>
                    {!p.optional && <span className="g-api__required">required</span>}
                  </td>
                  <td>
                    <code className="g-api__type">{highlight(expandType(p.type))}</code>
                  </td>
                  <td>
                    {defaults[p.name] ? (
                      <code>{defaults[p.name]}</code>
                    ) : (
                      <span className="g-muted">—</span>
                    )}
                  </td>
                  <td>
                    {p.description ? (
                      <RichText text={p.description} />
                    ) : (
                      <span className="g-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {(entry.inherits || extended.length > 0) && (
        <p className="g-api__inherits">
          <RichText
            text={entry.inherits ?? `Also accepts the props of \`${extended.join('`, `')}\`.`}
          />
        </p>
      )}
    </section>
  )
}
