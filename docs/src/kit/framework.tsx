import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'

export type Framework = 'react' | 'vue' | 'html'

interface FrameworkContextValue {
  framework: Framework
  setFramework: (framework: Framework) => void
}

const FrameworkContext = createContext<FrameworkContextValue>({
  framework: 'react',
  setFramework: () => {},
})

const STORAGE_KEY = 'm3-framework-preference'

export function FrameworkProvider({ children }: { children: ReactNode }) {
  const [framework, setFrameworkState] = useState<Framework>(() => {
    if (typeof window === 'undefined') return 'react'
    const params = new URLSearchParams(window.location.search)
    const fromUrl = params.get('fw') as Framework | null
    if (fromUrl === 'react' || fromUrl === 'vue' || fromUrl === 'html') {
      return fromUrl
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as Framework | null
    if (stored === 'react' || stored === 'vue' || stored === 'html') {
      return stored
    }
    return 'react'
  })

  const setFramework = (next: Framework) => {
    setFrameworkState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
      const url = new URL(window.location.href)
      if (next === 'react') {
        url.searchParams.delete('fw')
      } else {
        url.searchParams.set('fw', next)
      }
      window.history.replaceState(null, '', url.toString())
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const fromUrl = params.get('fw') as Framework | null
      if (fromUrl === 'react' || fromUrl === 'vue' || fromUrl === 'html') {
        setFrameworkState(fromUrl)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <FrameworkContext.Provider value={{ framework, setFramework }}>
      {children}
    </FrameworkContext.Provider>
  )
}

export function useFramework() {
  return useContext(FrameworkContext)
}
