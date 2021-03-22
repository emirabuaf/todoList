import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo";
import InputField from "./components/InputField";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("api/tasks")
      .then((response) => response.json())
      .then((data) => {
        let newTasksArray = [];
        for (var key in data) {
          newTasksArray.push(data[key]);
        }
        setTasks(newTasksArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="inputAddTodoContainer">
        <InputField
          setTasks={setTasks}
          tasks={tasks}
          text={text}
          setText={setText}
        />
      </div>
      <TodoList setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
