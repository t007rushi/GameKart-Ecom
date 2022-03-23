import axios from "axios";

//LOGIN
export const logInHandler = ({ email, pass }, setUser, navigator) => {
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
