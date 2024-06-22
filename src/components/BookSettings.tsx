import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BookContext } from "../context/BookContext";

const BookSettings = ({ id, book }: { id: string; book: Book }) => {
  const { handleDelete, handleEdit } = useContext(
    BookContext
  ) as BookContextType;
  return (
    <>
      <RiDeleteBin6Fill
        onClick={() => handleDelete(id)}
        className="text-sm md:text-md lg:text-lg cursor-pointer text-red-500 hover:scale-125 hover:text-red-300"
      />
      <FaEdit
        onClick={() => handleEdit(book)}
        className="text-sm md:text-md lg:text-lg cursor-pointer text-orange-400 hover:scale-125 hover:text-orange-300"
      />
    </>
  );
};

export default BookSettings;
