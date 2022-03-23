import axios from "axios";

export const getWishlist = (user, setWishlist) => {
  try {
    const { data } = axios.get("api/user/wishlist", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("wishlist error", error);
    return;
  }
};
