import React from "react";
import "./ToDoForm.css";

function ToDoForm() {
  function submitFormHandler(event) {
    // event.preventDefault();
    // const formData = new FormData(event.target);

    // const newSong = Object.fromEntries(formData.entries());
    // newSong.id = Math.random().toString();

    // addNewSong(newSong);
    console.log(event);
  }

  //   function delFormHandler() {
  //     delSong();
  //   }

  return (
    <form className="todo-form" onSubmit={submitFormHandler}>
      <input type="text" placeholder="Задача" name="task" required />
      <select name="isCompleted" required>
        <option value="Complete">Выполнена</option>
        <option value="Work">В работе</option>
        <option value="All">Все</option>
      </select>
      <button type="submit" className="btnAdd">
        +
      </button>
    </form>
  );
}

export default ToDoForm;
