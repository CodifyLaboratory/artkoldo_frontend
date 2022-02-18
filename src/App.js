import "./App.css";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import StyleOptions from "./components/FilterMenu/StyleOptions";
import Navbar from "./components/NavbBar/NavBar";
import ItemCards from "./containers/Products/ItemCards";

function App() {
  return (
    <div className="App">
      <FilterMenu />
      <ItemCards />
    </div>
  );
}

export default App;
