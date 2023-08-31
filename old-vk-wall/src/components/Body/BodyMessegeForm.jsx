import React from "react";

import "./BodyMessegeForm.css";

function BodyMessegeForm({ addMessagesHandler }) {
  function submitFormHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newMessage = Object.fromEntries(formData.entries());
    const newDate = new Date();
    const mMonth = [
      "янв",
      "фев",
      "март",
      "апр",
      "май",
      "июнь",
      "июль",
      "авг",
      "сен",
      "окт",
      "нояб",
      "дек",
    ];

    const wName = [
      "Диана",
      "Алёна",
      "Елизавета",
      "Полина",
      "Анна",
      "Алиса",
      "Екатерина",
      "Елизавета",
      "Виктория",
      "Дарья",
    ];
    const mName = [
      "Михаил",
      "Алексей",
      "Виктор",
      "Максим",
      "Григорий",
      "Савелий",
      "Константин",
      "Семён",
      "Тихон",
      "Артемий",
    ];

    newMessage.id = Date.now();
    newMessage.messegeDate =
      String(newDate.getDate()) +
      " " +
      mMonth[newDate.getMonth()] +
      " " +
      String(newDate.getFullYear());

    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    const sex = getRandomArbitrary(1, 2);
    const number = getRandomArbitrary(1, 10);

    newMessage.name = sex === 1 ? mName[number] : wName[number];
    newMessage.avatar =
      "/avatars/" + (sex === 1 ? "m" + number : "w" + number) + ".jpg";
    addMessagesHandler(newMessage);
  }

  return (
    <section className="messageContayner">
      <form className="addMessageForm" onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="Введите ваше сообщение..."
          name="massegeText"
          className="inputNewMessage"
          required
        />
        <button type="submit" onClick={addMessagesHandler} className="btnAdd">
          Отправить
        </button>
      </form>
    </section>
  );
}

export default BodyMessegeForm;
