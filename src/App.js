import "./App.css";
import { CartProvider } from "../src/components/Context/context.jsx";
import Routing from "./routes/routes";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routing />
      </div>
    </CartProvider>
  );
}

export default App;
