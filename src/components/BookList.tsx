/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BookCard from "./BookCard";

const BookList: React.FC<BookListProps> = ({ books }) => {
  console.log(books);
  return (
    <div className="flex flex-wrap p-8 mx-auto gap-10 justify-center">
      {books &&
        books.map((book: Book) => {
          return <BookCard key={book?.id} book={book} />;
        })}
    </div>
  );
};

export default BookList;
