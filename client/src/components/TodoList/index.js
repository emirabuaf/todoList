import React, { useState } from "react";
import DeleteTodo from "../DeleteTodo";
import EditTodo from "../EditTodo";
import "./styles.css";

const TodoList = ({ tasks, setTasks }) => {
  const [visible, setVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [edit, setEdit] = useState(false);
  const [clicked, setClicked] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredItem(id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    setClicked(null);
  };

  const renderTasks = () => {
    return tasks.map((newTask, id) => (
      <div
        onMouseEnter={() => handleMouseOver(newTask.id)}
        className="todo"
        key={newTask.id}
        onMouseLeave={handleMouseLeave}
      >
        {edit && newTask.id == clicked ? (
          <input className="todoListInput" />
        ) : (
          <p>{newTask.text}</p>
        )}
        {visible && newTask.id == hoveredItem ? (
          <div className="editDeleteContainer">
            <EditTodo
              setClicked={setClicked}
              id={newTask.id}
              edit={edit}
              setEdit={setEdit}
            />
            <DeleteTodo setTasks={setTasks} id={newTask.id} tasks={tasks} />
          </div>
        ) : null}
      </div>
    ));
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="todoListContainer">
      {renderTasks()}
    </div>
  );
};

export default TodoList;
