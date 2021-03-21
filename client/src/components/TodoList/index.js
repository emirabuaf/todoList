import React from "react";

const TodoList = ({ tasks }) => {
  const renderTasks = () => {
    return tasks.map((newTask) => <h1>{newTask.text}</h1>);
  };

  return <div>{renderTasks()}</div>;
};

export default TodoList;
