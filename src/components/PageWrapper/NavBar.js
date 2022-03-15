import React from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
// import SearchBar from '../SearchBar/SearchBar';

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <Col sm={2} className="nav-links" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </Col>
              );
            })}
          </ul>
        </div>

        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
        </div>

        <div className="header-right">
          <div className="searchBar">
            <input className="search-bar" type="text" placeholder="Поиск" />
          </div>
          <div className="vector"></div>
          <div className="search-icon"></div>
          <div className="shop-cart"></div>
        </div>
        <div className="lastitem">
          <ul>
            <li>
              <Link to="/Kontakty">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
