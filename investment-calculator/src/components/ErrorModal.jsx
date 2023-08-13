import React from "react";
import "./ErrorModal.css";

function ErrorModal({ title, message, onClose }) {
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <header className="headerColor">
          <h2>{title}</h2>
          <div className="content">
            <p>{message}</p>
          </div>
          <button className="button" onClick={onClose}>
            OK
          </button>
        </header>
      </div>
    </>
  );
}

export default ErrorModal;
