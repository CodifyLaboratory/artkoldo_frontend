import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/index";
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
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PageWrapper>
        <div className="breadcrumbs">
          <span>
            <a href="/">Главная/</a>
          </span>
          <span>О нас</span>
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
        </div>

        <div className="founders-block">
          <span>Основатели</span>
          <hr />
          <div className="founders">
            <div className="founder1 d-flex">
              <div className="founder-img">
                <img src={logo} />
              </div>
              <div className="founder-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                omnis neque quasi libero cum doloremque a, culpa similique
                facere odit beatae dolor. Mollitia labore amet, accusamus
                repudiandae quis quidem accusantium.
              </div>
            </div>
            <div className="founder2 d-flex">
              <div className="founder-img">
                <img src={logo} />
              </div>
              <div className="founder-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                omnis neque quasi libero cum doloremque a, culpa similique
                facere odit beatae dolor. Mollitia labore amet, accusamus
                repudiandae quis quidem accusantium.
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
