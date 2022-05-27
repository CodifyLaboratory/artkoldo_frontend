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
      <hr className="ruleshr"/>
      <div className="rule">
        <div className="RulesBlock">
          <span>Положения и условия</span>
          <hr className="ruleshr2" />
          <br />
          <p>{data?.conditions}</p>
          <br />
        </div>
        <div className="RulesBlock pt-1">
          <hr className="ruleshr3"/>
          <span>Политика конфиденциальности</span>
          <hr className="ruleshr4"/>
          <br />
          <p>{data?.privacy}</p>
          <br />
        </div>
        <div className="RulesBlock pt-1 pb-5">
          <hr className="ruleshr3" />
          <span>Политика авторского права</span>
          <hr className="ruleshr4" />
          <br />
          <p>{data?.copyright}</p>
          <br />
        </div>
      </div>
    </div>
  );
}
