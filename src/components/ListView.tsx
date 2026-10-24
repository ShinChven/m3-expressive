import { useVirtualizer } from '@tanstack/react-virtual'
import {
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useRef,
  useState,
} from 'react'
import { cx, useControllableState } from '../utils/hooks'

export interface ListViewProps<T = unknown>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onSelect'> {
  /** Array of items to render. */
  items: readonly T[]
  /** Returns a unique key for each item. Defaults to index. */
  getItemKey?: (item: T, index: number) => string | number
  /** Renders one item at the given index. */
  renderItem: (item: T, index: number, state: { selected: boolean; active: boolean }) => ReactNode
  /** Estimated row height in px. Defaults to 56. */
  estimateSize?: number | ((index: number) => number)
  /** Number of items to render beyond the visible viewport. Defaults to 5. */
  overscan?: number
  /** Standard list or segmented items with gaps. */
  variant?: 'standard' | 'segmented'
  /** Fixed container height. Defaults to 400. */
  height?: number | string
  /** Maximum container height. */
  maxHeight?: number | string
  /** Selection mode: none, single item or multiple. */
  selection?: 'none' | 'single' | 'multiple'
  /** Controlled selected item keys. */
  selectedKeys?: (string | number)[]
  /** Initial selected item keys. */
  defaultSelectedKeys?: (string | number)[]
  /** Called when the selection changes. */
  onSelectionChange?: (keys: (string | number)[]) => void
  /** Called when an item is clicked. */
  onItemClick?: (item: T, index: number) => void
  /** Content to display when items is empty. */
  empty?: ReactNode
}

/**
 * Virtualized List View (M3 Expressive): smoothly renders large datasets (10,000+ items)
 * with 60fps scrolling, item selection, keyboard navigation, and M3 list styling.
 */
export function ListView<T>({
  items,
  getItemKey = (_item, index) => index,
  renderItem,
  estimateSize = 56,
  overscan = 5,
  variant = 'standard',
  height = 400,
  maxHeight,
  selection = 'none',
  selectedKeys: selectedKeysProp,
  defaultSelectedKeys = [],
  onSelectionChange,
  onItemClick,
  empty,
  className,
  style,
  tabIndex = 0,
  ...rest
}: ListViewProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  const [selectedKeys, setSelectedKeys] = useControllableState({
    value: selectedKeysProp,
    defaultValue: defaultSelectedKeys,
    onChange: onSelectionChange,
  })

  const sizeFn = typeof estimateSize === 'function' ? estimateSize : () => estimateSize

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => containerRef.current,
    estimateSize: sizeFn,
    overscan,
  })

  const selectedSet = new Set(selectedKeys)

  const toggleSelect = (key: string | number) => {
    if (selection === 'none') return
    if (selection === 'single') {
      const next = selectedSet.has(key) ? [] : [key]
      setSelectedKeys(next)
    } else {
      const next = new Set(selectedSet)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      setSelectedKeys([...next])
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (items.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.min(items.length - 1, activeIndex + 1)
      setActiveIndex(next)
      virtualizer.scrollToIndex(next, { align: 'auto' })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = Math.max(0, activeIndex - 1)
      setActiveIndex(prev)
      virtualizer.scrollToIndex(prev, { align: 'auto' })
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveIndex(0)
      virtualizer.scrollToIndex(0, { align: 'start' })
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveIndex(items.length - 1)
      virtualizer.scrollToIndex(items.length - 1, { align: 'end' })
    } else if (
      (e.key === 'Enter' || e.key === ' ') &&
      activeIndex >= 0 &&
      activeIndex < items.length
    ) {
      e.preventDefault()
      const item = items[activeIndex]!
      const key = getItemKey(item, activeIndex)
      toggleSelect(key)
      onItemClick?.(item, activeIndex)
    }
  }

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <div
      {...rest}
      ref={containerRef}
      role={selection !== 'none' ? 'listbox' : 'list'}
      tabIndex={tabIndex}
      className={cx('m3-list-view', className)}
      style={
        {
          height: typeof height === 'number' ? `${height}px` : height,
          maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
          ...style,
        } as CSSProperties
      }
      data-variant={variant}
      onKeyDown={handleKeyDown}
    >
      {items.length === 0 ? (
        empty ? (
          <div className="m3-list-view__empty">{empty}</div>
        ) : null
      ) : (
        <div className="m3-list-view__inner" style={{ height: `${virtualizer.getTotalSize()}px` }}>
          {virtualItems.map((virtualItem) => {
            const item = items[virtualItem.index]!
            const key = getItemKey(item, virtualItem.index)
            const isSelected = selectedSet.has(key)
            const isActive = activeIndex === virtualItem.index

            return (
              <div
                key={virtualItem.key}
                data-index={virtualItem.index}
                className="m3-list-view__item"
                style={{
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                onClick={() => {
                  setActiveIndex(virtualItem.index)
                  toggleSelect(key)
                  onItemClick?.(item, virtualItem.index)
                }}
              >
                {renderItem(item, virtualItem.index, { selected: isSelected, active: isActive })}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
