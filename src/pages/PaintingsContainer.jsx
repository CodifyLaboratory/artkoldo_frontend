import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper/index";
import ItemCards from "../components/Products/ItemCards";
import { useNavigate } from "react-router";
import PaintingFilters from "../components/FilterMenu/PaintingFilters";
import { API_URL } from "../API/api";
import axios from "axios";
import "./PaintingsContainer.css";

export default function PaintingsContainer(handleCategoryChange) {
  const [paintingFilters, setPaintingFilters] = useState({
    categoryId: 1,
    sections: [],
  });


  // useEffect((el) => {
  //   fetch data on Paintings
  // }, []);

  useEffect(() => {
    axios.get(`${API_URL}/paintings/`);
  }, []);

  return (
    <PageWrapper>
      <div className="page-wrapper">
      <div className="breadcrumbs d-flex justify-content-start">
        <p>Главная/Живопись/...</p>
      </div>
      <hr />
      <div className="sort-items-container d-flex justify-content-between">
        <p>Живопись</p>
        {/* <div className="sort-items-select">
          <select />
        </div> */}
      </div>
      <hr />
      </div>

      <Row className="catalog-container">
        <Col sm={12} md={3} lg={3} className="">
          <PaintingFilters filters setFilters handleCategoryChange />
        </Col>
        <Col sm={12} md={9} lg={9} className="items-container-column">
          <ItemCards products={[]} />
        </Col>
      </Row>
    </PageWrapper>
  );
}
