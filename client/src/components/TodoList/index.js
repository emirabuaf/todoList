import React from "react";
import DeleteTodo from "../DeleteTodo";
import "./styles.css";

const TodoList = ({ tasks, setTasks }) => {
  const renderTasks = () => {
    return tasks.map((newTask, id) => (
      <div className="todo" key={newTask.id}>
        <p>{newTask.text}</p>
        <div className="editDeleteContainer">
          <i class="fas fa-edit edit-button"></i>
          <DeleteTodo setTasks={setTasks} id={newTask.id} tasks={tasks} />
        </div>
      </div>
    ));
  };

  return <div className="todoListContainer">{renderTasks()}</div>;
};

export default TodoList;
