import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navbar from "./components/Navbar";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <BookForm />
      <Navbar />
      <BookList />
    </BookProvider>
  );
}

export default App;
