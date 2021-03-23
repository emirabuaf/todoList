import React from "react";
import AddTodo from "../AddTodo";
import "./styles.css";

const InputField = ({ tasks, setTasks, text, setText, setError }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const addTodo = (e) => {
    let newTodo;
    const arrayOfIds = tasks.map((task) => task.id);
    let newId = getUniqueIdNumber();
    while (arrayOfIds.includes(newId)) {
      newId = getUniqueIdNumber();
    }
    newTodo = { id: newId, text: text };
    fetch("api/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    if (text !== "") {
      setTasks([...tasks, newTodo]);
      setError(false);
    } else {
      setError(true);
    }
    setText("");
  };

  const getUniqueIdNumber = () => {
    const arrayOfIds = tasks.map((task) => task.id);
    // left with 10000 id numbers. we could increase the number as well.
    // i could have created the id's in different way as well with data and timestamp but since
    // in the first example it was whole integers i created this way and didn't want to use any package
    const index = Math.floor(Math.random() * 10000).toString();
    if (arrayOfIds.includes(index)) {
      return getUniqueIdNumber();
    } else {
      arrayOfIds.push(index);
      return index;
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    } else {
      return null;
    }
    if (text === "") {
      setError(true);
    }
  };

  return (
    <div className="inputFieldContainer">
      <input
        onKeyDown={handleKeyDown}
        placeholder="Enter new todo"
        className="inputField"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <AddTodo
        setTasks={setTasks}
        tasks={tasks}
        text={text}
        setText={setText}
        addTodo={addTodo}
      />
    </div>
  );
};

export default InputField;
