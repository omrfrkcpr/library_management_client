import { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import { truncateText } from "../helpers/functions";

const SearchBar = ({
  setShowSearchBar,
}: {
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { books } = useContext(BookContext) as BookContextType;
  const searchBarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSearchBar]);

  const filteredBooks = books?.filter((book: Book) => {
    const { title, description, genre, author, isbn, publicationYear } = book;
    return (
      title.toLowerCase().includes(searchValue.toLowerCase()) ||
      description.toLowerCase().includes(searchValue.toLowerCase()) ||
      genre.toLowerCase().includes(searchValue.toLowerCase()) ||
      author.toLowerCase().includes(searchValue.toLowerCase()) ||
      isbn.toLowerCase().includes(searchValue.toLowerCase()) ||
      publicationYear.toString() === searchValue
    );
  });

  const handleBookSelect = (bookId: string) => {
    navigate(`/book/${bookId}`);
    setShowSearchBar(false); // Close the search bar after selection
  };

  return (
    <div ref={searchBarRef} className="w-[300px] relative">
      <input
        type="text"
        placeholder="Search Book..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="py-2 px-2 rounded-xl w-[355px] -ms-[15px] sm:ms-0 sm:w-full outline-none text-[14px]"
        autoFocus
      />
      {searchValue.length <= 27 && (
        <CiSearch className="absolute top-[6px] -right-[30px] sm:right-2 w-6 h-6 text-gray-400" />
      )}
      {!searchValue ? (
        ""
      ) : filteredBooks.length ? (
        <ul className="list-none absolute -bottom-25 h-auto w-[355px] -ms-[15px] sm:ms-0 sm:w-full bg-gray-100 z-50 rounded-xl shadow-xl">
          {filteredBooks.slice(0, 3).map((book: Book) => (
            <li
              key={book?.id}
              className="hover:bg-gray-200 p-2 cursor-pointer"
              onClick={() => handleBookSelect(book.id)}
            >
              <h3 className="font-semibold text-sm">
                {book?.title} -{" "}
                <span className="font-normal">{book?.author}</span>
              </h3>
              <p className="text-xs font-light">
                {truncateText(book?.description, 20)}...
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="absolute h-auto w-[355px] -ms-[15px] sm:ms-0 sm:w-full bg-gray-100 z-50 -bottom-10 p-2 shadow-xl rounded-xl text-gray-400">
          No Results Found
        </div>
      )}
    </div>
  );
};

export default SearchBar;
