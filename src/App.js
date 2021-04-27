import { useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState([]);
  const [user1, setUser2] = useState([]);

  const api = "https://randomuser.me/api";

  const addUserHandler = async () => {
    const data = await fetch(api, {
      method: "GET"
    });
    const dataJson = await data.json();
    setUser([...user, dataJson.results[0]]);
  };

  const ascArray = [...user];
  ascArray.sort((a, b) => {
    if (a.name.first > b.name.first) {
      return 1;
    } else {
      return -1;
    }
  });

  // console.log("user is >>>>>", user);

  return (
    <div className="App">
      <button onClick={addUserHandler}>Add User</button>
      <button>Asc</button>
      <div>
        {user ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: 1
            }}
          >
            {user?.map((i, index) => (
              <div key={index}>
                <span>
                  <div>
                    {i.name.title} {i.name.first} {i.name.last} {i.gender}{" "}
                    {i.email}{" "}
                  </div>
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
