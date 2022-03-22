import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authContext = createContext({});
const istoken = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isUserLoggedIn: istoken });
  const navigator = useNavigate();

  //SIGNUP
  const signupHandler = async (e, { first, last, email, pass }) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: first,
        lastName: last,
        email: email,
        password: pass,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", data.encodedToken);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };

  //LOGIN
  const loginHandler = (e, { email, pass }) => {
    e.preventDefault();
    (async () => {
      try {
        const { data, status } = await axios.post("/api/auth/login", {
          email: email,
          password: pass,
        });
        if (status === 200) {
          localStorage.setItem("token", JSON.stringify(data.encodedToken));
          setUser({ isUserLoggedIn: true });
          navigator("/");
        }
      } catch (error) {
        console.error("Invalid email or password", error);
      }
    })();
  };

  //LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser({ isUserLoggedIn: false });
    navigator("/");
  };
  return (
    <authContext.Provider
      value={{ user, setUser, signupHandler, loginHandler, logout }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
