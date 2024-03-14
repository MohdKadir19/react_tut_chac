import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");

  const {SetUser} =  useContext(UserContext)

  const handleSubmit = (e) => {
  e.preventDefault();
  SetUser({username, password});
  };

  return (
    <div>
      <input type="text" 
      value={username}
      onChange={(e) => Setusername(e.target.value)}
      className="type" placeholder="Username" />
      <input type="password" 
      value={password}
      onChange={(e) => Setpassword(e.target.value)}
      className="password" placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
