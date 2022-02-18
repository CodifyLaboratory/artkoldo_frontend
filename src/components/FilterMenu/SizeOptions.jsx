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

const SizeOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const styleCheckboxes = ["Маленький", "Средний", "Большой"];

  return isOptionsOpen ? (
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Размер</p>
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
        <input placeholder="Высота мин" className="manual-input-size" />
        <span>&nbsp;&mdash;&nbsp;</span>
        <input placeholder="Высота макс" className="manual-input-size" />
        <span>&nbsp;см</span>
      </div>
      <div className="manual-input-container">
        <input placeholder="Ширина мин" className="manual-input-size" />
        <span>&nbsp;&mdash;&nbsp;</span>
        <input placeholder="Ширина макс" className="manual-input-size" />
        <span>&nbsp;см</span>
      </div>
    </Col>
  ) : (
    <Col sm={6} md={4} lg={4}>
      <div className="filter-menu-section">
        <p>Размер</p>
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

export default SizeOptions;