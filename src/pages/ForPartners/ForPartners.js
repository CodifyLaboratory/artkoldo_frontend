import React, { useEffect, useState } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./ForPartners.css";

export default function ForPartners() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/for_partners/`)
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
        <span>Для партнеров /...</span>
      </div>
      <hr />
      <div className="forpartners">
        <span>Для партнеров</span>
      </div>
      <hr />
      <div className="partners-text">
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
