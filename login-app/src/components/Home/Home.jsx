// import React, { useState } from "react";
import React from "react";
import Card from "../UI/Card/Card";
import "./Home.css";
import TodoList from "../ToDo/ToDoList";
import ToDoForm from "../ToDo/ToDoForm";

function Home() {
  // const [toDoList, setToDoList] = useState([]);

  const tasks = [
    { id: 1, task: "Написать статью", isCompleted: false },
    { id: 2, task: "Поесть", isCompleted: false },
    { id: 3, task: "Почитать", isCompleted: false },
  ];

  return (
    <Card className="home">
      <h1>Список дел:</h1>
      <ToDoForm />
      <TodoList tasks={tasks} />
    </Card>
  );
}

export default Home;
