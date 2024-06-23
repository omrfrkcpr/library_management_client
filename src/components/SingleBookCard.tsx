import { FiExternalLink } from "react-icons/fi";
import BookSettings from "./BookSettings";

const SingleBookCard = ({ book }: { book: Book | undefined }) => {
  return (
    <>
      {book && (
        <div className="relative m-5 w-[95%] max-w-[1200px] shadow-xl h-auto min-h-[fit-content] mx-auto rounded-xl overflow-hidden flex flex-col md:flex-row text-center md:text-left items-center md:items-start gap-2">
          <img
            src={book?.image}
            alt={`${book?.title.split(" ").join("_").toLowerCase()}`}
            className="w-[150px] md:w-[330px] h-full object-contain"
          />
          <div className="p-4 max-w-[850px] flex flex-col items-center md:items-start">
            <div className="flex gap-2 items-center">
              <h2 className="text-2xl font-bold">{book?.title}</h2>
              <a
                href={book?.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="hover:text-gray-400" />
              </a>
            </div>
            <div className="my-4">
              <p className="text-gray-500">
                <span className="font-bold">Author:</span> {book?.author}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">First Publication Year:</span>{" "}
                {book?.publicationYear}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">ISBN:</span> {book?.isbn}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">Genre:</span> {book?.genre}
              </p>
            </div>
            <p className="text-gray-500">{book?.description}</p>
          </div>
          <div className="absolute right-2 top-2 flex gap-2">
            <BookSettings id={book?.id} book={book} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBookCard;
