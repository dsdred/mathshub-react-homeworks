import React, { useState } from "react";
// import React from "react";
import Card from "../UI/Card/Card";
import "./Home.css";
import TodoList from "../ToDo/ToDoList";
import ToDoForm from "../ToDo/ToDoForm";

function Home() {
  // const [toDoList, setToDoList] = useState([]);

  const tasks = [
    { id: 1, task: "Написать статью", isCompleted: 0 },
    { id: 2, task: "Поесть", isCompleted: 1 },
    { id: 3, task: "Почитать", isCompleted: 2 },
  ];

  const [tasksList, setTasksList] = useState(tasks);
  const tasksId = tasksList.length;

  const addNewTaskHandler = (newTask) => {
    setTasksList((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <Card className="home">
      <h1>Список дел:</h1>
      <ToDoForm addNewTask={addNewTaskHandler} tasksId={tasksId} />
      <TodoList tasks={tasksList} />
    </Card>
  );
}

export default Home;
