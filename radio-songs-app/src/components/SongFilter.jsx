import React from "react";
import "./SongFilter.css";

function SongFilter({ onChangeFilter }) {
  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div>
      <select onChange={dropDownChangeHandler}>
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
    </div>
  );
}

export default SongFilter;
