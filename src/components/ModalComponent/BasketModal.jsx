import React from "react";
import modalLogo from "../../images/logo_in_modal.svg";
import { Form, Input } from "antd";
import "./BasketModal.css";

export const BasketModalOne = ({ setIsOpen, onClick }) => {
  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        <div className="basket-modal-text">
          Обращаем ваше внимание на то, что владелец сайта не является
          производителем и продавцом товара, способ оплаты и доставки
          обговаривается с оператором.
        </div>
        <div className="basket-modal-button">
          <button onClick={onClick}>Перейти к заказу</button>
        </div>
      </div>
    </>
  );
};

export const BasketModalTwo = ({ setIsOpen, setFormdata, setIsOrderReady }) => {
  const onSubmit = async (values) => {
    const payload = {
      name: values?.username,
      email: values?.email,
      phone: values?.phoneNumber,
      country: values?.country,
      region: values?.region,
      city: values?.city,
    };
    setFormdata(payload);
  };

  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        <div className="basket-modal-order-info">
          <Form className="basket-modal-order-inputs" onFinish={onSubmit}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "* Введите имя и фамилию получателя",
                },
              ]}
            >
              <Input
                className="order-info-input-lg"
                placeholder="ФИО*"
                onKeyPress={(event) => {
                  if (!/[A-Za-zА-Яа-яЁё\s]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "* Введите номер телефона",
                },
              ]}
            >
              <Input
                className="order-info-input-lg"
                placeholder="Номер телефона"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "* Введите адрес электронной почты",
                },
              ]}
            >
              <input className="order-info-input-lg" placeholder="Эл.почта" />
            </Form.Item>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: "* Введите название страны получателя",
                },
              ]}
            >
              <Input className="order-info-input-lg" placeholder="Страна" />
            </Form.Item>
            <div className="order-info-sm-box">
              <Form.Item
                name="region"
                rules={[
                  {
                    required: true,
                    message: "* Введите номер телефона",
                  },
                ]}
              >
                <Input className="order-info-input-sm" placeholder="Область" />
              </Form.Item>
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "* Введите номер телефона",
                  },
                ]}
              >
                <Input
                  className="order-info-input-sm"
                  placeholder="Город/Населенный пункт"
                />
              </Form.Item>
            </div>
            <div className="basket-checkout-btn">
              <Form.Item>
                <button type="submit" onClick={setIsOrderReady}>
                  Оформить заказ
                </button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export const BasketModalThree = ({ setIsOpen, onClick, orderId }) => {
  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        <div className="basket-order-submit-text">
          <p>Спасибо!</p>
          <p>
            Ваш заказ успешно оформлен и принят в обработку. Номер вашего заказа{" "}
            {orderId}. Наш менеджер свяжется с вами в ближайшее время, чтобы
            уточнить детали заказа и оформить удобный вам способ оплаты и
            доставки.
          </p>
        </div>
        <div className="basket-order-submit-button">
          <button onClick={onClick}>{"Вернуться на главную >>"}</button>
        </div>
      </div>
    </>
  );
};
