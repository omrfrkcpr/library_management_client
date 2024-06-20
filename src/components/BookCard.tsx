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
    <div className="flex w-[340px] lg:w-[500px] h-[180px] lg:h-[300px] rounded overflow-hidden shadow-lg">
      <div>
        <img
          className="w-[200px] lg:w-[330px] h-[100%] object-contain"
          src={image}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="p-3 w-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2 text-center border-b-[1px] border-gray-300">
            {title}
            <span className="flex items-center w-[fit-content] justify-start rounded-full text-[10px] md:text-md font-semibold text-gray-700 mx-auto">
              {author}
            </span>
          </div>
          <p className="text-gray-700 text-base">
            {truncateText(description)}
            <a
              href={detailUrl}
              target="_blank"
              className="text-blue-400 hover:underline text-sm"
            >
              More
            </a>
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] border-gray-300 pt-2">
          <span className="flex items-center w-[fit-content] max-w-[150px] overflow-auto justify-start bg-gray-200 rounded-full px-3 py-1 text-[10px] md:text-md font-semibold text-gray-700">
            #{genre}
          </span>
          <span className="flex items-center w-[fit-content] overflow-auto justify-start rounded-full px-3 py-1 text-[10px] md:text-md font-semibold text-gray-700">
            Publication: {publicationYear}
          </span>
        </div>
        <div>ISBN: {isbn}</div>
      </div>
    </div>
  );
};

export default BookCard;