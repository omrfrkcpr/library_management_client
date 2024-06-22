import { BookProvider } from "./context/BookContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BookProvider>
      <AppRouter />
    </BookProvider>
  );
}

export default App;
