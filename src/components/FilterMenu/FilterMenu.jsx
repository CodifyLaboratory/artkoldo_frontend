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
import CatalogContainer from "../../Catalog/CatalogContainer";
import { catalogFilters } from "./CatalogFilters";
import { sectionTitles } from "./sectionTitles";

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

  // const fetchData = () => {
  //   //fetch reauest to API
  //   axios.get("/piatings", { params: filters });
  // };

  // useEffect(() => {
  //   fetchData(filters);
  // }, [filters.categoryId]);

  const showStyleOptions = () => {};

  const categoryOptions = catalogFilters.map((f) => ({
    id: f.id,
    name: f.categoryName,
  }));

  // const sectionOptions = catalogFilters.map((f) => ({
  //   id: f.sections.id,
  //   sectionName: f.sections.sectionName,
  // }));

  // console.log("sections", sectionOptions);

  const filterOptions = catalogFilters.filter(
    (f) => f.id === filters.categoryId
  );

  const paintingStyleCheckboxes = catalogFilters[1].sections[1].options.map(
    (el) => ({
      id: el.id,
      optionName: el.optionName,
    })
  );

  console.log("!!!!!!", paintingStyleCheckboxes);

  const handleCategryChange = (e) => {
    const catId = +e.target.value;

    setFilters((prev) => ({
      ...prev,
      categoryId: catId,
    }));
  };

  console.log("filters", filters);
  console.log("sections", sectionTitles[1].sectionName);

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

      {sectionTitles.map((s) => (
        <>
          <Row className="filter-menu-section">
            <Col sm={12} md={3} lg={3}>
              <div className="filter-menu-section">
                <p>{s.sectionName}</p>
                <button className="dropdown-btn">
                  <span>+</span>
                </button>
              </div>
            </Col>
          </Row>
          <hr />
        </>
      ))}

      <Row className="filter-menu-section">
        <StyleOptions styleCheckboxes={paintingStyleCheckboxes} />
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
