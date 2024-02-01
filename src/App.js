import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import FantasyBook from "../src/components/data/fantasy.json";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        {/* <div>
          <h5>Single book test</h5>
          <SingleBook libro={FantasyBook[0]} />
        </div> */}
        <div className="container">
          <h5>Fantasy Books</h5>
          {/* Monta BookList e passa l'array di libri come prop */}
          <BookList books={FantasyBook} />
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
