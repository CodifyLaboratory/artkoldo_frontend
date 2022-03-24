import React from "react";
import PageWrapper from "../../components/PageWrapper";
import "./PaintingItem.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../API/api";
// import Basket from "../Basket/Basket";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCards from "../../components/Products/ItemCards";

import { useParams } from "react-router-dom";
export default function PaintingItem() {
  const [product, setProduct] = useState();
  const [recommended, setRecommended] = useState();
  const [cartItems, setCartItems] = useState([]);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

  console.log("product", product);
  console.log("recommended", recommended);
  //  const [ products ]= useState([
  //     {
  //       product: {id: 0, name: 'name 1', price: 100},
  //       count: 1,
  //     },
  //     {
  //       product: {id: 1, name: 'name 2', price: 200},
  //       count: 2,
  //     },
  //  ])
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
  };
  //  const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // }

  if (!product || !recommended) return <div className="Loading">Loading</div>;
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
                  alt={product.name}
                ></img>
              </div>
              <div className="four_photos">
                <img
                  className="img_box"
                  src={product.photo_2}
                  alt={product.name}
                ></img>
                <img
                  className="img_box"
                  src={product.photo_3}
                  alt={product.name}
                ></img>
                <img
                  className="img_box"
                  src={product.photo_4}
                  alt={product.name}
                ></img>
                <img
                  className="img_box"
                  src={product.photo_5}
                  alt={product.name}
                ></img>
              </div>
              <div>
                <h1 className="description_headings">О картине/Об изделии</h1>
                <hr className="dividing_line"></hr>
                <h2 className="small_heading">Общие</h2>
                <span className="description">Город: {product.location}</span>
                <span className="description">Страна: </span>
                <hr className="dividing_line"></hr>
                <h2 className="small_heading">Характеристики</h2>
                <span className="description">Тема: </span>
                <span className="description">Материал: </span>
                <span className="description">Стиль: </span>
                <span className="description">Техника :</span>
                <span className="description">Широта: , Высота: </span>
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
                <p>Тип : </p>
                <p>Ширина: Высота:</p>
                <p>Автор: </p>
                <p>Местоположение:</p>
              </div>
              <div className="dividing_line_2"></div>
              <p className="number_of_price">{product.price} c</p>
              <div className="link_btn">
                <Link
                  to={"/basket"}
                  button
                  className="add_btn"
                  onClick={() => onAdd(product)}
                >
                  Добавить в корзину
                </Link>
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
}
