import axios from "axios"

 //REMOVE/DELETE FROM WISHLIST
export const removeFromWishlist = async (id,user,setWishlist) => {
    try {
      const { data } = await axios.delete(`api/user/wishlist/${id}`, {
        headers: {
          authorization: user.tokenVal,
        },
      });
      setWishlist(data.wishlist);
    } catch (error) {
      console.error("wishlist error", error);
    }
  };