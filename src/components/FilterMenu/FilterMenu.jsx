import React from "react";
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
import "./style.css";

const FilterMenu = () => {
  function handleShowDropdown() {
    return (
      <div>
        <Form.Select
          aria-label="Default select example"
          id="filter-menu-header-dropdown"
        >
          <option value="1">Живопись</option>
          <option value="2">Ремесленные изделия</option>
          <option value="3">Керамика</option>
        </Form.Select>
      </div>
    );
  }

  return (
    <Col sm={6} md={4} lg={4} className="filter-menu-container">
      <p className="d-flex justify-content-start align-items-center filter-menu-header">
        Категории
      </p>
      <Form.Select
        aria-label="Default select example"
        id="filter-menu-header-dropdown"
      >
        <option value="1">Живопись</option>
        <option value="2">Ремесленные изделия</option>
        <option value="3">Керамика</option>
      </Form.Select>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <p>Стиль</p>
        <PlusButton onChange={handleShowDropdown} />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <p>Техника</p>
        <PlusButton onChange={handleShowDropdown} />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <p>Тема</p>
        <PlusButton onChange={handleShowDropdown} />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <p>Цвет</p>
        <PlusButton onChange={handleShowDropdown} />
      </Row>
      <hr />
      <Row className="d-flex justify-content-between align-items-center filter-menu-section">
        <p>Размер</p>
        <PlusButton onChange={handleShowDropdown} />
      </Row>
      <hr />
    </Col>
  );
};

export default FilterMenu;
