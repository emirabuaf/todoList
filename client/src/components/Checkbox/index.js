import React from "react";
import "./styles.css";

const Checkbox = ({
  checked,
  value,
  name,
  handleCheck,
  editClicked,
  edit,
  id,
}) => {
  console.log(checked);
  return (
    <div className="checkboxContainer">
      <label className="checkbox">
        <input
          disabled={edit && id === editClicked ? "disabled" : null}
          value={value}
          name={name}
          checked={checked[id]}
          onChange={handleCheck}
          type="checkbox"
        />
        <span></span>
      </label>
    </div>
  );
};

export default Checkbox;
