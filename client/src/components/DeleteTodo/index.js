import React, { useState } from "react";

const DeleteTodo = ({ tasks, setTasks, id }) => {
  const handleDelete = (id) => {
    const newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
    fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("deleted"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button onClick={() => handleDelete(id)}>DeleteTodo</button>
    </div>
  );
};

export default DeleteTodo;
