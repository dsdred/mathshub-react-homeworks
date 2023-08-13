import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

function ErrorModal({ title, message, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="overlay" onClick={onClose} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
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
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ErrorModal;
