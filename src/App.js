import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PaintingsPage from "./pages/PaintingsPage/PaintingsPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
