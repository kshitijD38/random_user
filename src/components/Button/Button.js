import React from "react";

const Button = ({ clickHandler, name }) => {
  return <button onClick={clickHandler}>{name}</button>;
};

export default Button;
