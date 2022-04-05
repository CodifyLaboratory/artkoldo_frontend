import PageWrapper from "../../components/PageWrapper/index";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import './DeliveryAndPayment.css'

export default function DeliveryAndPayment() {

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/payment_delivery/`)
      .then((response) => {
        setData(response.data[0]);
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
          <span>Опалата и доставка / ...</span>
        </div>
        <hr />
        <div className="payments">
          <span>Опалата</span>
        </div>
        <hr />
      <div className="payments-text"><p>{data?.payment}</p></div>
      <hr />
        <div className="payments">
          <span>Доставка</span>
        </div>
        <hr />
        <div className="delivery-text"><p>{data?.delivery}</p></div>
        
      </PageWrapper>
    </div>
  );
}
