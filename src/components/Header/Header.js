import React from "react";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";

const Header = ({ user, setUser, addUserHandler, search, setSearch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button>Asc</button>
      <button>Dsc</button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchInput
          user={user}
          setUser={setUser}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <Button clickHandler={addUserHandler} name={"Add User"} />
    </div>
  );
};

export default Header;
