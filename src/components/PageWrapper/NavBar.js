import React, { useContext, useEffect, useState } from "react";
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
  const [totalQty, setTotalQty] = useState();

  const cartQty = () => {
    setTotalQty(
      cartItems.reduce(function (acc, item) {
        return acc + item.qty;
      }, 0)
    );
  };

  useEffect(() => {
    cartQty();
  }, [cartItems]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <ul className="nav-menu" style={{ paddingLeft: "0" }}>
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
              <span className="cart-counter">{totalQty}</span>
            ) : null}
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
