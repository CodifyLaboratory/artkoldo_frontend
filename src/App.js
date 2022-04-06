import "./App.css";
import { CartProvider } from "../src/components/Context/Context.js";
import Routing from "./routes/routes";
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <CartProvider>
      <PageWrapper>
        <Routing />
      </PageWrapper>
    </CartProvider>
  );
}

export default App;
