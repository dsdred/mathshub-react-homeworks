import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({ tasks }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <ToDoItem task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TodoList;
