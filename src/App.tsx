import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import routes from "./router/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  );
}

export default App;
