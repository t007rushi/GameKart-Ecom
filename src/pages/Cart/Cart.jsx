import React from "react";
import { Link } from "react-router-dom";
import {CartItems,PriceDetail} from "../../components/index"
import { useCart } from "../../Context/cart-context";

const Cart = () => {
  const {cart} = useCart();
  return (
    <main className="cart-container">
    <h1 className="cart-heading">My Cart items:({cart.length})</h1>
    <section className="cart-wrap flex-row center-it gap-btwn">
      <CartItems />
      <PriceDetail />
      <Link to="/products">back to products</Link>
    </section>
  </main>
 
  );
};

export default Cart;
