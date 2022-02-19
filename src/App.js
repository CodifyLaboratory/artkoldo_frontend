import "./App.css";
import CatalogContainer from "./Catalog/CatalogContainer";
import StyleOptions from "./components/FilterMenu/StyleOptions";
import ProductContainer from "./containers/ProductContainer/ProductContiner";
// import Navbar from "./NavbBar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CatalogContainer />
    </div>
  );
}

export default App;
