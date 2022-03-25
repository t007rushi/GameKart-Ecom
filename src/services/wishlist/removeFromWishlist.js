import axios from "axios";

//REMOVE/DELETE FROM WISHLIST
export const removeFromWishlistService = async (id, user) => {
  try {
    const { data } = await axios.delete(`api/user/wishlist/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("wishlist error", error);
  }
};
