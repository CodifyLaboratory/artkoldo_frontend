import React from "react";

const PlusButton = (onChange) => {
  return (
    <button className="plus-btn" onClick={onChange}>
      <span>+</span>
    </button>
  );
};

export default PlusButton;
