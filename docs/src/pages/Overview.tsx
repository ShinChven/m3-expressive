import { Button, Card, Icon, Shape } from '@m3-expressive/react'
import { Link } from 'react-router'
import { useCopy } from '../kit/CodeBlock'
import { GROUPS } from '../kit/doc'
import { GithubIcon } from '../kit/GithubIcon'
import { RichText } from '../kit/RichText'
import { DOCS } from '../kit/registry'
import { AGENT_BOOTSTRAP_PROMPT } from './Start'

export function OverviewPage() {
  const copy = useCopy()
  return (
    <div className="g-page">
      <header className="g-hero">
        <div className="g-hero__text">
          <h1 className="m3-typescale-emphasized-display-medium">Material 3 Expressive</h1>
          <p>
            {DOCS.length} pages of Material 3 Expressive components, layouts and foundations for
            React and Vue 3: dynamic color, spring motion, the shape library and shape morphing.
            Each page has a live playground, worked examples with their code, and an API table
            generated from the library source.
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
            <Button
              href="https://github.com/ShinChven/m3-expressive"
              variant="outlined"
              icon={<GithubIcon size={20} />}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </header>
      <section className="g-agent-banner" aria-labelledby="agent-skill-heading">
        <div className="g-agent-banner__lead">
          <div className="g-agent-banner__badge" aria-hidden="true">
            <Shape name="cookie-9" className="g-agent-banner__shape" />
            <Icon name="smart_toy" />
          </div>
          <div className="g-agent-banner__copy">
            <h2 id="agent-skill-heading" className="m3-typescale-emphasized-title-large">
              AI Agent Skill &amp; Copy-Source Setup
            </h2>
            <p className="g-muted">
              Vendor full or selective component source code directly into your project
              (shadcn-style) and guide Claude Code, Cursor, Codex, or Pi to strictly follow Material
              3 Expressive design rules, 2025 HCT tokens, and spring physics.
            </p>
          </div>
        </div>
        <div className="g-row g-agent-banner__actions">
          <Button
            variant="tonal"
            icon="content_copy"
            onClick={() => copy(AGENT_BOOTSTRAP_PROMPT, 'Agent prompt')}
          >
            Copy Agent Prompt
          </Button>
          <Button variant="outlined" href="/start#ai-agent-skill-copy-source-setup" icon="terminal">
            Copy-Source Guide
          </Button>
        </div>
      </section>
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
