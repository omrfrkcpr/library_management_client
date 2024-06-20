import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type BookFormProps = {
  form: Form;
  setForm: Dispatch<SetStateAction<Form>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

const BookForm: React.FC<BookFormProps> = ({
  form,
  setForm,
  handleSubmit,
  showForm,
  setShowForm,
}) => {
  const [isVisible, setIsVisible] = useState(showForm);

  useEffect(() => {
    if (showForm) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200); // 500ms = fade-out duration
      return () => clearTimeout(timer);
    }
  }, [showForm]);

  return (
    <>
      {isVisible && (
        <div className="w-[100%] h-[100%] bg-white/80 fixed z-50">
          <div
            className={`w-[85%] max-w-[400px] h-auto p-10 bg-purple-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] duration-400 transition-opacity shadow-xl ${
              showForm ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoMdClose
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 w-5 h-5 hover:text-gray-500 cursor-pointer"
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-2 mb-4"
            >
              <div className="text-2xl text-center mb-4 border-b border-gray-400">
                Book Information
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="author"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="isbn">ISBN:</label>
                <input
                  type="text"
                  id="isbn"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="isbn"
                  value={form?.isbn}
                  onChange={(e) => setForm({ ...form, isbn: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="genre"
                  value={form?.genre}
                  onChange={(e) => setForm({ ...form, genre: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="publicationYear">Publication Year:</label>
                <input
                  type="number"
                  id="publicationYear"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="publicationYear"
                  value={
                    form?.publicationYear === 0 ? "" : form?.publicationYear
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      publicationYear: parseInt(e.target.value, 10),
                    })
                  }
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label htmlFor="image">Image:</label>
                <input
                  type="text"
                  id="image"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm py-1"
                  name="image"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
              </div>
            </form>
            <button
              type="submit"
              className="py-1 px-3 w-full text-center mt-4 bg-purple-500 text-white rounded-full hover:bg-purple-400"
            >
              Submit Book
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookForm;
