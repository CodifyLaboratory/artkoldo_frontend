import React, { useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import { useState, useEffect } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ItemCards from "../../components/Products/ItemCards";
import { AddCartContext } from "../../components/Context/context.jsx";
import "./HandicraftItem.css";

export default function HandicraftItem() {
  const [product, setProduct] = useState();
  const [recommended, setRecommended] = useState();
  const addCartItems = useContext(AddCartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/handicrafts/${id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${API_URL}/api/handicraft_recommendations/${id}/`)
      .then((response) => {
        setRecommended(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (e, product) => {
    e.preventDefault();
    console.log("initialProduct", product);
    addCartItems(product);
    navigate("/basket");
  };

  if (!product || !recommended) return <div className="Loading">Loading</div>;
  return (
    <div>
      <PageWrapper>
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
              <div>
                <img
                  className="product-img"
                  src={product?.photo_1}
                  alt={product?.title}
                ></img>
              </div>
              <div className="four_photos">
                <img
                  className="img_box"
                  src={product?.photo_2}
                  alt={product?.title}
                ></img>
                <img
                  className="img_box"
                  src={product?.photo_3}
                  alt={product?.title}
                ></img>
                <img
                  className="img_box"
                  src={product?.photo_4}
                  alt={product?.title}
                ></img>
                <img
                  className="img_box"
                  src={product?.photo_5}
                  alt={product?.title}
                ></img>
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
          />
        </div>
      </PageWrapper>
    </div>
  );
}
