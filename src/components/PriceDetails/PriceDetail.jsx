import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import "./pricedetails.css";

const PriceDetail = () => {
  const {
    cartSummaryArr: { totalitem, Discount, TotalAmount, TotalPrice },
  } = useCart();
  const navigator = useNavigate()
  return (
    <div className="flex-col gap-btwn order-detail-wrap pos-fix">
      <h1 className="cart-head">PRICE DETAILS</h1>
      <div className="cart-items flex-row spc-btwn">
        <p>Price Items({totalitem})</p>
        <p>RS.{TotalPrice}</p>
      </div>
      <div className="cart-items flex-row spc-btwn">
        <p>Discount</p>
        <p>-RS.{Discount}</p>
      </div>
      <div className="cart-items flex-row spc-btwn">
        <p>Delivery charges</p>
        <p>FREE</p>
      </div>
      <div className="cart-total flex-row spc-btwn">
        <p>TOTAL AMOUNT</p>
        <p>RS.{TotalAmount}</p>
      </div>
      <p className="cart-save">You Will save 1999 on this order</p>
      <button className="btn primary-btn cart-place" onClick={() => navigator("/checkout")}>Checkout</button>
    </div>
  );
};

export default PriceDetail;
