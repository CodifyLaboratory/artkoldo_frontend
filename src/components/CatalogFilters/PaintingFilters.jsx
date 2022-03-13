import React, { useState, useEffect } from "react";
import CheckboxOptions from "./Checkboxes";
import Plus from "../../images/Plus.svg";
import Minus from "../../images/Minus.svg";
import { API_URL } from "../../API/api";
import axios from "axios";
import "./Filters.css";

export default function PaintingFilters({
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
  const [filters, setFilters] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const [showSubjectOptions, setShowSubjectOptions] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [showPaintMaterialOptions, setShowPaintMaterialOptions] =
    useState(false);
  const [showPaintTechniqueOptions, setShowPaintTechniqueOptions] =
    useState(false);
  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [showSizeOptions, setShowSizeOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  console.log("PaintingFilters", filters);
  console.log("keys", Object.keys(filters));

  useEffect(() => {
    axios.get(`${API_URL}/painting_filter/`).then((r) => setFilters(r.data));
  }, []);

  console.log("painting_filters", filters);

  function handleStyle(e) {
    const { checked } = e.target;
    setStyleChecked((prevChecked) => {
      const checkedIds = [];
      if (checked) {
        checkedIds.push(e.target.id);
      } else {
        console.log("prevChecked", prevChecked);
        //remove option.id
      }
      console.log("checkedStyle", checkedIds);
      return checkedIds;
    });
  }

  function handleSubject(e) {
    const { checked } = e.target;
    setSubjectChecked((prevChecked) => {
      const checkedIds = [];
      if (checked) {
        checkedIds.push(e.target.id);
      } else {
        //remove option.id
      }
      return checkedIds;
    });
  }

  function handleMaterial(e) {
    const { checked } = e.target;
    setMaterialChecked((prevChecked) => {
      const checkedIds = [];
      if (checked) {
        checkedIds.push(e.target.id);
      } else {
        //remove option.id
      }
      return checkedIds;
    });
  }

  function handleColor(e) {
    const { checked } = e.target;
    setColorChecked((prevChecked) => {
      const checkedIds = [];
      if (checked) {
        checkedIds.push(e.target.id);
      } else {
        //remove option.id
      }
      return checkedIds;
    });
  }

  function handleRegion(e) {
    const { checked } = e.target;
    const targetId = e.target.id;
    setRegionChecked((prevChecked) => {
      const checkedIds = [...prevChecked];
      if (prevChecked.includes(targetId)) {
        //remove targetId from checkedIds
      } else {
        checkedIds.push(e.target.id);
      }
      return checkedIds;
    });
  }

  function handleTechnique(e) {
    const { checked } = e.target;
    setTechniqueChecked((prevChecked) => {
      const checkedIds = [];
      if (checked) {
        checkedIds.push(e.target.id);
      } else {
        //remove option.id
      }
      return checkedIds;
    });
  }

  return (
    <div className="checkboxes-container">
      <CheckboxOptions
        section={"Стиль"}
        checkboxes={filters.Style}
        onChange={(e) => handleStyle(e)}
      />
      <hr />
      <CheckboxOptions
        section={"Материал"}
        checkboxes={filters.PaintMaterial}
        onChange={(e) => handleMaterial(e)}
      />
      <hr />
      <CheckboxOptions
        section={"Тема"}
        checkboxes={filters.Subject}
        onChange={(e) => handleSubject(e)}
      />
      <hr />
      {showSizeOptions ? (
        <div>
          <div className="filter-menu-section">
            <p>Размер</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowSizeOptions(!showSizeOptions)}
            >
              <img src={Minus} />
            </button>
          </div>
          <p className="select-manually">Выбрать вручную</p>
          <div className="manual-input-container">
            <div className="manual-input-row">
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
            <div className="manual-input-row">
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
          </div>
        </div>
      ) : (
        <div className="filter-menu-section">
          <p>Размер</p>
          <button
            className="dropdown-btn"
            onClick={() => setShowSizeOptions(!showSizeOptions)}
          >
            <img src={Plus} />
          </button>
        </div>
      )}
      <hr />
      <CheckboxOptions
        section={"Техника"}
        checkboxes={filters.PaintTechnique}
        onChange={(e) => handleTechnique(e)}
      />
      <hr />
      <CheckboxOptions
        section={"Цвет"}
        checkboxes={filters.Color}
        onChange={(e) => handleColor(e)}
      />
      <hr />
      {showPriceOptions ? (
        <div>
          <div className="filter-menu-section">
            <p>Цена</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowPriceOptions(!showPriceOptions)}
            >
              <img src={Minus} />
            </button>
          </div>
          <div className="manual-input-row price-row">
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
        </div>
      ) : (
        <div>
          <div className="filter-menu-section">
            <p>Цена</p>
            <button
              className="dropdown-btn"
              onClick={() => setShowPriceOptions(!showPriceOptions)}
            >
              <img src={Plus} />
            </button>
          </div>
        </div>
      )}
      <hr />
      <CheckboxOptions
        section={"Происхождение"}
        checkboxes={filters.Region}
        onChange={(e) => handleRegion(e)}
      />
      <hr />
    </div>
  );
}
