import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavbBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import PaintingsContainer from "./pages/PaintingsContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PaintingsContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
