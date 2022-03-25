import axios from "axios";

export const getWishlist = async (user) => {
  try {
    const { data } = await axios.get("api/user/wishlist", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data
  } catch (error) {
    console.error("wishlist error", error);
    return;
  }
};
