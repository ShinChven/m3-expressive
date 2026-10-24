import type { CSSProperties, ReactNode } from 'react'

export function Page({
  title,
  description,
  children,
}: {
  title: string
  description?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="g-page">
      <header className="g-page__header">
        <h1 className="m3-typescale-display-small">{title}</h1>
        {description && <p className="g-page__lead">{description}</p>}
      </header>
      {children}
    </div>
  )
}

export function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: ReactNode
  children: ReactNode
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <section className="g-section" aria-labelledby={id}>
      <h2 id={id} className="m3-typescale-headline-small">
        {title}
      </h2>
      {description && <p className="g-section__desc">{description}</p>}
      {children}
    </section>
  )
}

export function Demo({
  label,
  children,
  column,
  center,
  style,
  flush,
}: {
  label?: string
  children: ReactNode
  column?: boolean
  center?: boolean
  flush?: boolean
  style?: CSSProperties
}) {
  return (
    <figure className="g-demo" data-flush={flush ? '' : undefined}>
      {label && <figcaption className="g-demo__label">{label}</figcaption>}
      <div
        className="g-demo__body"
        data-column={column ? '' : undefined}
        data-center={center ? '' : undefined}
        style={style}
      >
        {children}
      </div>
    </figure>
  )
}

export function Grid({ children, min = 280 }: { children: ReactNode; min?: number }) {
  return (
    <div className="g-grid" style={{ '--g-min': `${min}px` } as CSSProperties}>
      {children}
    </div>
  )
}

/** Deterministic pseudo-random numbers for demo data. */
export function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

import { art } from 'material-design-3-expressive-components'

export { art }
export const IMAGES = Array.from({ length: 10 }, (_, i) => art(i + 2, 800, 600))
