import axios from "axios";

//ADD TO WISHLIST
export const addToWishlistService = async (product, user) => {
  try {
    const { data } = await axios.post(
      "api/user/wishlist",
      { product },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("wishlist error", error);
  }
};
