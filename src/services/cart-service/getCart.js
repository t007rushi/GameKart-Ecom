import axios from "axios";

export const getCart = async (user) => {
  try {
    const { data } = await axios.get("api/user/cart", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("cart error", error);
    return;
  }
};
