import "./App.css";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import StyleOptions from "./components/FilterMenu/StyleOptions";
import ItemCards from "./containers/Products/ItemCards";
import Navbar from './components/NavbBar/NavBar';


function App() {
  return (
    <div className="App">
     <Navbar />
      <FilterMenu />
      <ItemCards/>
    </div>
  );
}

export default App;
