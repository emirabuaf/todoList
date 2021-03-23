import React from "react";

const EditTodo = ({
  editSetClicked,
  edit,
  setEdit,
  id,
  textInput,
  isChecked,
}) => {
  const handleEdit = () => {
    if (!isChecked[id]) {
      setEdit(true);
    }
    editSetClicked(id);
    if (edit) {
      textInput.current.focus();
    }
  };

  return (
    <div>
      <i
        onClick={handleEdit}
        className="fas fa-edit edit-button"
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default EditTodo;
