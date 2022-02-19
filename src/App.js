import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavbBar/NavBar";
import ProductContainer from "./containers/ProductContainer/ProductContainer";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

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
