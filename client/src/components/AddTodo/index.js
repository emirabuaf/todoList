import React from "react";

const AddTodo = ({ tasks, setTasks, text, setText }) => {
  const addTodo = () => {
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
    } else {
      return null;
    }
    setText("");
  };

  const getUniqueIdNumber = () => {
    const arrayOfIds = tasks.map((task) => task.id);
    const index = Math.floor(Math.random() * 10000).toString();
    if (arrayOfIds.includes(index)) {
      return getUniqueIdNumber();
    } else {
      arrayOfIds.push(index);
      return index;
    }
  };
  return (
    <div className="addTodoContainer">
      <i
        onClick={addTodo}
        className="fa fa-plus"
        style={{ color: "#666", cursor: "pointer", marginRight: "10px" }}
      ></i>
    </div>
  );
};

export default AddTodo;
