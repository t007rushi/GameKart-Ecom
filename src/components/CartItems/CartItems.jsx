import React from "react";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";

const CartItems = () => {
  const {
    cart,removeFromCart
  } = useCart();

  const {addToWishlist } = useWishlist();
  return (
    <div className="flex-col">
      {cart.map((cartItem) => {
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
                  onClick={() =>{}
                  }
                >
                  -
                </button>
                <div className="cart-quant-cnt">{cartItem.quantity}</div>
                <button
                  className="cart-quant-btn"
                  onClick={() =>{}
                  }
                >
                  +
                </button>
              </div>
              <button
                className="card-btn primary-btn"
                onClick={() => {addToWishlist(cartItem)
                  removeFromCart(cartItem._id)
                }}
              >
                Move to Wishlist
              </button>
              <button
                className="card-btn card-icon-btn"
                onClick={() =>{}
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
