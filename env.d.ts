/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_API_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
