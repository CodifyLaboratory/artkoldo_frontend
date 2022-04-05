import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Basket from "../pages/Basket/Basket";
import CeramicItem from "../pages/CeramicsPage/CeramicItem";
import CeramicsPage from "../pages/CeramicsPage/CeramicsPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import HandicraftItem from "../pages/HandicraftsPage/HandicraftItem";
import HandicraftsPage from "../pages/HandicraftsPage/HandicraftsPage";
import MainPage from "../pages/MainPage/MainPage";
import PaintingItem from "../pages/PaintingsPage/PaintingItem";
import PaintingsPage from "../pages/PaintingsPage/PaintingsPage";
import PrivacyPolicy from '../pages/Privacypolicy/PrivacyPolicy';
import ForPartners from '../pages/ForPartners/ForPartners';
import DeliveryAndPayment from '../pages/DeliveryAndPayment/DeliveryAndPayment';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/paintings" element={<PaintingsPage />} />
      <Route path="/paintings/:id" element={<PaintingItem />} />
      <Route path="/handicrafts" element={<HandicraftsPage />} />
      <Route path="/handicrafts/:id" element={<HandicraftItem />} />
      <Route path="/ceramics" element={<CeramicsPage />} />
      <Route path="/ceramics/:id" element={<CeramicItem />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/Contacts" element={<ContactsPage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/ForPartners" element={<ForPartners />} />
      <Route path="/DeliveryAndPayment" element={<DeliveryAndPayment />} />
      
      <Route path="/basket" element={<Basket />} />

      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}
