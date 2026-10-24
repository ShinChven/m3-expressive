import { IconButton, useSnackbar } from 'material-design-3-expressive-components'
import type { ReactNode } from 'react'

const TOKEN =
  /(?<comment>\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(?<string>'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|`(?:\\.|[^`\\])*`)|(?<tag><\/?[A-Za-z][\w.]*)|(?<attr>\b[a-zA-Z][\w-]*(?==[{"']))|(?<keyword>\b(?:import|from|export|const|let|function|return|if|else|true|false|null|undefined|new|await|async|type|interface)\b)|(?<number>\b\d+(?:\.\d+)?\b)/g

/** Minimal TSX highlighting: comments, strings, tags, attributes, keywords, numbers. */
export function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of code.matchAll(TOKEN)) {
    const index = m.index!
    if (index > last) out.push(code.slice(last, index))
    const kind = Object.entries(m.groups ?? {}).find(([, v]) => v !== undefined)?.[0] ?? 'text'
    out.push(
      <span key={index} className={`tok-${kind}`}>
        {m[0]}
      </span>,
    )
    last = index + m[0].length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}

export function useCopy() {
  const snackbar = useSnackbar()
  return async (text: string, what = 'Code') => {
    try {
      await navigator.clipboard.writeText(text)
      snackbar.show({ message: `${what} copied`, duration: 2500 })
    } catch {
      snackbar.show({ message: 'Copy is not available in this browser', duration: 4000 })
    }
  }
}

export interface CodeBlockProps {
  code: string
  /** Shown above the code, e.g. a file name. */
  caption?: string
  /** Hide the caption bar (when the surrounding card already offers copy). */
  bare?: boolean
  className?: string
}

export function CodeBlock({ code, caption, bare, className }: CodeBlockProps) {
  const copy = useCopy()
  return (
    <div className={['g-code', className].filter(Boolean).join(' ')}>
      {!bare && (
        <div className="g-code__bar">
          <span className="g-code__caption">{caption ?? 'TSX'}</span>
          <IconButton
            icon="content_copy"
            label="Copy code"
            size="xs"
            tooltip
            onClick={() => copy(code)}
          />
        </div>
      )}
      <pre className="g-code__pre">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  )
}
