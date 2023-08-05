import React from "react";
import "./SongRequestForm.css";

function SongRequestForm({ addNewSong }) {
  function submitFormHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newSong = Object.fromEntries(formData.entries());
    newSong.id = Math.random().toString();

    addNewSong(newSong);
  }

  return (
    <form className="song-request-form" onSubmit={submitFormHandler}>
      <input type="text" placeholder="Название песни" name="name" required />
      <input type="text" placeholder="Исполнитель" name="artist" required />
      <select name="genre" required>
        <option value="Поп">Поп</option>
        <option value="Рок">Рок</option>
        <option value="Джаз">Джаз</option>
        <option value="Блюз">Блюз</option>
        <option value="Рэп">Рэп</option>
        <option value="Шансон">Шансон</option>
        <option value="Электроника">Электроника</option>
        <option value="Кантри">Кантри</option>
        <option value="Регги">Регги</option>
        <option value="Фолк">Фолк</option>
        <option value="Классика">Классика</option>
      </select>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SongRequestForm;
