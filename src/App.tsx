import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navbar from "./components/Navbar";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <div className="relative">
        <BookForm />
        <Navbar />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
