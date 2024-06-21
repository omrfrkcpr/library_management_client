/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BookCard from "./BookCard";

type BookListProps = {
  books: Book[];
  handleDelete: (id: string) => void;
  handleEdit: (book: Book) => void;
};

const BookList: React.FC<BookListProps> = ({
  books,
  handleDelete,
  handleEdit,
}) => {
  console.log(books);
  return (
    <div className="flex flex-wrap p-8 mx-auto gap-10 justify-center">
      {books &&
        books.map((book: Book) => {
          return (
            <BookCard
              key={book?.id}
              book={book}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
    </div>
  );
};

export default BookList;
