import React, { memo } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = memo(({ user, setUser }) => {
  function handleRemove(index) {
    const newUser = user.filter((item, idx) => idx !== index);

    setUser(newUser);
  }

  return (
    <div className="list">
      {user?.map((u, index) => (
        <ListItem u={u} key={index} index={index} handleRemove={handleRemove} />
      ))}
    </div>
  );
});

export default List;
