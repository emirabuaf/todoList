import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    fetch("api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderTasks = () => {
    let newTasksArray = [];
    for (var prop in tasks) {
      newTasksArray.push(tasks[prop]);
    }
    return newTasksArray.map((newTask) => <h1>{newTask.text}</h1>);
  };

  return <div className="App">{renderTasks()}</div>;
}

export default App;
