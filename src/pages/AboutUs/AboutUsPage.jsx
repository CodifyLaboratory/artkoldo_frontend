import React, { useEffect, useState } from "react";
import logo from "../../images/product-logo.jpeg";
import { API_URL } from "../../API/api";
import "./AboutUsPage.css";
import axios from "axios";

export default function AboutUsPage() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/about_us/`)
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
          <a href="/">Главная /</a>
        </span>
        <span>О нас / ...</span>
      </div>
      <hr />
      <div className="about-us-Block">
        <span>О нас</span>
        <hr />
        <div className="short-info">
          <div className="short-info-text">
            <div className="short-info-title">
              <span> Краткая информация о платформе</span>
            </div>
            <div className="short-info-description">
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="short-info-logo"></div>
        </div>

        <div className="founders-block">
          <span>Основатели</span>
          <hr className="pol" />
          <div className="founders">
            {data?.founder?.map((founder) => (
              <div className="founder1" key={founder?.id}>
                <div className="founder-img">
                  <img src={founder?.photo} alt={logo} />
                </div>
                <div className="founder-text">
                  <p>{founder?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
