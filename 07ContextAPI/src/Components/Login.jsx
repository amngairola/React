import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  //sending data using context API or props driling
  const { setUser } = useContext(UserContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>submit</button>
    </div>
  );
}

export default Login;
