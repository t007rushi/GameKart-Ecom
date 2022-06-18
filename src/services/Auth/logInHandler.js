import axios from "axios";
import { toast } from "react-toastify";

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
        setUser({
          tokenVal: JSON.stringify(data.encodedToken),
          isUserLoggedIn: true,
        });
        navigator("/");
        toast.success("Logged In successfully");
      }
    } catch (error) {
      console.error("Invalid email or password", error);
      toast.error("Invalid email or password");
    }
  })();
};
