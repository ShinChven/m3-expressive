import { Icon, ListItem, ListView, useSnackbar } from '@m3-expressive/react'
import { useMemo, useState } from 'react'
import { defineDoc, raw } from '../kit/doc'

interface ContactItem {
  id: string
  name: string
  email: string
  role: string
}

function generateContacts(count: number): ContactItem[] {
  const roles = ['Product Designer', 'Frontend Engineer', 'Tech Lead', 'Engineering Manager']
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `Team Member #${i + 1}`,
    email: `member.${i + 1}@example.com`,
    role: roles[i % roles.length]!,
  }))
}

const PREVIEW_ITEMS = generateContacts(10)

export const doc = defineDoc({
  slug: 'list-view',
  name: 'List view',
  group: 'data',
  icon: 'format_list_bulleted',
  order: 2,
  summary:
    'List views render large collections of data (10,000+ items) using virtual scrolling at 60fps. Supports keyboard navigation, selection, and standard or segmented M3 list items.',
  imports: ['ListView', 'ListItem', 'Icon', 'useSnackbar'],
  preview: () => (
    <div className="g-preview-col" style={{ height: 180, width: '100%', overflow: 'hidden' }}>
      <ListView
        items={PREVIEW_ITEMS}
        height={180}
        estimateSize={52}
        renderItem={(item) => (
          <ListItem
            headline={item.name}
            supportingText={item.email}
            leading={<Icon name="account_circle" />}
          />
        )}
      />
    </div>
  ),
  playground: {
    controls: {
      count: {
        type: 'select',
        options: ['100', '1000', '10000'],
        default: '1000',
        label: 'Items count',
      },
      variant: {
        type: 'select',
        options: ['standard', 'segmented'],
        default: 'standard',
      },
      selection: {
        type: 'select',
        options: ['none', 'single', 'multiple'],
        default: 'single',
      },
    },
    render: function ListViewPlayground(v) {
      const count = Number(v.count)
      const items = useMemo(() => generateContacts(count), [count])
      const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['user-1'])
      const snackbar = useSnackbar()

      return (
        <div style={{ width: '100%', maxWidth: 540 }}>
          <ListView
            items={items}
            getItemKey={(item) => item.id}
            variant={v.variant}
            selection={v.selection}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            height={360}
            estimateSize={64}
            onItemClick={(item) => snackbar.show(`Selected ${item.name}`)}
            renderItem={(item, _index, state) => (
              <ListItem
                headline={item.name}
                supportingText={item.email}
                trailing={item.role}
                leading={<Icon name="account_circle" />}
                selected={state.selected}
              />
            )}
          />
        </div>
      )
    },
    code: (v, { jsx, changed }) => {
      const count = Number(v.count)
      return [
        `const items = useMemo(() => generateContacts(${count}), [])`,
        `const [selectedKeys, setSelectedKeys] = useState(['user-1'])`,
        '',
        jsx(
          'ListView',
          {
            items: raw('items'),
            getItemKey: raw('(item) => item.id'),
            ...changed(v, ['variant', 'selection']),
            selectedKeys: raw('selectedKeys'),
            onSelectionChange: raw('setSelectedKeys'),
            height: 360,
            estimateSize: 64,
            renderItem: raw(
              `(\n    (item, index, state) => (\n      <ListItem\n        headline={item.name}\n        supportingText={item.email}\n        trailing={item.role}\n        leading={<Icon name="account_circle" />}\n        selected={state.selected}\n      />\n    )\n  )`,
            ),
          },
          undefined,
        ),
      ].join('\n')
    },
    stage: 'center',
  },
  api: [
    {
      name: 'ListView',
      interfaces: ['ListViewProps'],
      inherits:
        'Accepts native `<div>` attributes. Uses `@tanstack/react-virtual` under the hood for 60fps virtualization.',
    },
  ],
  guidelines: [
    'Use `ListView` instead of a plain `List` whenever items count can exceed 50 items to keep the DOM light and scrolling smooth.',
    'Always provide `estimateSize` that roughly matches your item height (e.g. 56–72px).',
    'Supports keyboard arrows (Up, Down, Home, End) and Enter to activate/select virtualized rows.',
  ],
})

/**
 * 10,000 items virtual scrolling
 * Smoothly navigates 10,000 items with zero DOM bloat.
 */
export function ExampleTenThousandItems() {
  const items = useMemo(() => generateContacts(10000), [])
  return (
    <div style={{ maxWidth: 540 }}>
      <ListView
        items={items}
        getItemKey={(item) => item.id}
        height={320}
        estimateSize={56}
        renderItem={(item) => (
          <ListItem
            headline={item.name}
            supportingText={item.email}
            leading={<Icon name="person" />}
          />
        )}
      />
    </div>
  )
}
