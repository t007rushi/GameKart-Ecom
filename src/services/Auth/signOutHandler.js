import { toast } from "react-toastify";

export const signOutHandler = (setUser) => {
  localStorage.removeItem("token");
  setUser({ isUserLoggedIn: false });
  toast.success("Signed Out successfully");
};
