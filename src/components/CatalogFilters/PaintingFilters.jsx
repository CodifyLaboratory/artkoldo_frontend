import React, { useState, useEffect, useRef } from "react";
import CheckboxOptions from "./Checkboxes";
import Plus from "../../images/icons/Plus.svg";
import Minus from "../../images/icons/Minus.svg";
import { API_URL } from "../../API/api";
import axios from "axios";
import SpinComponent from "../Spinner/Spin";
import "./Filters.css";

export default function PaintingFilters({
  styleChecked,
  setStyleChecked,
  colorChecked,
  setColorChecked,
  materialChecked,
  setMaterialChecked,
  techniqueChecked,
  setTechniqueChecked,
  regionChecked,
  setRegionChecked,
  subjectChecked,
  setSubjectChecked,
  setMinHeight,
  setMaxHeight,
  setMinWidth,
  setMaxWidth,
  setMinPrice,
  setMaxPrice,
}) {
  const [filters, setFilters] = useState({});
  const [showSizeOptions, setShowSizeOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/painting_filter/`)
      .then((r) => setFilters(r.data));
  }, []);

  if (!filters) return <SpinComponent />;
  return (
    <div className="checkboxes-container">
      <CheckboxOptions
        section={"Стиль"}
        checkboxes={filters.Style}
        checkedOps={styleChecked}
        setCheckedOps={setStyleChecked}
      />
      <hr />
      <CheckboxOptions
        section={"Материал"}
        checkboxes={filters.PaintMaterial}
        checkedOps={materialChecked}
        setCheckedOps={setMaterialChecked}
      />
      <hr />
      <CheckboxOptions
        section={"Тема"}
        checkboxes={filters.Subject}
        checkedOps={subjectChecked}
        setCheckedOps={setSubjectChecked}
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
                type="number"
                onChange={(event) => {
                  setMinHeight(event.target.value);
                }}
              />
              <span>&nbsp;&mdash;&nbsp;</span>
              <input
                placeholder="Высота макс"
                className="manual-input-size"
                type="number"
                onChange={(event) => {
                  setMaxHeight(event.target.value);
                }}
              />
              <span>&nbsp;см</span>
            </div>
            <div className="manual-input-row">
              <input
                placeholder="Ширина мин"
                className="manual-input-size"
                type="number"
                onChange={(event) => {
                  setMinWidth(event.target.value);
                }}
              />
              <span>&nbsp;&mdash;&nbsp;</span>
              <input
                placeholder="Ширина макс"
                className="manual-input-size"
                type="number"
                onChange={(event) => {
                  setMaxWidth(event.target.value);
                }}
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
        checkedOps={techniqueChecked}
        setCheckedOps={setTechniqueChecked}
      />
      <hr />
      <CheckboxOptions
        section={"Цвет"}
        checkboxes={filters.Color}
        checkedOps={colorChecked}
        setCheckedOps={setColorChecked}
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
              type="number"
              onChange={(event) => {
                setMinPrice(event.target.value);
              }}
            />
            <span>&nbsp;&mdash;&nbsp;</span>
            <input
              placeholder="До"
              className="manual-input-price"
              type="number"
              onChange={(event) => {
                setMaxPrice(event.target.value);
              }}
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
        checkedOps={regionChecked}
        setCheckedOps={setRegionChecked}
      />
      <hr />
    </div>
  );
}
