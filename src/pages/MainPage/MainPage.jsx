import React, { useState, useEffect } from "react";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./MainPage.css";
import Modal from "../../components/ModalComponent/Modal";
import MainPageContent from "./MainPageContent";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [sellInfo, setSellInfo] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/info/sell_info/`)
      .then((response) => {
        setSellInfo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="main-page-container">
        <MainPageContent setIsOpen={setIsOpen} />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} data={sellInfo} />}
    </>
  );
}
