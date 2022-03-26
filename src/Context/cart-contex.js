import { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import {
  getCart,
  addToCartService,
  removeFromCartService,
} from "../services";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  //GET Cart Items
  useEffect(() => {
    if (user.isUserLoggedIn) {
      (async () => {
        const data = await getCart(user);
        if (data !== undefined) {
          setCart(data.cart);
        }
      })();
    } else {
      setCart([]);
    }
  }, [user]);

  //ADD TO CART
  const addToCart = async (prod) => {
    const newWish = await addToCartService(prod, user);
    if (newWish !== undefined) {
      setCart(newWish.cart);
    }
  };

  //REMOVE From CART
  const removeFromCart = async (id) => {
    const rmvCart = await removeFromCartService(id, user);
    if (rmvCart !== undefined) {
      setCart(rmvCart.cart);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

export { useCart, CartProvider };