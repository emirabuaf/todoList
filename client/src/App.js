import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
