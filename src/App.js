import { useState } from "react";
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

  console.log("user is >>>>>", user);

  return (
    <div className="App">
      <button onClick={addUserHandler}>Add User</button>
      <h3>
        {user?.map((u, index) => (
          <div key={index}>
            {u.name.title}
            {u.name.first}
            {u.name.last} <br />
            {u.email} <br />
            {u.gender}
          </div>
        ))}
      </h3>
    </div>
  );
}
