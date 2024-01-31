import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import RomanceBook from "../src/components/data/romance.json";

function App() {
  // Seleziona un libro specifico dall'array
  const libroDaVisualizzare = RomanceBook[0]; // Puoi cambiare l'indice per visualizzare un libro diverso

  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <div>
          <h5>Single book test</h5>
          <SingleBook libro={libroDaVisualizzare} />
        </div>
        <div className="container">
          <h5>Romance Books</h5>
          {/* Monta BookList e passa l'array di libri come prop */}
          <BookList books={RomanceBook} />
        </div>
        <div className="container">
          <div className="row">
            <h5>Scifi Books</h5>
            <AllTheBooks />
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
