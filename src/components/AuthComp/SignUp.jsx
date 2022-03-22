import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

export default function SignUp() {
  const { signupHandler } = useAuth();
  const [signUser, setSignUser] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
  });

  return (
    <div className="flex-row center-it">
      <div className="Auth-page-content flex-row center-it">
        <div className="flex-row form-wrap">
          <img src="./assets/auth/matrix.jpg" alt="" className="form-img" />
          <form
            className="flex-col center-it form-block"
            onSubmit={(e) => {
              e.preventDefault();
              signupHandler({
                first: signUser.first,
                last: signUser.last,
                email: signUser.email,
                pass: signUser.pass,
              });
            }}
          >
            <h2 className="form-title">SIGN UP</h2>
            <label htmlFor="Name" className="flex-col form-input-txt">
              First Name
              <input
                type="text"
                className="form-input-box"
                onChange={(e) =>
                  setSignUser({ ...signUser, first: e.target.value })
                }
              />
            </label>
            <label htmlFor="Name" className="flex-col form-input-txt">
              Last Name
              <input
                type="text"
                className="form-input-box"
                onChange={(e) =>
                  setSignUser({ ...signUser, last: e.target.value })
                }
              />
            </label>
            <label htmlFor="email" className="flex-col form-input-txt">
              Email
              <input
                type="email"
                className="form-input-box"
                placeholder="monstar@neog.camp"
                onChange={(e) =>
                  setSignUser({ ...signUser, email: e.target.value })
                }
              />
            </label>
            <label
              htmlFor="password"
              required
              className="flex-col form-input-txt"
            >
              Password
              <input
                type="password"
                className="form-input-box"
                onChange={(e) =>
                  setSignUser({ ...signUser, pass: e.target.value })
                }
              />
            </label>
            <div className="flex-row center-it form-mid">
              <input type="checkbox" className="acc-color" id="remember-me" />
              <p className="form-text">
                By continuing, you agree to Swift-UI
                <span className="form-cond">Terms of Use </span> and
                <span className="form-cond">Privacy Policy</span>
              </p>
            </div>
            <button className="btn primary-btn">SIGN-UP</button>
            <div className="flex-row">
              <p>Already have an account?</p>
              <Link to="/login" className="form-cond">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
