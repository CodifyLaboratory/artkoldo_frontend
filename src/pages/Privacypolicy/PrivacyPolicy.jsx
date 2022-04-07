import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";
import { API_URL } from "../../API/api";
import axios from "axios";

export default function PrivacePolicy() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/terms/`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="rules-page page-content">
      <div className="breadcrumbs">
        <span>
          <a href="/">Главная/</a>
        </span>
        <span>Правила и условия / ...</span>
      </div>
      <hr />
      <div className="rule">
        <div className="RulesBlock">
          <span>Положения и условия</span>
          <hr className="ruleshr" />
          <br />
          <p>{data?.conditions}</p>
          <br />
        </div>
        <div className="RulesBlock pt-1">
          <hr />
          <span>Политика конфиденциальности</span>
          <hr />
          <br />
          <p>{data?.privacy}</p>
          <br />
        </div>
        <div className="RulesBlock pt-1 pb-5">
          <hr />
          <span>Политика авторского права</span>
          <hr />
          <br />
          <p>{data?.copyright}</p>
          <br />
        </div>
      </div>
    </div>
  );
}
