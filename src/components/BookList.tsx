/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookContext";
import Loading from "./Loading";

const BookList = () => {
  const { books, loading } = React.useContext(BookContext) as BookContextType;

  // console.log(books);

  return (
    <div className="flex flex-wrap p-8 mx-auto gap-10 lg:gap-16 justify-start items-center max-w-[2400px]">
      {!loading ? (
        <Loading />
      ) : (
        books.map((book: Book) => {
          return <BookCard key={book?.id} book={book} />;
        })
      )}
    </div>
  );
};

export default BookList;
