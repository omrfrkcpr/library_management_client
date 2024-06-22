/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { extractBookId } from "../helpers/functions";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import SingleBookCard from "../components/SingleBookCard";
import BookForm from "../components/BookForm";
import { BookContext } from "../context/BookContext";

const SingleBook = () => {
  const { pathname } = useLocation();
  const { books } = useContext(BookContext) as BookContextType;
  const [singleBook, setSingleBook] = useState<Book | undefined>(undefined);
  const [singleLoading, setSingleLoading] = useState<boolean>(false);
  const searchId = extractBookId(pathname);
  const navigate = useNavigate();

  const isMatched = books.some((item: Book) => +item?.id == searchId);

  useEffect(() => {
    const getSingleBookData = async () => {
      if (searchId && isMatched) {
        setSingleLoading(true);
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_HOST}:${
              import.meta.env.VITE_SERVER_PORT
            }/books/${searchId}`
          );
          setSingleBook(response.data.book);
        } catch (error: any) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
          });
        } finally {
          setSingleLoading(false);
        }
      }
    };
    getSingleBookData();
  }, [searchId, isMatched]);

  useEffect(() => {
    if (!isMatched) {
      navigate("/");
    }
  }, [singleBook, isMatched, navigate]);

  return (
    <>
      <Navbar />
      <BookForm />
      {singleLoading ? <Loading /> : <SingleBookCard book={singleBook} />}
    </>
  );
};

export default SingleBook;
