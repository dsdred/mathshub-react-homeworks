import React, { useContext } from "react";
import "./ToDoItem.css";
import ThemeContext from "../../context/theme-context";

function ToDoItem({ task, deleteTask, completeTask }) {
  const contextData = useContext(ThemeContext);

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

      <span
        className={`status${String(
          task.isCompleted + (contextData.liteStyle ? 0 : 10)
        )}`}
      >
        {task.task}
      </span>

      <div>
        <button
          type="button"
          className="btnComplete btn"
          onClick={() => {
            completeTask(task.id);
          }}
        >
          ✔
        </button>
        <button
          type="button"
          className="btnDelete btn"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
