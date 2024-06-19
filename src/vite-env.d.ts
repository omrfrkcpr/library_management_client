/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
