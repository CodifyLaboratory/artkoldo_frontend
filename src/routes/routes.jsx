import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "../App";
import PaintingsPage from "../pages/PaintingsPage/PaintingsPage";
import PaintingsContainer from "../pages/PaintingsPage/PaintingsPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/paintings" element={<PaintingsPage />} />
      <Route path="/paintings/:id" element={<ProductPage />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}
