/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoMdClose } from "react-icons/io";
import { BookContext } from "../context/BookContext";
import spinner from "../assets/loading-spinner.gif";

const formFields = [
  { id: "title", label: "Title", type: "text" },
  { id: "author", label: "Author", type: "text" },
  { id: "description", label: "Description", type: "text" },
  { id: "isbn", label: "ISBN", type: "text" },
  { id: "genre", label: "Genre", type: "text" },
  { id: "publicationYear", label: "First Publication Year", type: "number" },
  { id: "image", label: "Image URL", type: "text" },
  { id: "detailUrl", label: "Detail URL", type: "text" },
];

const BookForm = () => {
  const {
    form,
    setForm,
    handleSubmit,
    showForm,
    setShowForm,
    editMode,
    setEditMode,
    initialFormState,
    loading,
  } = React.useContext(BookContext) as BookContextType;

  const [isVisible, setIsVisible] = React.useState(showForm);
  const formDiv = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showForm) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showForm]);

  React.useEffect(() => {
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

  const renderFormFields = () =>
    formFields.map((field) => (
      <div className="space-x-2 flex justify-between" key={field?.id}>
        <label
          className="text-sm md:text-md w-[250px] md:w-[190px]"
          htmlFor={field?.id}
        >
          {field?.label}:
        </label>
        <input
          type={field?.type}
          id={field?.id}
          className="outline-none border border-gray-500 rounded-md px-3 text-sm md:py-1 w-[100%]"
          name={field.id}
          value={form?.[field?.id] || ""}
          required
          onChange={(e) =>
            setForm({
              ...form,
              [field?.id]:
                field?.type === "number" ? +e.target.value : e.target.value,
            })
          }
        />
      </div>
    ));

  return (
    <>
      {isVisible && (
        <div className="w-[100%] h-[100%] bg-white/80 fixed z-50">
          <div
            ref={formDiv}
            className={`w-[96%] max-w-[600px] h-auto p-6 md:p-10 bg-purple-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] duration-400 transition-opacity shadow-xl ${
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
              {renderFormFields()}
              <div className="text-center">
                <button
                  disabled={!loading}
                  className={`${
                    loading ? "py-0" : "py-1"
                  } px-3 w-[130px] mt-5 rounded-xl text-white transition-all cursor-pointer ${
                    editMode
                      ? "bg-orange-400 hover:bg-orange-300"
                      : "bg-green-600 hover:bg-green-300"
                  }`}
                  type="submit"
                >
                  {loading ? (
                    <span className="flex justify-center items-center">
                      <span>Loading...</span>
                      <img
                        src={spinner}
                        alt="loading-spinner"
                        className="mx-auto w-[24px] h-[24px] text-center"
                      />
                    </span>
                  ) : editMode ? (
                    "Update Book"
                  ) : (
                    "Add Book"
                  )}
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
