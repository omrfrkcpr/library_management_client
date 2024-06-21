/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";

type BookFormProps = {
  form: Form;
  setForm: Dispatch<SetStateAction<Form>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  initialFormState: Form;
};

const BookForm: React.FC<BookFormProps> = ({
  form,
  setForm,
  handleSubmit,
  showForm,
  setShowForm,
  editMode,
  setEditMode,
  initialFormState,
}) => {
  const [isVisible, setIsVisible] = useState(showForm);
  const formDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showForm) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showForm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formDiv.current && !formDiv.current.contains(event.target as Node)) {
        setShowForm(false);
        setForm(initialFormState);
        setEditMode(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm, setShowForm, setForm, setEditMode, initialFormState]);

  const handleFormClose = () => {
    setForm(initialFormState);
    setShowForm(false);
    setEditMode(false);
  };

  return (
    <>
      {isVisible && (
        <div className="w-[100%] h-[100%] bg-white/80 fixed z-50">
          <div
            ref={formDiv}
            className={`w-[90%] max-w-[400px] h-auto p-6 md:p-10 bg-purple-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] duration-400 transition-opacity shadow-xl ${
              showForm ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoMdClose
              onClick={handleFormClose}
              className="absolute top-2 right-2 w-5 h-5 hover:text-gray-500 cursor-pointer"
            />
            <form
              className="flex flex-col space-y-2 mb-4"
              onSubmit={handleSubmit}
            >
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
                  value={form.publicationYear === 0 ? "" : form.publicationYear}
                  onChange={(e) =>
                    setForm({ ...form, publicationYear: +e.target.value })
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
                  Detail URL:
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
              <div className="text-center">
                <button
                  className={`py-1 px-3 w-[130px] mt-5 rounded-xl text-white transition-all ${
                    editMode
                      ? "bg-orange-400 hover:bg-orange-300"
                      : "bg-green-600 hover:bg-green-300"
                  }`}
                  type="submit"
                >
                  {editMode ? "Update Book" : "Add Book"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookForm;
