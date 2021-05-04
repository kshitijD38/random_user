import { Profiler, useEffect, useState } from "react";
// memoizing(caching) => memoised component follows strict react rules(has the value changed or not)
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const api = "https://randomuser.me/api";

  useEffect(() => {}, []);

  const addUserHandler = async (e) => {
    const data = await fetch(api, {
      method: "GET"
    });
    const dataJson = await data.json();
    const newUser = [...user, dataJson.results[0]];
    setUser(newUser);
  };

  const filteredAppState = user.filter(
    (user) =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.name.last.toLowerCase().includes(search.toLowerCase()) ||
      user.gender.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header
        user={user}
        setUser={setUser}
        addUserHandler={addUserHandler}
        search={search}
        setSearch={setSearch}
      />
      {/* <Profiler
        id="userList"
        onRender={(id, phase, actualDuration) =>
          console.log({ id, phase, actualDuration })
        }
      >  
        <List user={filteredAppState} setUser={setUser} />
      </Profiler> */}
      <List user={filteredAppState} setUser={setUser} />
    </div>
  );
}
