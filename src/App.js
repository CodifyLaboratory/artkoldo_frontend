import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaintingsPage from "./pages/PaintingsPage";
// import MainPage from "./pages/MainPage";
import PaintingsContainer from "./pages/PaintingsPage";
// import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
        <PaintingsContainer />
        {/*<PaintingsContainer />*/}
        {/* <ProductPage /> */}
    </div>
  );
}

export default App;
