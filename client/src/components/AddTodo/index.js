import React from "react";

const AddTodo = ({ tasks, setTasks, text }) => {
  const addTodo = () => {
    let newTodo;
    const arrayOfIds = tasks.map((task) => task.id);
    let newId = getUniqueIdNumber();
    while (arrayOfIds.includes(newId)) {
      newId = getUniqueIdNumber();
    }
    newTodo = { id: newId, text: text };
    setTasks([...tasks, newTodo]);
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
    <div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
