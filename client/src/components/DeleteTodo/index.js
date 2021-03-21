import React from "react";

const DeleteTodo = ({ tasks, setTasks, id }) => {
  const handleDelete = (id) => {
    const newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
  };
  return (
    <div>
      <button onClick={() => handleDelete(id)}>DeleteTodo</button>
    </div>
  );
};

export default DeleteTodo;
