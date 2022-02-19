import React from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
// import SearchBar from '../SearchBar/SearchBar';

export default function Navbar() {
  return (
    <header className="Header">
      <nav className="NavbarItems">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Col sm={2} className="nav-links" key={index}>
                {/* <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link> */}
              </Col>
            );
          })}
        </ul>
      </nav>
      <div className="logo">
        <input className="searchbar" type="text" placeholder="Поиск" />
        <div className="vector"></div>
        <div className="search_icon"></div>
        <div className="shop_cart"></div>
        {/* <ul>
          <li>
            <a className="lastitem" href="#">
              Контакты
            </a>
          </li>
        </ul> */}
      </div>
    </header>
  );
}
