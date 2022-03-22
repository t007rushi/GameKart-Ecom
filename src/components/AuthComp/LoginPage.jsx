import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import "./authForm.css";

export default function LoginPage() {
  const { loginHandler } = useAuth();
  const [logUser, setLogUser] = useState({
    email: "",
    pass: "",
  });

  return (
    <div className="flex-row center-it">
      <div className="Auth-page-content flex-row center-it">
        <div className="flex-row form-wrap">
          <img src="./assets/auth/matrix.jpg" alt="" className="form-img" />
          <form
            className="flex-col center-it form-block login-block"
            onSubmit={(e) =>
              {e.preventDefault();
                loginHandler( { email: logUser.email, pass: logUser.pass })}
            }
          >
            <h2 className="form-title">LOGIN</h2>
            <label htmlFor="email" className="flex-col form-input-txt">
              UserID/Email
              <input
                type="email"
                className="form-input-box"
                placeholder="monkstar@neog.camp"
                onChange={(e) =>
                  setLogUser({ ...logUser, email: e.target.value })
                }
              />
            </label>
            <label htmlFor="password" className="flex-col form-input-txt">
              Password
              <input
                type="password"
                placeholder="Enter password"
                required
                className="form-input-box"
                onChange={(e) =>
                  setLogUser({ ...logUser, pass: e.target.value })
                }
              />
            </label>
            <div className="flex-row center-it form-mid">
              <input type="checkbox" className="acc-color" id="remember-me" />
              <h3>Remember me</h3>
              <p className="form-cond">Forgot your Password?</p>
            </div>
            <button type="submit" className="btn primary-btn">
              LOGIN
            </button>
            <button
              className="btn card-btn"
              onClick={(e) =>{e.preventDefault();
                loginHandler( {
                  email: "adarshbalika@gmail.com",
                  pass: "adarshbalika",
                })
              }}
            >
              LOGIN as GUEST
            </button>
            <Link to="/signup" className="newAcc">
              <h2>Create New Account &gt;</h2>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
