import axios from "axios"

//ADD TO WISHLIST
export const addToWishlist = (product,user,wishlist,setWishlist) => {
    wishlist.find((prod) => prod.id === product.id)
      ? alert("Already in wishlist")
      : 
      (async () => {
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
            setWishlist(data.wishlist);
          } catch (error) {
            console.error("wishlist error", error);
          }
        })();
  };