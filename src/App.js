import { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState("");

  const api = "https://randomuser.me/api";

  const addUserHandler = async () => {
    const data = await fetch(api, {
      method: "GET"
    });
    const dataJson = await data.json();
    setUser(dataJson.results[0]);
  };

  console.log("user is >>>>>", user);

  return (
    <div className="App">
      <button onClick={addUserHandler}>Add User</button>
      <h3>
        {user ? (
          <div>
            {user.name.title}
            {user.name.first}
            {user.name.last} <br />
            {user.email} <br />
            {user.gender}
          </div>
        ) : null}
      </h3>
    </div>
  );
}
