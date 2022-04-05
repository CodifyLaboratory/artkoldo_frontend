import React from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <div className="nav-links" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <SearchBar />

          <Link to="/Basket">
            <div className="shop-cart"></div>
          </Link>

          <div className="lastitem">
            <ul>
              <li>
                <Link to="/Contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
