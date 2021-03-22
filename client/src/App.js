import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo";

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

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      <AddTodo setTasks={setTasks} tasks={tasks} text={text} />
      <TodoList setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
