import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "./checkout.css";
import { toast } from 'react-toastify';

export const Checkout = () => {
  const {
    cartSummaryArr: { TotalAmount },
  } = useCart();
  const { cart, EmptyCart } = useCart();
  const navigator = useNavigate();
  return (
    <div>
      <div className="flex-col gap-btwn mt">
        <h1 className="cart-head">ORDER DETAILS</h1>
        {cart.map(({ _id,prod_title, qty }) => {
          return (
            <div className="flex-row spc-btwn" key={_id}>
              <h1>{prod_title}</h1>
              <h1>{qty}</h1>
            </div>
          );
        })}

        <div className="cart-total flex-row spc-btwn">
          <p>TOTAL AMOUNT</p>
          <p>RS.{TotalAmount}</p>
        </div>
        <button
          className="btn primary-btn cart-place"
          onClick={() => {
            navigator("/order");
            EmptyCart();
            toast.success("Payment Success & Order Placed ")
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};
