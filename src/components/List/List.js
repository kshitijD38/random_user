import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = ({ user }) => {
  return (
    <div className="list">
      {user?.map((u, index) => (
        <ListItem u={u} key={index} />
      ))}
    </div>
  );
};

export default List;
