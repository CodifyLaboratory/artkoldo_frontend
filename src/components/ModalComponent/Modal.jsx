import React from "react";
import logo from "../../images/round-logo.png";
import "./Modal.css";

const Modal = ({ setIsOpen, data }) => {
  if (!data) return <div>Loading</div>;
  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="modal-box">
        <div className="modal-inner-box">
          <div className="modal-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="modal-text">{data?.text}</div>
          <div className="modal-btn-box">
            <button onClick={() => setIsOpen(false)}>
              <span>{"Благодарим за понимание"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
