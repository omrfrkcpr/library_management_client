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

interface BookContextType {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  books: Book[];
  getBooksData: () => Promise<void>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
  handleEdit: (oldBook: Book) => void;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  initialFormState: Form;
}

interface BookListProps {
  books: Book[];
  handleDelete: (id: string) => void;
  handleEdit: ({ id, oldBook }: { id: string; oldBook: Form }) => void;
}
