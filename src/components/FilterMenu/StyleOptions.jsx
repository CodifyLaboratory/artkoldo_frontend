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

const StyleOptions = (styleCheckboxes) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // const styleCheckboxes = [
  //   "Абстракционизм",
  //   "Изобразительное искусство",
  //   "Экспрессионизм",
  //   "Импрессионизм",
  //   "Реализм",
  //   "Минимализм",
  //   "Поп-арт",
  // ];

  // console.log(styleCheckboxes, styleCheckboxes[0]);

  const handleStyleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return isOptionsOpen ? (
    <Col sm={12} md={12} lg={12}>
      <div className="filter-menu-section">
        <p>Стиль</p>
        <button
          className="dropdown-btn"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <span>&minus;</span>
        </button>
      </div>
      {/* {styleCheckboxes.map((el) => ({
        <Row key={el.id} className="checkbox-row">
          <input type="checkbox" value={el.id} />
          <span className="checkbox-title">{el.optionName}</span>
        </Row>
      }))} */}
      <div className="select-all-options">Все стили</div>
    </Col>
  ) : (
    <Col sm={12} md={12} lg={12}>
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
