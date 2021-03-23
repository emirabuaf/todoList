import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import InputField from "./components/InputField";
import Header from "./components/Header";
import Error from "./components/ErrorComponent";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

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
          setError={setError}
        />
      </div>
      {error ? <Error /> : null}
      <TodoList
        text={text}
        setText={setText}
        setTasks={setTasks}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
