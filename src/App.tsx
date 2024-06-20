/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navbar from "./components/Navbar";

const initialFormState = {
  title: "",
  author: "",
  genre: "",
  isbn: 0,
  publicationYear: 0,
  description: "",
  image: "",
  detailUrl: "",
};

function App() {
  const [form, setForm] = useState<Form>(initialFormState);
  const [books, setBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const getBooksData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_HOST}:${
        import.meta.env.VITE_SERVER_PORT
      }/books`
    );
    // console.log(response.data.books);
    setBooks(response.data.books);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setForm(initialFormState);

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}:${
          import.meta.env.VITE_SERVER_PORT
        }/books`,
        form
      );
      getBooksData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <div className="relative">
      <BookForm
        handleSubmit={handleSubmit}
        form={form}
        setForm={setForm}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <Navbar setShowForm={setShowForm} />
      <div className="">
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
