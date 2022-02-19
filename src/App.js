import "./App.css";
import StyleOptions from "./components/FilterMenu/StyleOptions";
import Navbar from './components/NavbBar/NavBar';
import ProductContainer from "./containers/ProductContainer/ProductContiner";
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
        
         <ProductContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
