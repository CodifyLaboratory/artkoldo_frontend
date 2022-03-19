import React, { useEffect, useState } from "react";
import Plus from "../../images/Plus.svg";
import Minus from "../../images/Minus.svg";
import "./Checkboxes.css";

const CheckboxOptions = ({
  section,
  checkboxes,
  checkedOps,
  setCheckedOps,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const toggleCheck = (id) => {
    setCheckedOps(() => {
      if (checkedOps.includes(id)) {
        return checkedOps.filter((item) => item !== id);
      } else {
        return [...checkedOps, id];
      }
    });
  };

  const selectAll = () => {
    setIsCheckAll(!isCheckAll);
    setCheckedOps(() => {
      if (isCheckAll) {
        setCheckedOps(checkboxes.map((el) => el.id));
      } else {
        return [];
      }
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const el of checkedOps) {
      console.log("checkedOps", checkedOps);
      console.log("el", el);
      if (checkedOps.includes(el) === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
  }, [checkedOps]);

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
            id={option.title}
            name={option.title}
            value={option.id}
            onChange={() => toggleCheck(option.id)}
            checked={checkedOps.includes(option.id)}
          />
          <label htmlFor={option.title} className="checkbox-title">
            {option.title}
          </label>
        </div>
      ))}
      <div className="select-all-options">
        <button onClick={() => selectAll()}>Все стили</button>
      </div>
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
