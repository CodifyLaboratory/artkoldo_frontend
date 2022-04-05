import "./App.css";
import { CartProvider } from "../src/components/Context/Context.js";
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
