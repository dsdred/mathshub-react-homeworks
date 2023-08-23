import React from "react";
import "./ToDoForm.css";

function ToDoForm({ addNewTask, tasksId }) {
  function submitFormHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newTask = Object.fromEntries(formData.entries());
    newTask.id = tasksId + 1;
    newTask.isCompleted = 1;

    addNewTask(newTask);
  }

  return (
    <form className="todo-form" onSubmit={submitFormHandler}>
      <input type="text" placeholder="Задача" name="task" required />
      <button type="submit" className="btnAdd">
        +
      </button>
    </form>
  );
}

export default ToDoForm;
