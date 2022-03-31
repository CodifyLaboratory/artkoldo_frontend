import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CategoryItems } from "./FooterItems";
import { AboutCompanyItems } from "./FooterItems";
import { RuleItems } from "./FooterItems";
import SearchBar from "../../components/SearchBar/SearchBar";
import logo from "../../images/logo.png";
import twIcon from "../../images/twIcon.png";
import fbIcon from "../../images/fbIcon.png";

function Footer() {
  return (
    <footer className="footer">
      {/* <Footer.Wrapper>
       <Footer.Column>
          <Footer.Title>Категории</Footer.Title>
              <Footer.Link href="#">Живопись</Footer.Link>
              <Footer.Link href="#">Ремесленные изделия</Footer.Link>
               <Footer.Link href="#">Керамика</Footer.Link>
       </Footer.Column>

      </Footer.Wrapper> */}

      <div className="footer-container">
        <div className="footer-logo">{/* <img src={logo} alt="logo" /> */}</div>
        <div className="min_menu">
        <div className="categories">
          <ul className="footer-menu">
            <span>Категории</span>
            {CategoryItems.map((item, index) => {
              return (
                <div className="ul-margin" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="about-company">
          <ul className="footer-menu">
            <span> О компании</span>
            {AboutCompanyItems.map((item, index) => {
              return (
                <div className="ul-margin" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="rules">
          <ul className="footer-menu">
            <span>Правила и условия</span>
            {RuleItems.map((item, index) => {
              return (
                <div className="ul-margin" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        </div>
        <div className="social">
          {/* <SearchBar className="search" /> */}
          <p className="pt">Мы в соц.сетях</p>
          <div className="social-icons d-flex pt-4">
          <a href="https://www.instagram.com/">
              {" "}
              <div className="insta-icon"></div>
            </a>
            <a href="https://web.telegram.org/z/">
              {" "}
              <div className="social-tw"></div>
            </a>
            <a href="https://ru-ru.facebook.com/">
              {" "}
              <div className="social-fb"></div>
            </a>
          </div>

          <p className="pt-44"> Кыргызстан, Бишкек</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
