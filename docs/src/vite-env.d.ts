/// <reference types="vite/client" />

declare module 'virtual:m3-api' {
  import type { ApiData } from '../plugins/m3-api'

  const data: ApiData
  export default data
}
