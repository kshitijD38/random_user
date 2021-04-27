import React from "react";
import Button from "../Button/Button";

const Header = ({ addUserHandler }) => {
  return (
    <div>
      <button>Asc</button>
      <button>Dsc</button>
      <input />
      <Button addUserHandler={addUserHandler} />
    </div>
  );
};

export default Header;
