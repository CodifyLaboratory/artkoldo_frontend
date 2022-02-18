import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./style.css";

const MaterialOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = [
    "Холст",
    "Бумага",
    "Дерево",
    "ДВП",
    "Ткани",
    "Другое",
  ];

  return isOptionsOpen ? (
    <Col sm={12} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Материал</p>
        <button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>&minus;</span>
        </button>
      </div>
      {styleCheckboxes.map((el, i) => (
        <Row key={i} className="checkbox-row">
          <input type="checkbox" />
          <span className="checkbox-title">{el}</span>
        </Row>
      ))}
      <div className="select-all-options">Все стили</div>
    </Col>
  ) : (
    <Col sm={12} md={3} lg={3}>
      <div className="filter-menu-section">
        <p>Материал</p>
        <button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>+</span>
        </button>
      </div>
    </Col>
  );
};

export default MaterialOptions;
