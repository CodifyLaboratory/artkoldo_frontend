import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

const CheckboxOptions = ({
  section,
  checkboxes,
  sizeManualInput,
  priceManualInput,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  // const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState([]);

  return showOptions ? (
    <Col sm={12} md={3} lg={3}>
      <div className="filter-menu-section">
        <p>{section}</p>
        <button
          className="dropdown-btn"
          onClick={() => setShowOptions(!showOptions)}
        >
          <span>&minus;</span>
        </button>
      </div>
      {checkboxes.map((el) => (
        <Row key={el.id} className="checkbox-row">
          <input type="checkbox" id={el.title} name={el.title} value={el.id} />
          <label for={el.title} className="checkbox-title">
            {el.title}
          </label>
        </Row>
      ))}
      {sizeManualInput && (
        <>
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
        </>
      )}
      {priceManualInput && (
        <>
          <div className="select-manually">Выбрать вручную</div>
          <div className="manual-input-container">
            <input placeholder="От" className="manual-input-price" />
            <span>&nbsp;&mdash;&nbsp;</span>
            <input placeholder="До" className="manual-input-price" />
            <span>&nbsp;сом</span>
          </div>
        </>
      )}
      <div className="select-all-options">Все стили</div>
    </Col>
  ) : (
    <Col sm={12} md={3} lg={3}>
      <div className="filter-menu-section">
        <p>{section}</p>
        <button
          className="dropdown-btn"
          onClick={() => setShowOptions(!showOptions)}
        >
          <span>+</span>
        </button>
      </div>
    </Col>
  );
};

export default CheckboxOptions;
