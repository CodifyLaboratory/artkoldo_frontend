import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CategoryItems } from "./FooterItems";
import { AboutCompanyItems } from "./FooterItems";
import { RuleItems } from "./FooterItems";
import SearchBar from "../../components/SearchBar/SearchBar";

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
        <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>
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
        <div className="social">
          <SearchBar />
          <p className="pt-4">Мы в соц.сетях</p>
          <div className="social-icons d-flex pt-4">
            <a href="URL">
              {" "}
              <div className="social-tw"></div>
            </a>
            <a href="URL">
              {" "}
              <div className="social-fb"></div>
            </a>
          </div>

          <p className="pt-4"> Бишкек, Кыргызстан</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
