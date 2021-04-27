import React from "react";
import Button from "../Button/Button";

const Header = ({ addUserHandler }) => {
  return (
    <div>
      <input />
      <Button addUserHandler={addUserHandler} />
    </div>
  );
};

export default Header;
