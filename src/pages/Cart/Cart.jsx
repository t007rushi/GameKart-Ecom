import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { CartItems, PriceDetail } from "../../components/index";
import { useCart } from "../../Context/cart-context";
import "./cartpage.css";

const Cart = () => {
  const { cart } = useCart();
  return (
    <main className="cart-container">
      {!cart.length ? (
        <Fragment>
          <h1 className="mb">YOUR CART IS EMPTY</h1>
          <Link to="/products" className="btn primary-btn undle">
            Back to products
          </Link>
        </Fragment>
      ) : (
        <>
          <div className="flex-col cart-heading center-it gap-btwn">
            <h1 className="">My Cart items:({cart.length})</h1>
            <Link to="/products" className="btn primary-btn undle ml">
              Browse products
            </Link>
          </div>
          <section className="flex-row center-it gap-btwn cart-wrap">
            <CartItems />
            <PriceDetail />
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;
