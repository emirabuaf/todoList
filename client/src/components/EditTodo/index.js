import React, { useState } from "react";

const EditTodo = ({ setClicked, setEdit, id }) => {
  const handleEdit = () => {
    setEdit(true);
    console.log(id);
    setClicked(id);
  };

  return (
    <div>
      <i onClick={handleEdit} className="fas fa-edit edit-button"></i>
    </div>
  );
};

export default EditTodo;
