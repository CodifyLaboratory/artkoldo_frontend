import React from "react";
import PageWrapper from "../../components/PageWrapper";
import "./PaintingItem.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../API/api";
import Basket from "../Basket/Basket";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCards from "../../components/Products/ItemCards";

import { useParams } from "react-router-dom";

export default function PaintingItem() {
  const [product, setProduct] = useState();
  const [recommended, setRecommended] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    axios
      .get(`${API_URL}/paintings/${id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/painting_recommendations/${id}/`)
      .then((response) => {
        setRecommended(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setShowBasket(true);
  };

  if (!product || !recommended) return <div className="Loading">Loading</div>;
  if (!showBasket)
    return (
      <div>
        <PageWrapper>
          <div className="breadcrumbs">
            <p>Главная/Живопись/...</p>
          </div>
          <hr />
          <div className="page-content">
            <div className="product-content">
              <div className="left-side">
                <div>
                  <img
                    className="product-img"
                    src={product.photo_1}
                    alt={product.title}
                  ></img>
                </div>
                <div className="four_photos">
                  <img
                    className="img_box"
                    src={product.photo_2}
                    alt={product.title}
                  ></img>
                  <img
                    className="img_box"
                    src={product.photo_3}
                    alt={product.title}
                  ></img>
                  <img
                    className="img_box"
                    src={product.photo_4}
                    alt={product.title}
                  ></img>
                  <img
                    className="img_box"
                    src={product.photo_5}
                    alt={product.title}
                  ></img>
                </div>
                <div>
                  <h1 className="description_headings">О картине</h1>
                  <p className="product-description">{product?.description}</p>
                  <hr className="dividing_line"></hr>
                  <h2 className="small_heading">Характеристики</h2>
                  <span className="description">
                    Тема: {product.subject.title}
                  </span>
                  <span className="description">
                    Материал: {product.material.title}
                  </span>
                  <span className="description">
                    Стиль: {product.style.title}
                  </span>
                  <span className="description">
                    Техника: {product.technique.title}
                  </span>
                  <span className="description">
                    Ширина: {product.width} см, Высота: {product.height} см
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
                <div class="right_description_headings">{product.title}</div>
                <div className="description">
                  <p>Живопись</p>
                  <p>
                    Ширина: {product.width} см, Высота: {product.height} см
                  </p>
                  <p>Автор: {product.author.name}</p>
                  <p>Местоположение: {product.author.region.title}</p>
                </div>
                <div className="dividing_line_2"></div>
                <p className="number_of_price">{product.price} c</p>
                <div className="link_btn">
                  <button className="add_btn" onClick={() => onAdd(product)}>
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
            />
          </div>
        </PageWrapper>
      </div>
    );

  if (showBasket) return <Basket />;
}
