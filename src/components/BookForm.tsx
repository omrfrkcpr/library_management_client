/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type BookFormProps = {
  form: Form;
  setForm: Dispatch<SetStateAction<Form>>;
  handleSubmit: ({
    e,
    bookInfo,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    bookInfo: Book;
  }) => void;
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

  const isFormEmpty = () => {
    return Object.values(form).every(
      (value) => value === "" || value === 0 || value === undefined
    );
  };

  return (
    <>
      {isVisible && (
        <div className="w-[100%] h-[100%] bg-white/80 fixed z-50">
          <div
            className={`w-[90%] max-w-[400px] h-auto p-6 md:p-10 bg-purple-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] duration-400 transition-opacity shadow-xl ${
              showForm ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoMdClose
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 w-5 h-5 hover:text-gray-500 cursor-pointer"
            />
            <form className="flex flex-col space-y-2 mb-4">
              <div className="text-2xl text-center mb-4 border-b border-gray-400">
                Book Information
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="title">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="author">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="author"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="description">
                  Description:
                </label>
                <input
                  type="text"
                  id="description"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="isbn">
                  ISBN:
                </label>
                <input
                  type="text"
                  id="isbn"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="isbn"
                  value={form?.isbn}
                  onChange={(e) => setForm({ ...form, isbn: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="genre">
                  Genre:
                </label>
                <input
                  type="text"
                  id="genre"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="genre"
                  value={form?.genre}
                  onChange={(e) => setForm({ ...form, genre: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="publicationYear">
                  Publication Year:
                </label>
                <input
                  type="number"
                  id="publicationYear"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
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
                <label className="text-sm md:text-md" htmlFor="image">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="image"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="image"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
              </div>
              <div className="space-x-2 flex justify-between">
                <label className="text-sm md:text-md" htmlFor="detailUrl">
                  Detail Info URL:
                </label>
                <input
                  type="text"
                  id="detailUrl"
                  className="outline-none border border-gray-500 rounded-xl px-3 text-sm md:py-1"
                  name="detailUrl"
                  value={form.detailUrl}
                  onChange={(e) =>
                    setForm({ ...form, detailUrl: e.target.value })
                  }
                />
              </div>
            </form>
            <button
              onClick={(e: any) => handleSubmit(e)}
              onKeyDown={(e: any) => e.key === "Enter" && handleSubmit(e)}
              className="md:py-1 px-3 w-full text-center mt-4 bg-purple-500 text-white rounded-full hover:bg-purple-400"
            >
              {isFormEmpty() ? "Submit New Book" : "Update Book"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookForm;
