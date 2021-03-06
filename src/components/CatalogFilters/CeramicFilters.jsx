import React, { useState, useEffect } from "react";
import CheckboxOptions from "./Checkboxes";
import Plus from "../../images/icons/Plus.svg";
import Minus from "../../images/icons/Minus.svg";
import { API_URL } from "../../API/api";
import axios from "axios";
import SpinComponent from "../Spinner/Spin";
import "./Filters.css";

export default function CeramicFilters({
  typeChecked,
  setTypeChecked,
  colorChecked,
  setColorChecked,
  materialChecked,
  setMaterialChecked,
  techniqueChecked,
  setTechniqueChecked,
  regionChecked,
  setRegionChecked,
  setMinPrice,
  setMaxPrice,
}) {
  const [filters, setFilters] = useState({});
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/ceramic_filter/`).then((r) => setFilters(r.data));
  }, []);

  if (!filters) return <SpinComponent />;
  return (
    <div className="checkboxes-container">
      <CheckboxOptions
        section={"Тип товара"}
        checkboxes={filters.CeramicType}
        checkedOps={typeChecked}
        setCheckedOps={setTypeChecked}
      />
      <hr />
      <CheckboxOptions
        section={"Материал"}
        checkboxes={filters.CeramicMaterial}
        checkedOps={materialChecked}
        setCheckedOps={setMaterialChecked}
      />
      <hr />
      <CheckboxOptions
        section={"Техника"}
        checkboxes={filters.CeramicTechnique}
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
