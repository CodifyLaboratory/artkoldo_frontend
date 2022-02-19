import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavbBar/NavBar";
import ProductContainer from "./containers/ProductContainer/ProductContiner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ProductContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
