import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import PaintingFilters from "../components/CatalogFilters/PaintingFilters";
import PageWrapper from "../components/PageWrapper/index";
import ItemCards from "../components/Products/ItemCards";
import { useNavigate } from "react-router";
import { API_URL } from "../API/api";
import axios from "axios";
import "./PaintingsContainer.css";

export default function PaintingsContainer(handleCategoryChange) {
  const [paintings, setPaintings] = useState([]);

  const [styleChecked, setStyleChecked] = useState([]);
  const [techniqueChecked, setTechniqueChecked] = useState([]);
  const [materialChecked, setMaterialChecked] = useState([]);
  const [subjectChecked, setSubjectChecked] = useState([]);
  const [colorChecked, setColorChecked] = useState([]);
  const [regionChecked, setRegionChecked] = useState([]);
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWidth, setMinWidth] = useState("");
  const [maxWidth, setMaxWidth] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // const [priceOrder, setPriceOrder] = useState('')
  // const [dateOrder, setDateOrder] = useState()

  useEffect(() => {
    const params = {
      style: styleChecked.length > 0 ? styleChecked.join(", ") : undefined,
      subject:
        subjectChecked.length > 0 ? subjectChecked.join(", ") : undefined,
      material:
        materialChecked.length > 0 ? materialChecked.join(", ") : undefined,
      technique:
        techniqueChecked.length > 0 ? techniqueChecked.join(", ") : undefined,
      color: colorChecked.length > 0 ? colorChecked.join(", ") : undefined,
      region: regionChecked.length > 0 ? regionChecked.join(", ") : undefined,
      min_width: "",
      max_width: "",
      min_height: "",
      max_height: "",
      min_price: "",
      max_price: "",
      // ordering: togglePriceOrder
    };
    axios
      .get(`${API_URL}/paintings/`, { params })
      .then((r) => setPaintings(r.data));
  }, [
    styleChecked,
    materialChecked,
    techniqueChecked,
    colorChecked,
    regionChecked,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    minPrice,
    maxPrice,
  ]);

  console.log("PAINTINGS", paintings);

  // useEffect(() => {
  //   switch (categoryFilters.categoryId) {
  //     case "1":
  //       navigate("/paintings");
  //     case "2":
  //       navigate("/handicrafts");
  //     case "3":
  //       navigate("/ceramics");
  //     default:
  //       navigate("/paintings");
  //   }
  // }, [categoryFilters.categoryId]);

  return (
    <PageWrapper>
      <div className="breadcrumbs d-flex justify-content-start">
        <p>Главная/Живопись/...</p>
      </div>
      <hr style={{ width: "1590px" }} />
      <div className="sort-items-container d-flex justify-content-between">
        <p>Живопись</p>
        {/* <div className="sort-items-select">
          <select />
        </div> */}
      </div>
      <hr style={{ width: "1590px" }} />
      <Row className="catalog-container">
        <Col sm={12} md={3} lg={3} className="">
          <div className="filter-menu-container">
            <p className="d-flex justify-content-start align-items-center filter-menu-header">
              Категории
            </p>
            <Form.Select
              aria-label="Default select example"
              id="filter-menu-header-dropdown"
              onChange={handleCategoryChange}
            >
              <option value={1}>Живопись</option>
              <option value={2}>Ремесленные изделия</option>
              <option value={3}>Керамика</option>
            </Form.Select>
            <hr />
            <Row className="filter-menu-section">
              <PaintingFilters
                setStyleChecked={setStyleChecked}
                setColorChecked={setColorChecked}
                setMaterialChecked={setMaterialChecked}
                setTechniqueChecked={setTechniqueChecked}
                setRegionChecked={setRegionChecked}
                setSubjectChecked={setSubjectChecked}
                setMinHeight={setMinHeight}
                setMaxHeight={setMaxHeight}
                setMinWidth={setMinWidth}
                setMaxWidth={setMaxWidth}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
            </Row>
            <hr />
            <ItemCards items={paintings} setPaintings={setPaintings} />
          </div>
        </Col>
      </Row>
    </PageWrapper>
  );
}
