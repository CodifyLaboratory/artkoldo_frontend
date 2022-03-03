import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaintingsPage from "./pages/PaintingsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PaintingsPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
