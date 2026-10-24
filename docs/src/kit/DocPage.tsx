import {
  Button,
  Card,
  CardActionArea,
  Icon,
  IconButton,
  LinearProgress,
  Tab,
  TabGroup,
  TabPanel,
  Tabs,
} from '@m3-expressive/react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { ApiTable } from './ApiTable'
import { CodeBlock, useCopy } from './CodeBlock'
import { GROUPS } from './doc'
import { FrameworkSwitch } from './FrameworkSwitch'
import { useFramework } from './framework'
import { Playground } from './Playground'
import { RichText } from './RichText'
import { DOCS, type Example, type LoadedDoc, useExamples } from './registry'

function ExampleCard({ example }: { example: Example }) {
  const [showCode, setShowCode] = useState(false)
  const copy = useCopy()
  const { Component } = example
  return (
    <section className="g-example" id={example.id} aria-labelledby={`${example.id}-title`}>
      <header className="g-example__head">
        <h3 id={`${example.id}-title`} className="m3-typescale-title-medium">
          <a href={`#${example.id}`} className="g-anchor">
            {example.title}
          </a>
        </h3>
        {example.description && (
          <p className="g-example__desc">
            <RichText text={example.description} />
          </p>
        )}
      </header>
      <div className="g-example__stage">
        <Component />
      </div>
      <div className="g-example__actions">
        <Button
          variant="text"
          size="xs"
          icon="code"
          aria-expanded={showCode}
          onClick={() => setShowCode((s) => !s)}
        >
          {showCode ? 'Hide code' : 'Show code'}
        </Button>
        <IconButton
          icon="content_copy"
          label="Copy code"
          size="xs"
          tooltip
          onClick={() => copy(example.code)}
        />
      </div>
      {showCode && <CodeBlock code={example.code} className="g-example__code" bare />}
    </section>
  )
}

function PrevNext({ doc }: { doc: LoadedDoc }) {
  const index = DOCS.indexOf(doc)
  const prev = DOCS[index - 1]
  const next = DOCS[index + 1]
  return (
    <nav className="g-prevnext" aria-label="Previous and next component">
      {prev ? (
        <Card variant="outlined">
          <CardActionArea href={prev.path}>
            <span className="g-prevnext__label">
              <Icon name="arrow_back" size={18} /> Previous
            </span>
            <span className="g-prevnext__name">{prev.name}</span>
          </CardActionArea>
        </Card>
      ) : (
        <span />
      )}
      {next && (
        <Card variant="outlined" className="g-prevnext__next">
          <CardActionArea href={next.path}>
            <span className="g-prevnext__label">
              Next <Icon name="arrow_forward" size={18} />
            </span>
            <span className="g-prevnext__name">{next.name}</span>
          </CardActionArea>
        </Card>
      )}
    </nav>
  )
}

function Examples({ doc }: { doc: LoadedDoc }) {
  const examples = useExamples(doc)
  if (!examples) return <LinearProgress aria-label="Loading examples" />
  return (
    <div className="g-examples">
      {examples.map((ex) => (
        <ExampleCard key={ex.id} example={ex} />
      ))}
    </div>
  )
}

const TABS = ['playground', 'examples', 'api'] as const
type TabKey = (typeof TABS)[number]

/** A component page: header, then Playground / Examples / API tabs. */
export function DocPage({ doc }: { doc: LoadedDoc }) {
  const [params, setParams] = useSearchParams()
  const available = TABS.filter((t) => t !== 'playground' || doc.playground)
  const requested = params.get('tab') as TabKey | null
  const tab = requested && available.includes(requested) ? requested : available[0]!
  const group = GROUPS.find((g) => g.key === doc.group)
  const copy = useCopy()
  const { framework } = useFramework()
  const importLine = useMemo(() => {
    if (framework === 'vue') {
      const names = doc.imports.map((name) => `M3${name}`)
      return `import { ${names.join(', ')} } from '@m3-expressive/vue'`
    }
    if (framework === 'html') {
      return "import '@m3-expressive/styles'"
    }
    return `import { ${doc.imports.join(', ')} } from '@m3-expressive/react'`
  }, [doc.imports, framework])
  return (
    <article className="g-doc">
      <header className="g-doc__header">
        <div className="g-doc__eyebrow-row">
          <div className="g-doc__eyebrow">
            <Icon name={group?.icon ?? 'widgets'} size={18} />
            {group?.label}
          </div>
          <FrameworkSwitch size="xs" />
        </div>
        <h1 className="m3-typescale-display-small">{doc.name}</h1>
        <p className="g-doc__summary">
          <RichText text={doc.summary} />
        </p>
        <div className="g-doc__import">
          <code>{importLine}</code>
          <IconButton
            icon="content_copy"
            label="Copy import"
            size="xs"
            tooltip
            onClick={() => copy(importLine, 'Import')}
          />
        </div>
      </header>
      <TabGroup
        value={tab}
        onChange={(t) =>
          setParams(
            (p) => {
              p.set('tab', t)
              return p
            },
            { replace: true, preventScrollReset: true },
          )
        }
      >
        <Tabs aria-label={`${doc.name} documentation`} className="g-doc__tabs">
          {doc.playground && <Tab value="playground" label="Playground" icon="tune" inlineIcon />}
          <Tab value="examples" label="Examples" icon="widgets" inlineIcon />
          <Tab value="api" label="API" icon="data_object" inlineIcon />
        </Tabs>
        {doc.playground && (
          <TabPanel value="playground" className="g-doc__panel">
            <Playground playground={doc.playground} slug={doc.slug} imports={doc.imports} />
          </TabPanel>
        )}
        <TabPanel value="examples" className="g-doc__panel">
          {doc.guidelines && doc.guidelines.length > 0 && (
            <ul className="g-guidelines">
              {doc.guidelines.map((g) => (
                <li key={g}>
                  <RichText text={g} />
                </li>
              ))}
            </ul>
          )}
          <Examples doc={doc} />
        </TabPanel>
        <TabPanel value="api" className="g-doc__panel">
          {doc.api.map((entry) => (
            <ApiTable key={entry.name} entry={entry} />
          ))}
        </TabPanel>
      </TabGroup>
      <PrevNext doc={doc} />
    </article>
  )
}
