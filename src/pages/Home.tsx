import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <BookForm />
      <Navbar />
      <BookList />
    </div>
  );
};

export default Home;
