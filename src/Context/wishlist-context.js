import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  const loadWishlist = async () => {
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
  };

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist, loadWishlist }}>
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
