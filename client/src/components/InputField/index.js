import React, { useState } from "react";
import AddTodo from "../AddTodo";
import "./styles.css";

const InputField = ({ tasks, setTasks, text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="inputFieldContainer">
      <input
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
      />
    </div>
  );
};

export default InputField;
