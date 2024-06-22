import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import BookForm from "../components/BookForm";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/book/:bookId", element: <SingleBook /> },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BookForm />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
