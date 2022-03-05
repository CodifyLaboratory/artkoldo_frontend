import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./style.css";

export default function PaintingFilters({
  filters,
  setStyleChecked,
  setColorChecked,
  setMaterialChecked,
  setTechniqueChecked,
  setRegionChecked,
  setSubjectChecked,
  setMinHeight,
  setMaxHeight,
  setMinWidth,
  setMaxWidth,
  setMinPrice,
  setMaxPrice,
}) {
  const [paintingFilters, setPaintingFilters] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showSizeOptions, setShowSizeOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  console.log("PaintingFilters", paintingFilters);

  useEffect(() => {
    axios
      .get(`${API_URL}/painting_filter/`)
      .then((r) => setPaintingFilters(r.data));
  }, []);

  function handleCheckboxes(e, key, option) {
    if (key === "Style") {
      const { checked } = e.target;
      setStyleChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }

    if (key === "Subject") {
      const { checked } = e.target;
      setSubjectChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }

    if (key === "PaintMaterial") {
      const { checked } = e.target;
      setMaterialChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }

    if (key === "Color") {
      const { checked } = e.target;
      setColorChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }

    if (key === "Region") {
      const { checked } = e.target;
      setRegionChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }

    if (key === "PaintTechnique") {
      const { checked } = e.target;
      setTechniqueChecked((prevChecked) => {
        const checkedIds = [];
        if (checked) {
          checkedIds.push(option.id);
        } else {
          //remove option.id
        }
        return checkedIds;
      });
    }
  }

  return (
    <div>
      {Object.keys(paintingFilters).map((key) => {
        showOptions ? (
          <Col sm={12} md={3} lg={3}>
            <div className="filter-menu-section">
              <p>{key}</p>
              <button
                className="dropdown-btn"
                onClick={() => setShowOptions(!showOptions)}
              >
                <span>&minus;</span>
              </button>
            </div>
            {paintingFilters[key].map((option) => (
              <Row key={option.id} className="checkbox-row">
                <input
                  type="checkbox"
                  id={option.title}
                  name={option.title}
                  value={option.id}
                  onChange={(e) => handleCheckboxes(e, key, option)}
                />
                <label for={option.title} className="checkbox-title">
                  {option.title}
                </label>
              </Row>
            ))}
          </Col>
        ) : (
          <Col sm={12} md={3} lg={3}>
            <div className="filter-menu-section">
              <p>{key}</p>
              <button
                className="dropdown-btn"
                onClick={() => setShowOptions(!showOptions)}
              >
                <span>+</span>
              </button>
            </div>
          </Col>
        );
      })}
      {showSizeOptions ? (
        <Col sm={12} md={3} lg={3}>
          <div className="filter-menu-section">
            <p>Выбрать вручную</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowSizeOptions(!showSizeOptions)}
            >
              <span>-</span>
            </button>
          </div>
          <div className="manual-input-container">
            <input
              placeholder="Высота мин"
              className="manual-input-size"
              onChange={(e) => setMinHeight(e.target.value)}
            />
            <span>&nbsp;&mdash;&nbsp;</span>
            <input
              placeholder="Высота макс"
              className="manual-input-size"
              onChange={(e) => setMaxHeight(e.target.value)}
            />
            <span>&nbsp;см</span>
          </div>
          <div className="manual-input-container">
            <input
              placeholder="Ширина мин"
              className="manual-input-size"
              onChange={(e) => setMinWidth(e.target.value)}
            />
            <span>&nbsp;&mdash;&nbsp;</span>
            <input
              placeholder="Ширина макс"
              className="manual-input-size"
              onChange={(e) => setMaxWidth(e.target.value)}
            />
            <span>&nbsp;см</span>
          </div>
          <div className="select-all-options">Все стили</div>
        </Col>
      ) : (
        <Col sm={12} md={3} lg={3}>
          <div className="filter-menu-section">
            <p>Выбрать вручную</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowSizeOptions(!showSizeOptions)}
            >
              <span>+</span>
            </button>
          </div>
        </Col>
      )}
      {showPriceOptions ? (
        <Col sm={12} md={3} lg={3}>
          <div className="filter-menu-section">
            <p>Выбрать вручную</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowPriceOptions(!showPriceOptions)}
            >
              <span>-</span>
            </button>
          </div>
          <div className="manual-input-container">
            <input
              placeholder="От"
              className="manual-input-price"
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>&nbsp;&mdash;&nbsp;</span>
            <input
              placeholder="До"
              className="manual-input-price"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>&nbsp;сом</span>
          </div>
          <div className="select-all-options">Все стили</div>
        </Col>
      ) : (
        <Col sm={12} md={3} lg={3}>
          <div className="filter-menu-section">
            <p>Выбрать вручную</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowPriceOptions(!showPriceOptions)}
            >
              <span>+</span>
            </button>
          </div>
        </Col>
      )}
    </div>
  );
}
