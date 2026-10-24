import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.removeAttribute('data-m3-theme')
  document.documentElement.removeAttribute('data-motion-scheme')
})

// --- matchMedia driven by a configurable viewport width ---------------------------------
type Listener = (event: MediaQueryListEvent) => void
const queries = new Map<string, Set<Listener>>()
let viewportWidth = 1024

function evaluate(query: string): boolean {
  const min = /\(min-width:\s*([\d.]+)px\)/.exec(query)
  const max = /\(max-width:\s*([\d.]+)px\)/.exec(query)
  if (min || max) {
    return (!min || viewportWidth >= Number(min[1])) && (!max || viewportWidth <= Number(max[1]))
  }
  return false
}

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: (query: string) => {
    const listeners = queries.get(query) ?? new Set<Listener>()
    queries.set(query, listeners)
    return {
      media: query,
      get matches() {
        return evaluate(query)
      },
      onchange: null,
      addEventListener: (_: string, l: Listener) => listeners.add(l),
      removeEventListener: (_: string, l: Listener) => listeners.delete(l),
      addListener: (l: Listener) => listeners.add(l),
      removeListener: (l: Listener) => listeners.delete(l),
      dispatchEvent: () => true,
    }
  },
})

/** Changes the emulated viewport width and notifies media query listeners. */
export function setViewportWidth(width: number) {
  viewportWidth = width
  for (const [query, listeners] of queries) {
    for (const l of listeners) l({ matches: evaluate(query), media: query } as MediaQueryListEvent)
  }
}

afterEach(() => setViewportWidth(1024))

// --- APIs jsdom lacks ------------------------------------------------------------------
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver ??= ResizeObserverStub as unknown as typeof ResizeObserver
Element.prototype.scrollIntoView ??= () => {}
Element.prototype.scrollTo ??= () => {}
Element.prototype.setPointerCapture ??= () => {}
Element.prototype.releasePointerCapture ??= () => {}
Element.prototype.hasPointerCapture ??= () => false

// The virtualized tree needs a measurable viewport.
const clientHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'clientHeight')
Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  configurable: true,
  get(this: HTMLElement) {
    if (this.classList.contains('m3-tree__scroll')) return 600
    return clientHeight?.get?.call(this) ?? 0
  },
})
const clientWidth = Object.getOwnPropertyDescriptor(Element.prototype, 'clientWidth')
Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  get(this: HTMLElement) {
    if (this.classList.contains('m3-tree__scroll')) return 320
    return clientWidth?.get?.call(this) ?? 0
  },
})
