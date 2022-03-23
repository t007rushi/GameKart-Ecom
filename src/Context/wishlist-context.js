import { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import { getWishlist } from "../services";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  //GET WISHLIST 
  useEffect(() => {
    user.isUserLoggedIn
      ? (async () => {
          
            const  data  = await getWishlist(user,setWishlist);
            if(data !== undefined) {
              setWishlist(data)
            }
      })()
      : setWishlist([]);
  }, [user]);

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
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
