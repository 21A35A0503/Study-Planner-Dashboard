import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
function LoginPage({ setPage }) {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function login(e) {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      alert("Please enter username and password");
      return;
    }
    setUser({
      name,
      password,
    });
    setPage("dashboard");
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input placeholder="Username" value={name}onChange={(e) => setName(e.target.value)}/>
        <br /> <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <br />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
}
export default LoginPage;