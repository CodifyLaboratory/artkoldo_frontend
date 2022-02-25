import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

const RegionOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = ["Масло", "Акрил", "Гуашь", "Чернила", "Акварель"];

  return isOptionsOpen ? (
    <Col sm={12} md={3} lg={3}>
      <div className="filter-menu-section">
        <p>Техника</p>
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
        <p>Техника</p>
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

export default RegionOptions;
