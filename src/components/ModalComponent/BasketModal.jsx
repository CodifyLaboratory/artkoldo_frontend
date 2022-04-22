import React from "react";
import modalLogo from "../../images/logo_in_modal.svg";
import { Form, Input } from "antd";
import SpinComponent from "../../components/Spinner/Spin";
import "./BasketModal.css";

export const BasketModalOne = ({ setIsOpen, onClick }) => {
  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal1-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        <div className="basket-modal-text">
          Обращаем ваше внимание на то, что владелец сайта не является
          производителем и продавцом товара, способ оплаты и доставки
          обговаривается с оператором.
        </div>
        <div className="basket-modal-buttons">
          <button className="basket-modal-button" onClick={onClick}>
            Перейти к заказу
          </button>
          <button
            className="basket-cancel-btn"
            onClick={() => setIsOpen(false)}
          >
            Отмена
          </button>
        </div>
      </div>
    </>
  );
};

export const BasketModalTwo = ({
  setIsOpen,
  setFormdata,
  setIsModalThreeOpen,
}) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const payload = {
          name: values?.username,
          email: values?.email,
          phone: values?.phoneNumber,
          country: values?.country,
          region: values?.region,
          city: values?.city,
        };
        setFormdata(payload);
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal2-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        <div className="basket-modal-order-info">
          <Form
            className="basket-modal-order-inputs"
            onFinish={onSubmit}
            form={form}
          >
            <Form.Item
              name="username"
              type="text"
              rules={[
                {
                  required: true,
                  message: "* Введите имя и фамилию получателя",
                },
                {
                  pattern: /[A-Za-zА-Яа-яЁё\s]/,
                  message: "* Данные ФИО введены неправильно",
                },
              ]}
            >
              <Input className="order-info-input-lg" placeholder="ФИО" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "* Введите номер телефона",
                },
                {
                  pattern:
                    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})/,
                  message: "* Номер телефона введен неправильно",
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
                {
                  pattern: /^\S+@\S+\.\S+$/,
                  message: "* Неправильный адрес электронной почты",
                },
              ]}
            >
              <Input
                className="order-info-input-lg"
                placeholder="Эл.почта"
                type="email"
              />
            </Form.Item>
            <Form.Item
              name="country"
              rules={[
                {
                  required: true,
                  message: "* Введите название страны получателя",
                },
                {
                  pattern: /[A-Za-zА-Яа-яЁё\s]/,
                  message: "* Название страны введено неправильно",
                },
              ]}
            >
              <Input
                className="order-info-input-lg"
                placeholder="Страна"
                type="text"
              />
            </Form.Item>
            <div className="order-info-sm-box">
              <Form.Item
                name="region"
                rules={[
                  {
                    required: true,
                    message: "* Введите область",
                  },
                  {
                    pattern: /[A-Za-zА-Яа-яЁё\s]/,
                    message: "* Неправильное название области",
                  },
                ]}
              >
                <Input
                  className="order-info-input-sm"
                  placeholder="Область"
                  type="text"
                />
              </Form.Item>
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "* Введите город/населенный пункт",
                  },
                  {
                    pattern: /[A-Za-zА-Яа-яЁё\s]/,
                    message: "* Неправильное название города/села",
                  },
                ]}
              >
                <Input
                  className="order-info-input-sm"
                  placeholder="Город/Населенный пункт"
                  type="text"
                />
              </Form.Item>
            </div>
            <div className="basket-checkout-btns">
              <Form.Item>
                <button className="basket-checkout-btn" type="submit">
                  Оформить заказ
                </button>
              </Form.Item>
              <button
                className="basket-cancel-btn"
                onClick={() => setIsOpen(false)}
              >
                Отмена
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export const BasketModalThree = ({
  setIsOpen,
  onClick,
  orderId,
  loading,
  isFailed,
}) => {
  return (
    <>
      <div className="basket-dark-bg" onClick={() => setIsOpen(false)} />
      <div className="basket-modal3-box">
        <div className="basket-modal-logo">
          <img src={modalLogo} alt="logo" />
        </div>
        {loading && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <SpinComponent />
          </div>
        )}
        {isFailed ? (
          <div className="basket-order-submit-text">
            <p>Ошибка!</p>
            <p>
              Ваш заказ не был отправлен. Проверьте соединение с интернетом и
              попробуйте снова отправить форму. В случае повторной ошибки,
              просим вас связаться с нашей службой обработки заказов по
              телефонам, указанным в разделе <a href="/contacts">Контакты</a>.
              Благодарим за понимание.
            </p>
          </div>
        ) : (
          <div className="basket-order-submit-text">
            <p>Спасибо!</p>
            <p>
              Ваш заказ успешно оформлен и принят в обработку. Номер вашего
              заказа <span className="orderId">{orderId}</span>. Наш менеджер
              свяжется с вами в ближайшее время, чтобы уточнить детали заказа и
              оформить удобный вам способ оплаты и доставки.
            </p>
          </div>
        )}
        <div className="basket-order-submit-button">
          <button onClick={onClick}>{"Вернуться на главную >>"}</button>
        </div>
      </div>
    </>
  );
};
