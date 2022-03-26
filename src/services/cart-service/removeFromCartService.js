import axios from "axios";

//REMOVE/DELETE FROM Cart
export const removeFromCartService = async (id, user) => {
  try {
    const { data } = await axios.delete(`api/user/cart/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("cart error", error);
  }
};
