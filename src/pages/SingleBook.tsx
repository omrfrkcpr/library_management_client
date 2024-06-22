/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { extractBookId } from "../helpers/functions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const SingleBook = () => {
  const { pathname } = useLocation();
  const [singleBook, setSingleBook] = useState<Book | null>(null);
  const [singleLoading, setSingleLoading] = useState<boolean>(false);

  const searchId = extractBookId(pathname);

  useEffect(() => {
    const getSingleBookData = async () => {
      if (searchId) {
        setSingleLoading(true);
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER_HOST}:${
              import.meta.env.VITE_SERVER_PORT
            }/books/${searchId}`
          );
          setSingleBook(response.data.book);
          setSingleLoading(false);
        } catch (error: any) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
          });
        }
      }
    };
    getSingleBookData();
  }, [searchId]);

  return (
    <div>
      <Navbar />
      {singleLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>{singleBook?.title}</h1>
          <p>{singleBook?.author}</p>
          <p>{singleBook?.description}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBook;
