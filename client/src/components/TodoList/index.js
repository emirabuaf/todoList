import React, { useState, useRef } from "react";
import DeleteTodo from "../DeleteTodo";
import EditTodo from "../EditTodo";
import Checkbox from "../Checkbox";
import "./styles.css";

const TodoList = ({ tasks, setTasks }) => {
  const [visible, setVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editClicked, editSetClicked] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const textInput = useRef(tasks);

  const handleMouseOver = (id) => {
    setHoveredItem(id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setVisible(false);
  };

  const handleCheck = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };

  const submitEdit = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
      e.target.blur();
      fetch(`/api/tasks/${editClicked}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: e.target.value }),
      });
    }
  };

  const handleBlur = () => {
    setEdit(false);
  };

  const renderTasks = () => {
    return tasks.map((newTask, id) => (
      <div
        onMouseEnter={() => handleMouseOver(newTask.id)}
        className={"todo " + (isChecked[newTask.id] ? " todoCompleted" : "")}
        key={newTask.id}
        onMouseLeave={handleMouseLeave}
      >
        <div className="inputAndTextContainer">
          <Checkbox
            name={newTask.id}
            value={newTask.id}
            checked={newTask.id ? isChecked : null}
            handleCheck={handleCheck}
            editClicked={editClicked}
            edit={edit}
            id={newTask.id}
          />
          {edit && newTask.id === editClicked ? (
            <input
              ref={textInput}
              onKeyDown={submitEdit}
              value={newTask.text}
              onChange={(e) => {
                newTask.text = e.target.value;
                setTasks([...tasks]);
              }}
              className="todoListInput"
              onBlur={handleBlur}
            />
          ) : (
            <p>{newTask.text}</p>
          )}
        </div>
        {visible && newTask.id === hoveredItem ? (
          <div className="editDeleteContainer">
            <EditTodo
              editSetClicked={editSetClicked}
              id={newTask.id}
              edit={edit}
              setEdit={setEdit}
              textInput={textInput}
              isChecked={isChecked}
            />
            <DeleteTodo setTasks={setTasks} id={newTask.id} tasks={tasks} />
          </div>
        ) : null}
      </div>
    ));
  };

  return <div className="todoListContainer">{renderTasks()}</div>;
};

export default TodoList;
