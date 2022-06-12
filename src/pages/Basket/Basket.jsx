import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContext,
  RemoveCartContext,
  AddCartContext,
} from "../../components/Context/Context.js";
import Logo from "../../images/product-logo.png";
import RemoveItemIcon from "../../images/icons/removeItem-icon.svg";
import CheckoutIcon from "../../images/icons/checkout-icon.svg";
import ReturnIcon from "../../images/icons/return-arrow-icon.svg";
import {
  BasketModalOne,
  BasketModalTwo,
  BasketModalThree,
} from "../../components/ModalComponent/BasketModal";
import axios from "axios";
import { API_URL } from "../../API/api";
import "./Basket.css";

export default function Basket() {
  const { valueCart } = useContext(MainContext);
  const [cartItems, setCartItems] = valueCart;
  const removeItem = useContext(RemoveCartContext);
  const addItem = useContext(AddCartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const navigate = useNavigate();

  const payload = {
    total_price: cartTotal,
    order_products: orderProducts,
  };

  const submitOrder = async () => {
    const finalPayload = Object.assign(formData, payload);
    setLoading(true);
    setIsFailed(false);
    try {
      await axios
        .post(`${API_URL}/api/orders/create/`, finalPayload)
        .then(function (response) {
          if (response.status === 201 && response.data.id) {
            setOrderId(response.data.id);
            setCartItems([]);
          }
        });
    } catch (error) {
      setIsFailed(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function handleOrderClose() {
    setIsModalThreeOpen(false);
    navigate("/");
  }

  useEffect(() => {
    if (formData !== undefined) {
      submitOrder();
      setIsModalTwoOpen(false);
      setIsModalThreeOpen(true);
    }
  }, [formData]);

  useEffect(() => {
    if (isModalOneOpen === true) {
      setOrderProducts(
        cartItems?.map((item) => {
          return {
            product_category: item?.category,
            product_id: item?.id,
            quantity: item?.qty,
            price: item?.price,
          };
        })
      );
    }
  }, [isModalOneOpen]);

  function handleSecondModal() {
    setIsModalOneOpen(false);
    setIsModalTwoOpen(true);
  }

  const total = () => {
    setCartTotal(
      cartItems.reduce(function (acc, item) {
        return item.discount_price
          ? acc + item.qty * item.discount_price
          : acc + item.qty * item.price;
      }, 0)
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    total();
  }, [cartItems]);

  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Корзина / ...</span>
      </div>
      <hr className="baskethr" />
      {cartItems?.length === 0 ? (
        <div className="basket-content">
          <p>Ваша корзина пуста.</p>
          <p>Заполните корзину товарами, чтобы оформить заказ.</p>
          <Link to={"/"}>
            <button className="back-to-main">
              <span>{"Вернуться на главную >>"}</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="basket-content">
          {cartItems?.map((item, index) => (
            <div className="basket-item" key={index}>
              <div className="basket-item-photo">
                <Link to={`/${item.category}s/${item.id}`}>
                  {item?.photo_1 ? (
                    <img src={item?.photo_1} />
                  ) : (
                    <img src={`${Logo}`} />
                  )}
                </Link>
              </div>
              <div className="basket-item-details">
                <p className="basket-item-title">{item?.title}</p>
                {item?.category === "painting" && (
                  <div className="basket-item-features">
                    <p className="basket-item-feature">Тип: Картина</p>
                    <p className="basket-item-feature">
                      Ширина: {item?.width}&nbsp;см
                    </p>
                    <p className="basket-item-feature">
                      Высота: {item?.height}&nbsp;см
                    </p>
                  </div>
                )}
                {item?.category === "handicraft" && (
                  <div className="basket-item-features">
                    <p className="basket-item-feature">
                      Тип: Ремесленное изделие
                    </p>
                    <p className="basket-item-feature">{item?.type?.title}</p>
                  </div>
                )}
                {item?.category === "ceramic" && (
                  <div className="basket-item-features">
                    <p className="basket-item-feature">Тип: Керамика</p>
                    <p className="basket-item-feature">{item?.type?.title}</p>
                  </div>
                )}
                <div className="basket-item-quantity">
                  <div className="basket-item-delete-icon">
                    <img src={RemoveItemIcon} alt={"удалить"} />
                    <button
                      onClick={() =>
                        setCartItems(
                          cartItems.filter((product) => product !== item)
                        )
                      }
                    >
                      Удалить
                    </button>
                  </div>
                  <div className="basket-item-counter-box">
                    <button onClick={() => removeItem(item)}>-</button>
                    <div className="basket-item-counter">{item?.qty}</div>
                    <button onClick={() => addItem(item)}>+</button>
                  </div>
                  {item?.discount_price ? (
                    <div className="basket-item-discount-price">
                      {item?.discount_price}
                      <span>&nbsp;c.</span>
                    </div>
                  ) : (
                    <div className="basket-item-price">
                      {item?.price}
                      <span>&nbsp;c.</span>
                    </div>
                  )}
                </div>
                <div className="basket-item-checkout">
                  <img src={CheckoutIcon} alt={"оформить заказ"} />
                  <button onClick={() => setIsModalOneOpen(true)}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="basket-total-count-container">
            <div className="basket-total-count-box">
              <hr />
              <div className="basket-total-count">
                <p>Итого</p>
                <p>{cartTotal}&nbsp;с</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="basket-bottom-return-box">
            <div className="basket-bottom-return">
              <img src={ReturnIcon} alt="назад" />
              <button onClick={() => navigate(-1)}>Вернуться к покупкам</button>
            </div>
          </div>
          <div className="basket-bottom-checkout-container">
            <button
              className="basket-bottom-checkout-button"
              onClick={() => setIsModalOneOpen(true)}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      )}
      {isModalOneOpen && (
        <BasketModalOne
          setIsOpen={setIsModalOneOpen}
          onClick={handleSecondModal}
        />
      )}
      {isModalTwoOpen && (
        <BasketModalTwo
          setIsOpen={setIsModalTwoOpen}
          setFormdata={setFormData}
          setIsModalThreeOpen={setIsModalThreeOpen}
        />
      )}
      {isModalThreeOpen && (
        <BasketModalThree
          setIsOpen={setIsModalThreeOpen}
          onClick={handleOrderClose}
          orderId={orderId}
          loading={loading}
          isFailed={isFailed}
        />
      )}
    </div>
  );
}
