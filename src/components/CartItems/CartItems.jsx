import React from "react";
import { useCart } from "../../Context/cartContext";

const CartItems = () => {
  const {
    cartState: { cartArr },
    cartDispatcher,
  } = useCart();
  console.log(cartArr);
  return (
    <div className="flex-col">
      {cartArr.map((cartItem) => {
        return (
          <div key={cartItem.id} className="card card-horiz gap-btwn">
            <img className="card-img img-fit" src={cartItem.img} alt="demo" />
            <div className="card-info">
              <h5 className="card-title">{cartItem.prod_title}</h5>
              <p className="description">{cartItem.prod_desc}</p>
              <span className="card-price">
                <sup>₹</sup>
                {cartItem.price}
                <s>5,499</s>
                <span className="card-discount">Save 2,529</span>
              </span>
              <div className="flex-row center-it gap-btwn">
                <p>Quantity:</p>
                <button
                  className="cart-quant-btn"
                  onClick={() =>
                    cartDispatcher({
                      type: "DECR_QUANT",
                      payload: { id: cartItem.id },
                    })
                  }
                >
                  -
                </button>
                <div className="cart-quant-cnt">{cartItem.quantity}</div>
                <button
                  className="cart-quant-btn"
                  onClick={() =>
                    cartDispatcher({
                      type: "INCR_QUANT",
                      payload: { id: cartItem.id },
                    })
                  }
                >
                  +
                </button>
              </div>
              <button
                className="card-btn primary-btn"
                onClick={() => {
                  cartDispatcher({
                    type: "ADD_TO_WISH",
                    payload: { id: cartItem.id },
                  });
                }}
              >
                Move to Wishlist
              </button>
              <button
                className="card-btn card-icon-btn"
                onClick={() =>
                  cartDispatcher({
                    type: "RMV_FROM_CART",
                    payload: { id: cartItem.id },
                  })
                }
              >
                Remove from
                <span className="material-icons icon">shopping_cart</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
