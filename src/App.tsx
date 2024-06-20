/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";

const initialFormState = {
  title: "",
  author: "",
  genre: "",
  isbn: "",
  publicationYear: 0,
  description: "",
  image: "",
};

function App() {
  const [form, setForm] = useState<Form>(initialFormState);
  const [books, setBooks] = useState<Book[]>([]);

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
    <div>
      Library Management System
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={form.isbn}
            onChange={(e) => setForm({ ...form, isbn: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="publicationYear">Publication Year</label>
          <input
            type="number"
            id="publicationYear"
            name="publicationYear"
            value={form.publicationYear}
            onChange={(e) =>
              setForm({ ...form, publicationYear: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <button type="submit">Submit Book</button>
      </form>
      <BookList books={books} />
    </div>
  );
}

export default App;
