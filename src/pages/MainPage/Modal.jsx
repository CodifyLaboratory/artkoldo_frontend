import React from "react";
import "./Modal.css";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="modal-box">
        <div className="modal-text">Ждем текст от бэкэнда</div>
      </div>
    </>
  );
};

export default Modal;
