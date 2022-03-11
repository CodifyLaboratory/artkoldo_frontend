import React, { useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import CheckboxOptions from "./CheckboxOptions";
import "./style.css";
import { catalogFilters } from "../../mockData/MockFilters";

const CeramicsFilters = ({ filters, setFilters, handleCategoryChange }) => {
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
        <option value={1}>Живопись</option>
        <option value={2}>Ремесленные изделия</option>
        <option value={3}>Керамика</option>
      </Form.Select>
      <hr />
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Стиль"}
          checkboxes={filters.Style}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Материал"}
          checkboxes={filters.PaintMaterial}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Тема"}
          checkboxes={filters.Subject}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
      {/* <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Размер"}
          checkboxes={filters.Size}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr /> */}
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Техника"}
          checkboxes={filters.PaintTechnique}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Цвет"}
          checkboxes={filters.Color}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
      {/* <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Цена"}
          checkboxes={filters.Price}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr /> */}
      <Row className="filter-menu-section">
        <CheckboxOptions
          section={"Регион"}
          checkboxes={filters.Region}
          sizeManualInput={false}
          priceManualInput={false}
        />
      </Row>
      <hr />
    </div>
  );
};

export default CeramicsFilters;
