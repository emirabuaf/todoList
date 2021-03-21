import React from "react";
import DeleteTodo from "../DeleteTodo";

const TodoList = ({ tasks, setTasks }) => {
  const renderTasks = () => {
    return tasks.map((newTask, id) => (
      <div key={newTask.id}>
        <h1>{newTask.text}</h1>
        <DeleteTodo setTasks={setTasks} id={newTask.id} tasks={tasks} />
      </div>
    ));
  };

  return <div>{renderTasks()}</div>;
};

export default TodoList;
