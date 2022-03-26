import axios from "axios";

//ADD TO CART
export const addToCartService = async (product, user) => {
  try {
    const { data } = await axios.post(
      "api/user/cart",
      { product },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("cart error", error);
  }
};
