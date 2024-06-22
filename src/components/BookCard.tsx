import React from "react";
import { getTruncateLength, truncateText } from "../helpers/functions";

import noImage from "../assets/no-image.png";
import useWindowSize from "../hooks/useWindowSize";
import BookSettings from "./BookSettings";

const BookCard = ({ book }: { book: Book }) => {
  const { width } = useWindowSize();
  const [truncateLength, setTruncateLength] = React.useState<number>(25);

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
    detailUrl,
  } = book;

  return (
    <div className="flex w-[360px] md:w-[380px] lg:w-[600px] h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden shadow-lg relative rounded-xl">
      <img
        className="w-[130px] md:w-[150px] lg:w-[180px] object-fit lg:h-[300px]"
        src={image || noImage}
        alt="Sunset in the mountains"
      />

      <div className="p-3 w-full flex flex-col justify-between relative">
        <div>
          <div className="font-bold text-sm md:text-lg lg:text-xl mb-2 text-center border-b-[1px] border-gray-300">
            {title}
            <span className="flex items-center w-[fit-content] justify-start rounded-full text-[10px] md:text-[14px] font-semibold text-gray-700 mx-auto">
              {author}
            </span>
          </div>
          <p className="text-gray-700 text-[10px] lg:text-[16px] pb-2">
            {truncateText(description, truncateLength)}
            <a
              href={detailUrl}
              target="_blank"
              className="text-blue-400 hover:underline text-[10px] lg:text-sm"
            >
              ...more
            </a>
          </p>
        </div>
        <div className="flex flex-col border-t-[1px] border-gray-300 pt-2 absolute bottom-0 w-[88%] lg:w-[370px] xl:w-[395px] pb-2">
          <div className="flex justify-between">
            <span className="flex items-center w-[fit-content] max-w-[150px] overflow-auto justify-start bg-gray-200 rounded-full px-1 md:px-3 py-1 text-[10px] md:text-md lg:text-[14px] font-semibold text-gray-700">
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
