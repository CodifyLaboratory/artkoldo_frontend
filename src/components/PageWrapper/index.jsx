import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./NavBar";
import "./style.css";

function PageWrapper({ children, setSearchValue }) {
  return (
    <div className="page-container">
      <Navbar setSearchValue={setSearchValue} />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  setSearchValue: PropTypes.func.isRequired,
};

export default PageWrapper;
