import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import PaintingsContainer from "./pages/PaintingsContainer";
// import ProductPage from "./pages/ProductPage/ProductPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PaintingsContainer />
        {/* <ProductPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
