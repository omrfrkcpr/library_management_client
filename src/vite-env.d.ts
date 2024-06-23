/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Form = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  publicationYear: number;
  description: string;
  image: string;
  detailUrl: string;
} & Record<string, any>;

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
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isEdited: boolean;
}
