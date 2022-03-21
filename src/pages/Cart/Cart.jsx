import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartItems, PriceDetail } from "../../components/index.js";
import { useCart } from "../../Context/cartContext.js";

const Cart = () => {
  const {
    cartState: { cartArr },
  } = useCart();
  return (
    <div>
      <main className="cart-container">
        <h1 className="cart-heading">
          My Cart items:({cartArr.length})
          <Link to="/products" className="cart-pg">
            Back to Products Page
          </Link>
        </h1>
        <h4> </h4>
        <section className="cart-wrap flex-row center-it gap-btwn">
          <CartItems />
          <PriceDetail />
        </section>
      </main>
    </div>
  );
};

export default Cart;
