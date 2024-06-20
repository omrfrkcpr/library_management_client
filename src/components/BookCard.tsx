import React from "react";
import { truncateText } from "../helpers/functions";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const {
    title,
    author,
    genre,
    publicationYear,
    description,
    image,
    isbn,
    detailUrl,
  } = book;
  return (
    <div className="flex w-[340px] lg:w-[500px] h-[220px] lg:h-[300px] overflow-hidden shadow-lg relative rounded-xl">
      <div>
        <img
          className="w-[200px] lg:w-[330px] h-[240px] object-fit lg:object-cover lg:h-auto"
          src={image}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="p-3 w-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-sm md:text-lg lg:text-xl mb-2 text-center border-b-[1px] border-gray-300">
            {title}
            <span className="flex items-center w-[fit-content] justify-start rounded-full text-[10px] md:text-[14px] font-semibold text-gray-700 mx-auto">
              {author}
            </span>
          </div>
          <p className="text-gray-700 text-[10px] lg:text-[16px] pb-2">
            {truncateText(description)}
            <a
              href={detailUrl}
              target="_blank"
              className="text-blue-400 hover:underline text-[10px] lg:text-sm"
            >
              More
            </a>
          </p>
        </div>
        <div className="flex flex-col border-t-[1px] border-gray-300 pt-2 absolute bottom-0 w-[280px] pb-2">
          <div className="flex justify-between">
            <span className="flex items-center w-[fit-content] max-w-[150px] overflow-auto justify-start bg-gray-200 rounded-full px-1 md:px-3 py-1 text-[10px] md:text-md lg:text-[14px] font-semibold text-gray-700">
              #{genre}
            </span>
            <span className="flex items-center w-[fit-content] overflow-auto justify-start rounded-full px-1 md:px-3 py-1 text-[10px] md:text-md lg:text-[14px] text-gray-700">
              Publication: {publicationYear}
            </span>
          </div>
          <span className="text-[12px] md:text-md mt-2">ISBN: {isbn}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
