import { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import {
  getCart,
  addToCartService,
  removeFromCartService,
  updateCartQuantService,
  cartSummaryService,
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
    const newCart = await addToCartService(prod, user);
    if (newCart !== undefined) {
      setCart(newCart.cart);
    }
  };

  //REMOVE From CART
  const removeFromCart = async (id) => {
    const rmvCart = await removeFromCartService(id, user);
    if (rmvCart !== undefined) {
      setCart(rmvCart.cart);
    }
  };

  //QUANTIY INCR/DECR
  const updateCartQuant = async (id, quantAct) => {
    const data = await updateCartQuantService(id, user, quantAct);
    if (data !== undefined) {
      setCart(data.cart);
    }
  };

  const cartSummaryArr = cartSummaryService(cart);

  const EmptyCart = () => {
    cart.forEach((cItem) => removeFromCart(cItem._id));
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuant,
        cartSummaryArr,
        EmptyCart,
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
