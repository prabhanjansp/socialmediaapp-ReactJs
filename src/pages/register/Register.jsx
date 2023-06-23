import React from "react";
import "../register/register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur suscipit delectus exercitationem. Illo consectetur
            delectus unde non placeat vel aliquid quasi vitae dolores doloribus
            eveniet, nisi modi.
          </p>
          <span>Don't you have Account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
            />
            <input type="password" name="pwd" id="pwd" placeholder="password" />
            <input type="email" name="email" id="email" placeholder="email" />
            <input type="text" name="name" id="name" placeholder="name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
