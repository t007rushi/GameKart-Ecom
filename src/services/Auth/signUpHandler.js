import axios from "axios";
import { toast } from "react-toastify";

//SIGNUP
export const signUpHandler = async (
  { first, last, email, pass },
  navigator
) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      firstName: first,
      lastName: last,
      email: email,
      password: pass,
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", data.encodedToken);
    navigator("/login");
    toast.success("Signed Up successfully, Log in first");
  } catch (error) {
    console.log(error);
    toast.error("Try again with diffrent field values");
  }
};
