import React from "react";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-context";

const CartItems = () => {
  const { cart, removeFromCart, updateCartQuant } = useCart();
  const { user } = useAuth();
  const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();
  return (
    <div className="flex-col">
      {cart.map((cartItem) => {
        return (
          <div
            key={cartItem.id}
            className="card card-horiz gap-btwn relative-container"
          >
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
                  onClick={() => {
                    cartItem.qty === 1
                      ? removeFromCart(cartItem._id)
                      : updateCartQuant(cartItem._id, "decrement");
                  }}
                >
                  -
                </button>
                <div className="cart-quant-cnt">{cartItem.qty}</div>
                <button
                  className="cart-quant-btn"
                  onClick={() => {
                    updateCartQuant(cartItem._id, "increment");
                  }}
                >
                  +
                </button>
              </div>
              {/* <button className="card-btn primary-btn" onClick={() => {}}>
                Check Details
              </button> */}
              <br />
              <button
                className="card-btn card-icon-btn"
                onClick={() => {
                  removeFromCart(cartItem._id);
                }}
              >
                Remove from
                <span className="material-icons icon">shopping_cart</span>
              </button>
            </div>
            {wishlist.find((item) => item._id === cartItem._id) ? (
              <i
                className="material-icons wishlist-abs bg-none cur-point"
                onClick={() => removeFromWishlist(cartItem._id, user)}
              >
                favorite
              </i>
            ) : (
              <i
                className="material-icons wishlist-abs wishlist-rmv cur-point bg-none"
                onClick={() => {
                  if (user.isUserLoggedIn) {
                    addToWishlist(cartItem, user);
                  } else {
                    alert("Log In to Continue");
                    navigator("/login");
                  }
                }}
              >
                favorite
              </i>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
