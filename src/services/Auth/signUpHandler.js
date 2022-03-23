import axios from "axios";

//SIGNUP
export const signUpHandler = async ({ first, last, email, pass },navigator) => {
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
