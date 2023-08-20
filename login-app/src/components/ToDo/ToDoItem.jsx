import React from "react";
import "./ToDoItem.css";

function ToDoItem({ task }) {
  function TaskStatus(statusNow) {
    let message;
    if (statusNow === 0) {
      message = "👎";
    } else if (statusNow === 1) {
      message = "☝";
    } else {
      message = "👍";
    }
    return message;
  }

  return (
    <div className="todo-item">
      <div>
        <span className="textId">{task.id}</span>
        <span>{TaskStatus(task.isCompleted)}</span>
      </div>

      <span className={`status${String(task.isCompleted)}`}>{task.task}</span>

      <div>
        <button type="button" className="btnComplete btn">
          ✔
        </button>
        <button type="button" className="btnDelete btn">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
