/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books &&
        books.map((book: Book) => {
          return <div key={book?.id}>{book?.title}</div>;
        })}
    </div>
  );
};

export default BookList;
