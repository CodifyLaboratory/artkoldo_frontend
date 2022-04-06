import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import "./style.css";

function PageWrapper({ children }) {
  return (
    <div className="page-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageWrapper;
