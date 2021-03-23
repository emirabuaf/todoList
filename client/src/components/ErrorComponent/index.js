import React from "react";
import "./styles.css";
const Error = () => {
  return (
    <div className="errorContainer">
      <i className="fa fa-warning" style={{ color: "#a94442" }}></i>
      <p className="errorMessage">Please enter a value!</p>
    </div>
  );
};

export default Error;
