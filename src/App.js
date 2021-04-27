import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState([]);

  const api = "https://randomuser.me/api";

  const addUserHandler = async () => {
    const data = await fetch(api, {
      method: "GET"
    });
    const dataJson = await data.json();
    setUser([...user, dataJson.results[0]]);
  };

  return (
    <div className="app">
      <Header addUserHandler={addUserHandler} />
      <List user={user} />
    </div>
  );
}
