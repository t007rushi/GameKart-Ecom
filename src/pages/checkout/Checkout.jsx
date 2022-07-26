import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "./checkout.css";
import { toast } from "react-toastify";

export const Checkout = () => {
  const {
    cartSummaryArr: { TotalAmount },
  } = useCart();
  const { cart, EmptyCart } = useCart();
  const navigator = useNavigate();
  return (
    <div>
      <div className="flex-col gap-btwn checkout-wrap">
        <h3>Address for shipment : </h3>
        <label htmlFor="address" className="flex-row gap-btwn addr-wrap">
          <input type="radio" name="address" defaultChecked="true" />
          <div className="flex-col gap-btwn">
            <p>Plot no.3, Sambhaji Chowk, Chatrapati Nagar, Gate No.16</p>
            <p>
              Pincode : <b>412434</b>
            </p>
            <p>
              City : <b>Pune</b>
            </p>
            <p>
              State :<b>Maharashtra</b>
            </p>
          </div>
        </label>
        <h1 className="cart-head">ORDER DETAILS</h1>
        {cart.map(({ _id, prod_title, qty }) => {
          return (
            <div className="flex-row spc-btwn" key={_id}>
              <p>{prod_title}</p>
              <p>{qty}</p>
            </div>
          );
        })}

        <div className="cart-total flex-row spc-btwn">
          <p>TOTAL AMOUNT</p>
          <p>RS.{TotalAmount}</p>
        </div>
        <div className="flex-row gap-btwn">
          {" "}
          <Link to="/cart" className="btn primary-btn undle cart-place-gb">
            Go Back
          </Link>
          <button
            className="btn primary-btn cart-place"
            onClick={() => {
              navigator("/order");
              EmptyCart();
              toast.success("Payment Success & Order Placed ");
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
