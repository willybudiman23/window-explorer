/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_EXPLORER_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}