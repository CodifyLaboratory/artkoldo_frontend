import React, { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import MaterialOptions from "./MaterialOptions";
import PriceOptions from "./PriceOptions";
import SizeOptions from "./SizeOptions";
import StyleOptions from "./StyleOptions";
import ThemeOptions from "./ThemeOptions";
import TechniqueOptions from "./TechniqueOptions";
import ColorOptions from "./ColorOptions";

import "./style.css";
import { catalogFilters } from "../../mockData/MockFilters";
import RegionOptions from "./RegionOptions";

const PaintingFilters = ({ filters, setFilters, handleCategoryChange }) => {
  // handleOptionsChange = (e) => {
  //   const
  // };
  const categoryOptions = catalogFilters.map((f) => ({
    id: f.id,
    name: f.categoryName,
  }));
  return (
    <div className="filter-menu-container">
      <p className="d-flex justify-content-start align-items-center filter-menu-header">
        Категории
      </p>
      <Form.Select
        aria-label="Default select example"
        id="filter-menu-header-dropdown"
        onChange={handleCategoryChange}
      >
        <option id={1}>Живопись</option>
        <option id={2}>Ремесленные изделия</option>
        <option id={3}>Керамика</option>
      </Form.Select>
      <Row className="filter-menu-section">
        <StyleOptions
        // styleCheckboxes={paintingStyleCheckboxes}
        // handleOptionsChange={handleOptionsChange}
        />
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
        <SizeOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <TechniqueOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <ColorOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <PriceOptions />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <RegionOptions />
      </Row>
      <hr />
    </div>
  );
};

export default PaintingFilters;
