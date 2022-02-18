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
import PlusButton from "../PlusButton";
import "./style.css";

const StyleOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = [
    "Абстракционизм",
    "Изобразительное искусство",
    "Экспрессионизм",
    "Импрессионизм",
    "Реализм",
    "Минимализм",
    "Поп-арт",
  ];

  console.log(styleCheckboxes, styleCheckboxes[0]);

  const handleStyleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return isOptionsOpen ? (
    <Col sm={12} md={3} lg={3}>
      <div className="filter-menu-section">
        <p>Стиль</p>
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
        <p>Стиль</p>
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

export default StyleOptions;
