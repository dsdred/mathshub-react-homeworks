import React, { useState, useContext } from "react";
// import React from "react";
import Card from "../UI/Card/Card";
import "./Home.css";
import TodoList from "../ToDo/ToDoList";
import ToDoForm from "../ToDo/ToDoForm";
import ToDoFilter from "../ToDo/ToDoFilter";
import ThemeContext from "../../context/theme-context";

function Home() {
  const contextData = useContext(ThemeContext);

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

  const [filterTask, setFilterTask] = useState(4);
  const filterChangeHandler = (selectedTask) => {
    setFilterTask(selectedTask);
  };

  return (
    <Card className={`home ${contextData.liteStyle ? "" : "dark"}`}>
      <h2>Список дел:</h2>
      <ToDoForm addNewTask={addNewTaskHandler} tasksId={tasksId} />
      <ToDoFilter onChangeFilter={filterChangeHandler} />
      <TodoList tasks={tasksList} filterTask={filterTask} />
    </Card>
  );
}

export default Home;
