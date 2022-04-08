import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ItemCards from "../../components/Products/ItemCards";
import { AddCartContext } from "../../components/Context/Context.js";
import SpinComponent from "../../components/Spinner/Spin";
import Logo from "../../images/product-logo.jpeg";
import "./HandicraftItem.css";

export default function HandicraftItem() {
  const [product, setProduct] = useState();
  const [recommended, setRecommended] = useState();
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const addCartItems = useContext(AddCartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  function changePhoto2() {
    var img = document.getElementById("mainPhoto");
    img.setAttribute("src", product?.photo_1 ? product?.photo_1 : `${Logo}`);
  }

  function changePhoto3() {
    var img = document.getElementById("mainPhoto");
    img.setAttribute("src", product?.photo_2 ? product?.photo_2 : `${Logo}`);
  }

  function changePhoto4() {
    var img = document.getElementById("mainPhoto");
    img.setAttribute("src", product?.photo_3 ? product?.photo_3 : `${Logo}`);
  }

  function changePhoto5() {
    var img = document.getElementById("mainPhoto");
    img.setAttribute("src", product?.photo_4 ? product?.photo_4 : `${Logo}`);
  }

  const getProductData = async () => {
    setLoading(true);
    try {
      const item = await axios.get(`${API_URL}/api/handicrafts/${id}/`);
      setProduct(item.data);
      const items = await axios.get(
        `${API_URL}/api/handicraft_recommendations/${item.data.id}/`
      );
      setRecommended(items.data);
      return;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (isChanged === true) {
      getProductData();
    }
    setIsChanged(false);
  }, [isChanged]);

  const handleClick = (e, product) => {
    e.preventDefault();
    console.log("initialProduct", product);
    addCartItems(product);
    navigate("/basket");
  };

  if (!product || !recommended) return <SpinComponent />;
  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
          <a href="/handicrafts">Ремесленные изделия/</a>
        </span>
        <span>...</span>
      </div>
      <hr />
      <div className="page-content">
        <div className="product-content">
          <div className="left-side">
            <div className="product-img">
              <img
                src={product?.photo_1 ? product?.photo_1 : `${Logo}`}
                alt={product?.title}
                id="mainPhoto"
              ></img>
            </div>
            <div className="four_photos">
              <div className="img_box" onClick={changePhoto2}>
                <img
                  src={product?.photo_1 ? product?.photo_1 : `${Logo}`}
                  alt={product?.title}
                />
              </div>
              <div className="img_box" onClick={changePhoto3}>
                <img
                  src={product?.photo_2 ? product?.photo_2 : `${Logo}`}
                  alt={product?.title}
                />
              </div>
              <div className="img_box" onClick={changePhoto4}>
                <img
                  src={product?.photo_3 ? product?.photo_3 : `${Logo}`}
                  alt={product?.title}
                />
              </div>
              <div className="img_box" onClick={changePhoto5}>
                <img
                  src={product?.photo_4 ? product?.photo_4 : `${Logo}`}
                  alt={Logo}
                />
              </div>
            </div>
            <div>
              <h1 className="description_headings">Об изделии</h1>
              <p className="product-description">{product?.description}</p>
              <hr className="dividing_line"></hr>
              <h2 className="small_heading">Характеристики</h2>
              <span className="description">Тип: {product?.type?.title}</span>
              <span className="description">
                Материал: {product?.material?.title}
              </span>
              <span className="description">
                Техника: {product?.technique?.title}
              </span>
              <hr className="dividing_line"></hr>
              <h2 className="small_heading">Оплата</h2>
              <span className="description">
                Оплата и доставка производится..........{" "}
              </span>
              <hr className="dividing_line"></hr>
            </div>
          </div>
          <div class="right_side">
            <div class="right_description_headings">{product?.title}</div>
            <div className="description">
              <p>Ремесленное изделие</p>
              <p>
                Ширина: {product?.width} см, Высота: {product?.height} см
              </p>
              <p>Автор: {product?.author?.name}</p>
              <p>Местоположение: {product?.author?.region?.title}</p>
            </div>
            <div className="dividing_line_2"></div>
            <p className="number_of_price">{product?.price} c</p>
            <div className="link_btn">
              <button
                className="add_btn"
                onClick={(e) => handleClick(e, product)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="bottom_heading">Рекомендуем также:</h1>
        </div>
        <ItemCards
          products={
            recommended.length <= 6 ? recommended : recommended.splice(0, 6)
          }
          category="handicrafts"
          onClick={() => setIsChanged(true)}
        />
      </div>
    </div>
  );
}
