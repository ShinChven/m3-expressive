import { useEffect, useRef } from 'react'
import { type App, type Component, createApp, reactive } from 'vue'

export interface VueMountProps {
  component: Component
  props?: Record<string, unknown>
  className?: string
}

export function VueMount({ component, props = {}, className }: VueMountProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactivePropsRef = useRef<Record<string, unknown> | null>(null)
  const appRef = useRef<App | null>(null)
  // biome-ignore lint/correctness/useExhaustiveDependencies: initial props only; updates handled by separate effect
  useEffect(() => {
    if (!containerRef.current) return

    const reactiveProps = reactive({ ...props })
    reactivePropsRef.current = reactiveProps

    const mountedApp = createApp(component, reactiveProps)
    mountedApp.mount(containerRef.current)
    appRef.current = mountedApp

    return () => {
      mountedApp.unmount()
      appRef.current = null
      reactivePropsRef.current = null
    }
  }, [component])

  useEffect(() => {
    if (reactivePropsRef.current) {
      Object.assign(reactivePropsRef.current, props)
    }
  }, [props])

  return <div ref={containerRef} className={className} style={{ display: 'contents' }} />
}
