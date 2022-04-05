import React, { useState, useEffect } from "react";
import Footer from "../../components/PageWrapper/Footer";
import Navbar from "../../components/PageWrapper/NavBar";
import PlayBtn from "../../images/play-btn.png";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./MainPage.css";
import { Link } from "react-router-dom";
import ProductSlider from "../../components/SliderComponent/ProductSlider";
import Modal from "../../components/ModalComponent/Modal";
import AuthorSlider from "../../components/SliderComponent/AuthorSlider";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [discounted, setDiscounted] = useState({});
  const [recommended, setRecommended] = useState({});
  const [recent, setRecent] = useState({});
  const [filter, setFilter] = useState("");
  const [authors, setAuthors] = useState([]);
  const [sellInfo, setSellInfo] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/discount_products/`)
      .then((response) => {
        setDiscounted(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/api/recommended_products/`)
      .then((response) => {
        setRecommended(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/api/last_created_products/`)
      .then((response) => {
        setRecent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/api/authors/`)
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/api/info/sell_info/`)
      .then((response) => {
        setSellInfo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-page-box">
      <Navbar />
      <div className="main-page-container">
        <div className="sell-now-container">
          <div className="main-page-title">
            Лучший сайт для продажи картин, ремесленных изделий и керамики
          </div>
          <div className="sell-now-box">
            <button className="sell-now-btn" onClick={() => setIsOpen(true)}>
              <span>Продай уже сейчас</span>
            </button>
          </div>
        </div>
        <p className="slider-title">Последние</p>
        <div className="category-btns-container">
          <div className="category-btns-box">
            <div className="all-btn filter-btn">
              <button onClick={() => setFilter("all")}>
                <span className="category-btn-title">Все</span>
              </button>
            </div>
            <div className="paintings-btn filter-btn">
              <button onClick={() => setFilter("painting")}>
                <span className="category-btn-title">Живопись</span>
              </button>
            </div>
            <div className="handicrafts-btn filter-btn">
              <button onClick={() => setFilter("handicraft")}>
                <span className="category-btn-title">Ремесленные изделия</span>
              </button>
            </div>
            <div className="ceramics-btn filter-btn">
              <button onClick={() => setFilter("ceramic")}>
                <span className="category-btn-title">Керамика</span>
              </button>
            </div>
          </div>
        </div>
        <div className="slider-container-box">
          <div className="slider-container">
            <ProductSlider products={recent} filter={filter} />
          </div>
        </div>
        <p className="slider-title">Рекомендуемое</p>
        <div className="slider-container-box">
          <div className="slider-container">
            <ProductSlider products={recommended} filter="" />
          </div>
        </div>
        <p className="slider-title">Скидка</p>
        <div className="slider-container-box slider-third">
          <div className="slider-container ">
            <ProductSlider products={discounted} filter="" />
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
        <div className="author-slider-container-box">
          <div className="author-slider-container">
            <AuthorSlider slides={authors} />
          </div>
        </div>
      </div>
      <Footer />
      {isOpen && <Modal setIsOpen={setIsOpen} data={sellInfo} />}
    </div>
  );
}
