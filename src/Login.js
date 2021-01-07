import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-700x394.png"
        alt="Logo"
      />
      <form>
        <input placeholder="Name (required)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <button>Sign In</button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
