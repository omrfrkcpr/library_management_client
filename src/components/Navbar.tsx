/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import { FaBookReader } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

export default function Navbar({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="mx-auto top-0 sticky px-2 sm:px-6 lg:px-8 bg-purple-100 z-10">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <h1 className="text-lg md:text-2xl text-purple-400 flex justify-center items-center gap-3">
              <FaBookReader />
              <span className="text-purple-800">Library Management System</span>
            </h1>
          </div>
        </div>
        <div className="absolute inset-y-2 right-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            onClick={() => setShowForm(true)}
            className="bg-purple-500 text-white hover:text-purple-500 font-bold hover:bg-gray-100 border border-purple-500 rounded-full duration-300"
          >
            <IoIosAdd className="w-7 h-7 md:w-10 md:h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
