import React from "react";
import "../login/login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {  login();};

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur suscipit delectus exercitationem. Illo consectetur
            delectus unde non placeat vel aliquid quasi vitae dolores doloribus
            eveniet, nisi modi.
          </p>
          <span>Don't you have Account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="Username" />
            <input type="password" name="" id="" placeholder="password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
