import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useEffect } from "react";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  //GET WISHLIST
  useEffect(() => {
    user.isUserLoggedIn
      ? (async () => {
          try {
            const { data } = await axios.get("api/user/wishlist", {
              headers: {
                authorization: user.tokenVal,
              },
            });
            setWishlist(data.wishlist);
          } catch (error) {
            console.error("wishlist error", error);
          }
        })()
      : setWishlist([]);
  }, [user]);

  //ADD to the wishlist
  const addToWishlist = (product) => {
    wishlist.find((prod) => prod.id === product.id)
      ? alert("Already in wishlist")
      : (async () => {
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

  //delete from wishlist
  const removeFromWishlist = async (id) => {
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

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(wishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used inside wishlistProvider");
  }
  return context;
};

export { useWishlist, WishlistProvider };
