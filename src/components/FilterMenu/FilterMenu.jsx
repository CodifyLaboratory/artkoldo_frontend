import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import PlusButton from "../PlusButton";
import MaterialOptions from "./MaterialOptions";
import PriceOptions from "./PriceOptions";
import SizeOptions from "./SizeOptions";
import "./style.css";
import StyleOptions from "./StyleOptions";
import TechnicOptions from "./TechnicOptions";
import ThemeOptions from "./ThemeOptions";
import axios from "axios";

const filter = [
  {
    id: 1,
    categoryName: "Живопись",
    section: [
      {
        id: 1,
        sectionName: "Стиль",
        options: [
          "abstraction",
          "Современное искусство",
          "Абстрактный экспрессионизм",
          "Экспрессионизм",
        ],
      },

      {
        id: 2,
        sectionName: "Темы",
        options: [],
      },
    ],
  },
  {
    id: 2,
    categoryName: "kermika",
    section: [
      {
        id: 1,
        sectionName: "Стиль",
        options: [
          "abstraction",
          "Современное искусство",
          "Абстрактный экспрессионизм",
          "Экспрессионизм",
        ],
      },

      {
        id: 2,
        sectionName: "Темы",
        options: [],
      },
    ],
  },
];

const FilterMenu = ({ filters, setFilters }) => {
  //   return (
  //     <div>
  //       <Form.Select
  //         aria-label="Default select example"
  //         id="filter-menu-header-dropdown"
  //       >
  //         <option value="1">Живопись</option>
  //         <option value="2">Ремесленные изделия</option>
  //         <option value="3">Керамика</option>
  //       </Form.Select>
  //     </div>
  //   );
  // }

  const fetchData = () => {
    //fetch reauest to API
    axios.get("/piatings", { params: filters });
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters.categoryId]);

  const showStyleOptions = () => {};

  const categoryOptions = filter.map((f) => ({
    id: f.id,
    name: f.categoryName,
  }));

  const filterOptions = filter.filter((f) => f.id === filters.categoryId);

  console.log("filterOptions", filterOptions);

  const handleCategryChange = (e) => {
    const catId = +e.target.value;

    setFilters((prev) => ({
      ...prev,
      categoryId: catId,
    }));
  };

  console.log("filters", filters);

  return (
    <Col sm={6} md={4} lg={3} className="filter-menu-container">
      <p className="d-flex justify-content-start align-items-center filter-menu-header">
        Категории
      </p>
      <Form.Select
        aria-label="Default select example"
        id="filter-menu-header-dropdown"
        onChange={handleCategryChange}
      >
        {categoryOptions.map((o) => (
          <option value={o.id}>{o.name}</option>
        ))}
      </Form.Select>
      <hr />
      <Row className="filter-menu-section">
        <StyleOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <MaterialOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <ThemeOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <TechnicOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <SizeOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <PriceOptions />
      </Row>
      <hr />
    </Col>
  );
};

export default FilterMenu;
