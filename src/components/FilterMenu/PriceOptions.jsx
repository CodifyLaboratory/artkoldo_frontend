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

const PriceOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = ["Маленький", "Средний", "Большой"];

  return isOptionsOpen ? (
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Цена</p>
        <Button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>&minus;</span>
        </Button>
      </div>
      {styleCheckboxes.map((el, i) => (
        <Row key={i} className="checkbox-row">
          <input type="checkbox" />
          <span className="checkbox-title">{el}</span>
        </Row>
      ))}
      <div className="select-manually">Выбрать вручную</div>
      <div className="manual-input-container">
        <input placeholder="От" className="manual-input-price" />
        <span>&nbsp;&mdash;&nbsp;</span>
        <input placeholder="До" className="manual-input-price" />
        <span>&nbsp;сом</span>
      </div>
    </Col>
  ) : (
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Цена</p>
        <Button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>+</span>
        </Button>
      </div>
    </Col>
  );
};

export default PriceOptions;
