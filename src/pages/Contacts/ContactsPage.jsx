import "./ContactsPage.css";
import PageWrapper from "../../components/PageWrapper/index";

import React, { useEffect, useState } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";

export default function ContactsPage() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/contacts/`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Контакты</span>
      </div>
      <hr />
      <div className="contacts">
        <span>Контакты</span>
      </div>
      <hr />

      <div className="contacts-page">
        <div className="contacts-num">
          <p>
            Контактные данные: {data?.phone_number_1}, {data?.phone_number_2},{" "}
            {data?.phone_number_3}
          </p>
        </div>
        <div className="contacts-email">
          <p>Email: {data?.email}</p>
        </div>
        <div>
          <p>
            Время работы менеджеров нашего интернет-магазина : с 9.00 до 21.00
            по будням и с 11.00 до 18.00 в <br />
            выходные. Это означает, что в это время наш менеджер будет готов
            ответить по телефону на все <br />
            интересующие Вас вопросы
          </p>
        </div>

        <div className="contacts-social">
          <p>Социальные сети:</p>
        </div>
        <div className="socialicons">
          <div className="instaicon">
            {" "}
            <a href="#"></a>
          </div>
          <div className="socialtw">
            <a href="#"></a>
          </div>
          <div className="socialfb">
            {" "}
            <a href="#"></a>
          </div>
        </div>
        <div className="contacts-address">
          <p>Адрес административного офиса: {data?.address} </p>
        </div>
        <hr className="prevhr" />
        <div className="contatcts-text">
          <p>
            Мы обеспечили возможность доставки картин, керамики, ремсленных
            изеделий, необходимые данные для <br />
            удаленного выбора картин. Доставка в регионы осуществляется самим
            мастером.
          </p>
        </div>
        <hr className="lasthr" />
      </div>
    </div>
  );
}
