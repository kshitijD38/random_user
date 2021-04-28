import React from "react";
import Button from "../Button/Button";

const Header = ({ user, setUser, addUserHandler }) => {
  const handleSearch = (e) => {
    const filteredAppState = user.filter(
      (user) =>
        user.name.toLowerCase().includes(user.value.toLowerCase()) ||
        user.gender.toLowerCase().includes(user.value.toLowerCase()) ||
        user.email.toLowerCase().includes(user.value.toLowerCase())
    );

    setUser(filteredAppState);
  };

  return (
    <div>
      <button>Asc</button>
      <button>Dsc</button>
      <input onChange={handleSearch} />
      <Button addUserHandler={addUserHandler} />
    </div>
  );
};

export default Header;
