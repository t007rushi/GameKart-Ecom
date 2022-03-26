import React from "react";
import { useCart } from "../../Context/cart-context";
import "./pricedetails.css"

const PriceDetail = () => {
    const { TotalPrice } = useCart();
  return (
    <div className="flex-col gap-btwn order-detail-wrap pos-fix">
      <h1 className="cart-head">PRICE DETAILS</h1>
      <div className="cart-items flex-row spc-btwn">
        <p>Price Items(2)</p>
        <p>RS.{TotalPrice}</p>
      </div>
      <div className="cart-items flex-row spc-btwn">
        <p>Discount</p>
        <p>-RS.1999</p>
      </div>
      <div className="cart-items flex-row spc-btwn">
        <p>Delivery charges</p>
        <p>RS.99</p>
      </div>
      <div className="cart-total flex-row spc-btwn">
        <p>TOTAL AMOUNT</p>
        <p>RS.3099</p>
      </div>
      <p className="cart-save">You Will save 1999 on this order</p>
      <button className="btn primary-btn cart-place">Place order</button>
    </div>
  );
};

export default PriceDetail;
