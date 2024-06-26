import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SingleBook from "../pages/SingleBook";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:bookId",
    element: <SingleBook />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
