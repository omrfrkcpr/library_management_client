import { Route, Routes, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import SingleBook from "../pages/SingleBook";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import BookForm from "../components/BookForm";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BookForm />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<SingleBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
