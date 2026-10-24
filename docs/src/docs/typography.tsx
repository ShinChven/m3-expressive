import { Text } from '@m3-expressive/react'
import { defineDoc } from '../kit/doc'
import './typography.css'

export const doc = defineDoc({
  slug: 'typography',
  name: 'Typography',
  group: 'foundations',
  icon: 'format_size',
  order: 2,
  summary:
    'The type scale has 30 styles: 15 baseline roles in five groups (display, headline, title, body and label) and 15 emphasized styles with a higher weight for selection, actions and headlines. Use `Text` or a `m3-typescale-*` class so that text follows the theme fonts.',
  imports: ['Text'],
  preview: () => (
    <div className="typography-doc-specimen">
      <span className="typography-doc-specimen__glyph">Aa</span>
      <div className="typography-doc-specimen__content">
        <span className="typography-doc-specimen__title">Roboto Flex</span>
        <span className="typography-doc-specimen__subtitle">15 baseline + 15 emphasized</span>
        <div className="typography-doc-specimen__chips">
          <span className="typography-doc-specimen__chip typography-doc-specimen__chip--primary">
            Headline
          </span>
          <span className="typography-doc-specimen__chip typography-doc-specimen__chip--muted">
            Body
          </span>
        </div>
      </div>
    </div>
  ),
  playground: {
    controls: {
      variant: {
        type: 'select',
        label: 'Role',
        options: [
          'display-large',
          'display-medium',
          'display-small',
          'headline-large',
          'headline-medium',
          'headline-small',
          'title-large',
          'title-medium',
          'title-small',
          'body-large',
          'body-medium',
          'body-small',
          'label-large',
          'label-medium',
          'label-small',
        ],
        default: 'body-large',
      },
      emphasized: { type: 'boolean', default: false },
      as: {
        type: 'select',
        label: 'Element',
        options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'strong'],
        default: 'p',
      },
      color: {
        type: 'select',
        options: ['inherit', 'on-surface', 'on-surface-variant', 'primary', 'tertiary', 'error'],
        default: 'inherit',
      },
      text: { type: 'text', default: 'Share the folder when the files are ready' },
    },
    render: (v) => (
      <Text
        variant={v.variant}
        emphasized={v.emphasized}
        as={v.as}
        color={v.color === 'inherit' ? undefined : v.color}
      >
        {v.text}
      </Text>
    ),
    code: (v, { jsx, changed }) =>
      jsx(
        'Text',
        {
          ...changed(v, ['variant']),
          emphasized: v.emphasized,
          ...changed(v, ['as']),
          color: v.color === 'inherit' ? undefined : v.color,
        },
        v.text,
      ),
  },
  api: [
    {
      name: 'Text',
      interfaces: ['TextProps'],
      inherits:
        'Also accepts the HTML attributes of the chosen element. Outside `Text`, the classes `m3-typescale-<role>` and `m3-typescale-emphasized-<role>` apply the same styles to any element, and the tokens `--md-sys-typescale-<role>` and `--md-sys-typescale-emphasized-<role>` hold them for your own CSS.',
    },
  ],
  guidelines: [
    'Use display roles for short, large text such as a greeting on a start screen, and body roles for paragraphs.',
    'Choose the element (`as`) from the document outline and the role (`variant`) from the visual design. They do not have to match.',
    'Show hierarchy with a few roles and color roles. Do not set font sizes by hand.',
    'Use emphasized styles for selected items, primary actions, unread messages and editorial headlines, together with the baseline styles.',
    'Keep lines of body text at about 40 to 80 characters.',
  ],
})

/**
 * Type scale
 * All 15 roles, from display large to label small. Each role sets the font, size, line height, weight and letter spacing.
 */
export function ExampleScale() {
  const groups = ['display', 'headline', 'title', 'body', 'label'] as const
  const sizes = ['large', 'medium', 'small'] as const
  const sample = {
    display: 'Good morning',
    headline: 'Account settings',
    title: 'Card title',
    body: 'Body text for messages and descriptions.',
    label: 'Button and tab label',
  }
  return (
    <div className="g-fill">
      {groups.flatMap((group) =>
        sizes.map((size) => {
          const role = `${group}-${size}` as const
          return (
            <div key={role} className="g-type-row">
              <code>{role}</code>
              <Text variant={role}>{sample[group]}</Text>
            </div>
          )
        }),
      )}
    </div>
  )
}

/**
 * Emphasized styles
 * Each role has an emphasized style with a higher weight (M3 Expressive). Baseline on the left, emphasized on the right.
 */
export function ExampleEmphasized() {
  const roles = [
    'display-small',
    'headline-medium',
    'title-large',
    'title-medium',
    'body-large',
    'label-large',
  ] as const
  return (
    <div className="g-fill">
      {roles.map((role) => (
        <div key={role} className="typography-doc-pair">
          <code>{role}</code>
          <Text variant={role}>Weekend</Text>
          <Text variant={role} emphasized>
            Weekend
          </Text>
        </div>
      ))}
    </div>
  )
}

/**
 * Emphasis in context
 * Emphasized styles mark what matters: here the unread message and its sender, next to read ones in the baseline style.
 */
export function ExampleEmphasisInContext() {
  return (
    <div className="g-stack" style={{ gap: 12, maxWidth: 420 }}>
      <div>
        <Text variant="title-medium" emphasized>
          Grace Hopper
        </Text>
        <Text variant="body-medium" emphasized>
          Can you send the slides before 3pm?
        </Text>
      </div>
      <div>
        <Text variant="title-medium">Alan Turing</Text>
        <Text variant="body-medium" color="on-surface-variant">
          Thanks, the report looks good.
        </Text>
      </div>
    </div>
  )
}

/**
 * Element and role
 * `as` sets the HTML element and `variant` sets the look. Here the trip name is an `h1` in headline small, because the app bar above it is larger.
 */
export function ExampleElements() {
  return (
    <section className="g-stack" style={{ maxWidth: 520 }}>
      <Text as="h1" variant="headline-small">
        Trip to Lisbon
      </Text>
      <Text variant="body-medium" color="on-surface-variant">
        Planned by Ada Lovelace
      </Text>
      <Text as="h2" variant="title-medium">
        Flights
      </Text>
      <Text variant="body-large">
        Both flights are booked. Your boarding passes arrive by email one day before you leave.
      </Text>
    </section>
  )
}

/**
 * Color roles
 * `color` takes a color role, such as `on-surface-variant` or `error`, and reads it from the theme.
 */
export function ExampleColor() {
  return (
    <div className="g-stack" style={{ gap: 4 }}>
      <Text variant="title-medium">Harbor budget 12.xlsx</Text>
      <Text variant="body-medium" color="on-surface-variant">
        /projects/harbor
      </Text>
      <Text variant="label-large" color="primary">
        Shared
      </Text>
      <Text variant="label-large" color="error">
        Sync failed
      </Text>
    </div>
  )
}

/**
 * Typescale classes
 * Add a `m3-typescale-<role>` class to any element that is not a `Text`, such as a description list or a third-party component.
 */
export function ExampleClasses() {
  return (
    <dl className="typography-doc__details">
      <dt className="m3-typescale-label-large">Owner</dt>
      <dd className="m3-typescale-body-medium">Grace Hopper</dd>
      <dt className="m3-typescale-label-large">Location</dt>
      <dd className="m3-typescale-body-medium">/projects/harbor</dd>
      <dt className="m3-typescale-label-large">Shared with</dt>
      <dd className="m3-typescale-body-medium">Ada Lovelace, Alan Turing</dd>
    </dl>
  )
}
