import React from "react";

import "./BodyMessegeForm.css";

function BodyMessegeForm() {
  return (
    <section className="messageContayner">
      <form className="addMessageForm">
        <input
          type="text"
          placeholder="Введите ваше сообщение..."
          name="newMassege"
          className="inputNewMessage"
          required
        />
        <button type="submit" className="btnAdd">
          Отправить
        </button>
      </form>
    </section>
  );
}

export default BodyMessegeForm;
