import { createContext, useContext, useReducer } from "react";
import { useProducts } from "./products-context";

const cartContext = createContext({ items: 0 });

const CartProvider = ({ children }) => {
  const { prodArr } = useProducts();

  //REDUCER STARTS
  const ReducerFun = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          cartArr: [
            ...state.cartArr,
            prodArr.find((item) => item.id === action.payload.id),
          ],
        };
      case "RMV_FROM_CART":
        return {
          cartArr: state.cartArr.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      case "INCR_QUANT":
        return {
          cartArr: state.cartArr.map((prod) =>
            prod.id === action.payload.id
              ? { ...prod, quantity: prod.quantity + 1 }
              : prod
          ),
        };
      case "DECR_QUANT":
        return {
          cartArr:
            state.cartArr.find((item) => item.id === action.payload.id)
              .quantity === 1
              ? state.cartArr.filter((item) => item.id !== action.payload.id)
              : state.cartArr.map((prod) =>
                  prod.id === action.payload.id
                    ? { ...prod, quantity: prod.quantity - 1 }
                    : prod
                ),
        };
      default:
        return state;
    }
  };
  const [cartState, cartDispatcher] = useReducer(ReducerFun, { cartArr: [] });

  return (
    <cartContext.Provider
      value={{
        cartState,
        cartDispatcher,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
