import React, { useState, useEffect } from "react";
import Footer from "../../components/PageWrapper/Footer";
import Navbar from "../../components/PageWrapper/NavBar";
import PlayBtn from "../../images/play-btn.png";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./MainPage.css";
import { Link } from "react-router-dom";
import SliderComponent from "./SliderComponent";
import Modal from "./Modal";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main-page-container">
      <Navbar />
      <div className="sell-now-container">
        <button className="sell-now-btn" onClick={() => setIsOpen(true)}>
          <span>Продай уже сейчас</span>
        </button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div className="category-btns-container">
        <Link to="/paintings" style={{ textDecoration: "none" }}>
          <div className="paintings-btn">
            <span className="category-btn-title">Живопись</span>
          </div>
        </Link>
        <Link to="/handicrafts" style={{ textDecoration: "none" }}>
          <div className="handicrafts-btn">
            <span className="category-btn-title">Ремесленные изделия</span>
          </div>
        </Link>
        <Link to="/ceramics" style={{ textDecoration: "none" }}>
          <div className="ceramics-btn">
            <span className="category-btn-title">Керамика</span>
          </div>
        </Link>
      </div>
      <p className="slider-title">Последние</p>
      <div className="slider-container-box">
        <div className="slider-container">
          <SliderComponent />
        </div>
      </div>
      <p className="slider-title">Рекомендуемое</p>
      <div className="slider-container-box">
        <div className="slider-container">
          <SliderComponent />
        </div>
      </div>
      <p className="slider-title">Скидка</p>
      <div className="slider-container-box slider-third">
        <div className="slider-container ">
          <SliderComponent />
        </div>
      </div>
      <div className="about-container">
        <div className="about-box">
          <div className="about-left">
            <p className="about-title">Artkoldo</p>
            <div className="about-text">
              Проект нацеленный на популяризацию кыргызского искусства
              посредством создания единой платформы для размещения ремесленных
              изделий и картин на онлайн площадке, что поможет мастерам и
              художникам продавать свои работы внутри и за пределы страны.
            </div>
            <Link to="/about" className="about-btn">
              Подробнее...
            </Link>
          </div>
          <div className="about-right">
            <img src={PlayBtn} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
