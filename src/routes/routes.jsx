import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import CeramicItem from "../pages/CeramicsPage/CeramicItem";
import CeramicsPage from "../pages/CeramicsPage/CeramicsPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import HandicraftItem from "../pages/HandicraftsPage/HandicraftItem";
import HandicraftsPage from "../pages/HandicraftsPage/HandicraftsPage";
import MainPage from "../pages/MainPage/MainPage";
import PaintingItem from "../pages/PaintingsPage/PaintingItem";
import PaintingsPage from "../pages/PaintingsPage/PaintingsPage";
import RulesPage from "../pages/RulesPage/RulesPage";

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
      <Route path="/Onas" element={<AboutUsPage />} />
      <Route path="/Contacts" element={<ContactsPage />} />
      <Route path="/Rules" element={<RulesPage />} />

      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}
