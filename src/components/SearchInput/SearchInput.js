import React, { useState } from "react";
import Button from "../Button/Button";

const SearchInput = ({ user, setUser, search, setSearch }) => {
  return (
    <input
      name="search"
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        textAlign: "center",
        height: 30,
        borderRadius: 10,
        outline: "none",
        border: "none"
      }}
    />
  );
};

export default SearchInput;
