import { createContext, useContext, useState } from "react";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState();

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
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
