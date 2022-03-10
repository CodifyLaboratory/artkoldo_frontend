import React, { useState } from "react";
import Plus from "../../images/Plus.svg";
import Minus from "../../images/Minus.svg";
import "./Checkboxes.css";

const CheckboxOptions = ({ section, checkboxes, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  return showOptions ? (
    <div className="filter-menu-open">
      <div className="filter-menu-section">
        <p>{section}</p>
        <button
          className="dropdown-btn"
          onClick={() => setShowOptions(!showOptions)}
        >
          <img src={Minus} />
        </button>
      </div>
      {checkboxes.map((option) => (
        <div key={option.id} className="checkbox-row">
          <input
            type="checkbox"
            id={option.id}
            name={option.title}
            value={option.id}
            onChange={onChange}
          />
          <label htmlFor={option.id} className="checkbox-title">
            {option.title}
          </label>
        </div>
      ))}
      <div className="select-all-options">Все стили</div>
    </div>
  ) : (
    <div className="filter-menu-section">
      <p>{section}</p>
      <button
        className="dropdown-btn"
        onClick={() => setShowOptions(!showOptions)}
      >
        <img src={Plus} />
      </button>
    </div>
  );
};

export default CheckboxOptions;
