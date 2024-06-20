/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Form {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  publicationYear: number;
  description: string;
  image: string;
  detailUrl: string;
}

interface Book extends Form {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface BookListProps {
  books: Book[];
}
