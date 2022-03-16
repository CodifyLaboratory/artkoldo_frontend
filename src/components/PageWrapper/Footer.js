import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {CategoryItems} from './FooterItems'
import {AboutCompanyItems} from './FooterItems'
import {RuleItems} from './FooterItems'
import SearchBar from '../../components/SearchBar/SearchBar'

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
      <div className="logo">
      
      </div>
      <div className="categories">
        <span>Категории</span>
        <ul className="footer-menu">
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
        <span> О компании</span>
        <ul className="footer-menu">
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
        <span>Правила</span>
        <ul className="footer-menu">
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
            <SearchBar/>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
