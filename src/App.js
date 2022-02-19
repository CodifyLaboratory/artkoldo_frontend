import "./App.css";
import StyleOptions from "./components/FilterMenu/StyleOptions";
import Navbar from "./NavbBar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterMenu />
    </div>
  );
}

export default App;
