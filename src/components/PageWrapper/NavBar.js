import React, { useContext } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import MainLogo from "../../images/icons/artkoldoo-logo.svg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";
import { MainContext } from "../../components/Context/Context.js";

export default function Navbar() {
  const { valueCart } = useContext(MainContext);
  const [cartItems, setCartItems] = valueCart;

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

        <Link to="/">
          <div className="logo">
            <img className="img_logo" src={MainLogo} alt="logo" />
          </div>
        </Link>
        <div className="header-right">
          <SearchBar />

          <Link to="/Basket">
            <div className="shop-cart"></div>
            {cartItems.length > 0 ? (
              <span className="cart-counter">{cartItems.length}</span>
            ) : null}
          </Link>
          <div className="lastitem">
            <ul>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
