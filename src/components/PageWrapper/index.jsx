import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import "./style.css";

function PageWrapper(props) {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">{props.children}</div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
