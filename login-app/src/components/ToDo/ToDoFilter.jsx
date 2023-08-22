import React from "react";
import "./ToDoFilter.css";

function ToDoFilter({ onChangeFilter }) {
  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div>
      <select onChange={dropDownChangeHandler}>
        <option value="4">Все</option>
        <option value="1">В работе</option>
        <option value="2">Выполнены</option>
        <option value="0">Удалены</option>
      </select>
    </div>
  );
}

export default ToDoFilter;
