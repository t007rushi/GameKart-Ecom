import axios from "axios";

//UPDATE QUANTITY IN Cart
export const updateCartQuantService = async (id, user,quantAction) => {
  try {
    const { data } = await axios.post(`api/user/cart/${id}`, 
    {
        action: {
            type:  quantAction
          }
    },
    {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("cart error", error);
  }
};