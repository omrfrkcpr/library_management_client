import React from "react";
import { getTruncateLength, truncateText } from "../helpers/functions";

import noImage from "../assets/no-image.png";
import useWindowSize from "../hooks/useWindowSize";
import BookSettings from "./BookSettings";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }: { book: Book }) => {
  const { width } = useWindowSize();
  const [truncateLength, setTruncateLength] = React.useState<number>(25);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTruncateLength(getTruncateLength(width));
  }, [width]);

  const {
    id,
    title,
    author,
    genre,
    publicationYear,
    description,
    image,
    isbn,
  } = book;

  return (
    <div className="flex w-[360px] md:w-[380px] lg:w-[670px] h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden shadow-lg relative rounded-xl mx-auto">
      <img
        className="w-[130px] md:w-[150px] lg:w-[180px] object-fit lg:h-[300px] cursor-pointer"
        src={image || noImage}
        alt={`${title.split(" ").join("_").toLowerCase()}`}
        onClick={() => navigate(`/book/${id}`)}
      />

      <div className="p-3 w-full flex flex-col justify-between relative">
        <div>
          <div
            onClick={() => navigate(`/book/${id}`)}
            className="font-bold text-sm md:text-lg lg:text-xl mb-2 text-center border-b-[1px] border-gray-300 cursor-pointer"
          >
            {title}
            <span className="flex items-center w-[fit-content] justify-start rounded-full text-[10px] md:text-[14px] font-semibold text-gray-700 mx-auto">
              {author}
            </span>
          </div>
          <p className="text-gray-700 text-[10px] lg:text-[16px] pb-2">
            {truncateText(description, truncateLength)}
            <span
              onClick={() => navigate(`/book/${id}`)}
              className="text-blue-400 hover:underline text-[10px] lg:text-sm cursor-pointer"
            >
              ...more
            </span>
          </p>
        </div>
        <div className="flex flex-col border-t-[1px] border-gray-300 pt-2 absolute bottom-0 w-[88%] lg:w-[465px] pb-2">
          <div className="flex justify-between">
            <span className="flex items-center w-[fit-content] overflow-auto justify-start bg-gray-200 rounded-full px-1 md:px-2 py-1 text-[10px] md:text-md font-semibold text-gray-700">
              #{genre}
            </span>
            <span className="flex items-center w-[fit-content] overflow-auto justify-start rounded-full px-1 md:px-3 py-1 text-[10px] md:text-md lg:text-[14px] text-gray-700 gap-1">
              First Publication:{" "}
              <span className="font-semibold">{publicationYear}</span>
            </span>
          </div>
          <div className="flex justify-between items-center md:px-2">
            <span className="text-[10px] md:text-md lg:text-[14px] mt-2">
              ISBN: {isbn}
            </span>
            <div className="flex items-center mt-1 md:mt-0 justify-center gap-1">
              <BookSettings id={id} book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
