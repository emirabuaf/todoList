import React from "react";

const AddTodo = ({ addTodo }) => {
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
