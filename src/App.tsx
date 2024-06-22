import { BookProvider } from "./context/BookContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Router>
      <BookProvider>
        <AppRouter />
      </BookProvider>
    </Router>
  );
}

export default App;
