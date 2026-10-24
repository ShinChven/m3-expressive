import { Button, Card, Icon } from '@m3-expressive/react'
import { Link } from 'react-router'
import { GROUPS } from '../kit/doc'
import { RichText } from '../kit/RichText'
import { DOCS } from '../kit/registry'

export function OverviewPage() {
  return (
    <div className="g-page">
      <header className="g-hero">
        <div className="g-hero__text">
          <h1 className="m3-typescale-emphasized-display-medium">Material 3 Expressive</h1>
          <p>
            {DOCS.length} pages of Material 3 Expressive components, layouts and foundations for
            React: dynamic color, spring motion, the shape library and shape morphing. Each page has
            a live playground, worked examples with their code, and an API table generated from the
            library source.
          </p>
          <div className="g-row">
            <Button href="/start" icon="rocket_launch">
              Get started
            </Button>
            <Button href={DOCS[0]?.path ?? '/'} variant="tonal" icon="widgets">
              Browse components
            </Button>
            <Button href="/theme" variant="outlined" icon="palette">
              Theme builder
            </Button>
          </div>
        </div>
      </header>
      {GROUPS.map((group) => {
        const docs = DOCS.filter((d) => d.group === group.key)
        if (docs.length === 0) return null
        return (
          <section key={group.key} className="g-group" aria-labelledby={`group-${group.key}`}>
            <div className="g-group__head">
              <Icon name={group.icon} />
              <h2 id={`group-${group.key}`} className="m3-typescale-headline-small">
                {group.label}
              </h2>
              <span className="g-muted">{group.summary}</span>
            </div>
            <div className="g-cards">
              {docs.map((doc) => {
                const Preview = doc.preview
                return (
                  <Card key={doc.slug} variant="outlined" className="g-card">
                    <div className="g-card__stage" inert>
                      <Preview />
                    </div>
                    <div className="g-card__text">
                      {/* The link's overlay makes the whole card clickable without nesting controls in it. */}
                      <Link to={doc.path} className="g-card__link m3-typescale-title-medium">
                        {doc.name}
                      </Link>
                      <span className="g-card__summary">
                        <RichText text={doc.summary} />
                      </span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
