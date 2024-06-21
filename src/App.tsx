/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navbar from "./components/Navbar";
import Swal from "sweetalert2";

const initialFormState = {
  title: "",
  author: "",
  genre: "",
  isbn: "",
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
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}:${
          import.meta.env.VITE_SERVER_PORT
        }/books`,
        form
      );
      Swal.fire({
        title: "Success!",
        text: "New Book is successfully added!",
        icon: "success",
      });
      getBooksData();
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    } finally {
      setForm(initialFormState);
      setShowForm(false);
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
