import React from "react";
import "./ToDoItem.css";

function ToDoItem({ task }) {
  return (
    <div className="todo-item">
      <span>{task.id}</span>
      <span>{task.task}</span>
      <span>{task.isCompleted}</span>
    </div>
  );
}

export default ToDoItem;
