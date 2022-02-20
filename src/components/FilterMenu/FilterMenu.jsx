import React, { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import MaterialOptions from "./MaterialOptions";
import PriceOptions from "./PriceOptions";
import SizeOptions from "./SizeOptions";
import "./style.css";
import StyleOptions from "./StyleOptions";
import TechnicOptions from "./TechnicOptions";
import ThemeOptions from "./ThemeOptions";
import { catalogFilters } from "./CatalogFilters";

const FilterMenu = ({ filters, setFilters }) => {
  const categoryOptions = catalogFilters.map((f) => ({
    id: f.id,
    name: f.categoryName,
  }));

  const handleCategoryChange = (e) => {
    const catId = +e.target.value;
    setFilters((prev) => ({
      ...prev,
      categoryId: catId,
    }));
  };

  // handleOptionsChange = (e) => {
  //   const
  // };

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
        {categoryOptions.map((o) => (
          <option value={o.id}>{o.name}</option>
        ))}
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
    </div>
  );
};

export default FilterMenu;
