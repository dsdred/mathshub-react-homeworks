import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({ tasks, filterTask, deleteTask, completeTask }) {
  const filtredTasks = tasks.filter(
    (item) => item.isCompleted === 1 * filterTask || 1 * filterTask === 4
  );

  return (
    <div className="todo-list">
      {filtredTasks.map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
