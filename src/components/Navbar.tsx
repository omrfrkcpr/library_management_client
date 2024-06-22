/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { BookContext } from "../context/BookContext";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { setShowForm } = useContext(BookContext) as BookContextType;
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <div className="mx-auto top-0 sticky px-2 sm:px-6 lg:px-8 bg-purple-100 z-10">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <h1 className="text-lg md:text-2xl text-purple-400 flex justify-center items-center gap-3">
              <FaBookReader />
              <Link to="/" className="text-purple-800">
                Novelit
              </Link>
            </h1>
          </div>
        </div>
        <div className="absolute inset-y-2 right-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
          {showSearchBar ? (
            <SearchBar setShowSearchBar={setShowSearchBar} />
          ) : (
            <button onClick={() => setShowSearchBar(true)}>
              <CiSearch className="w-5 h-5 md:w-8 md:h-8 hover:text-gray-400 duration-300" />
            </button>
          )}
          {!pathname.includes("book/") && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-purple-500 text-white hover:text-purple-500 font-bold hover:bg-gray-100 border border-purple-500 rounded-full duration-300"
            >
              <IoIosAdd className="w-7 h-7 md:w-10 md:h-10" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
