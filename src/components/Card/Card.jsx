import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import "./Card.css";
import { toast } from "react-toastify";

const Card = ({ prod }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();
  const { user } = useAuth();
  const navigator = useNavigate();

  let added;
  const throttle = (cb, d) => {
    if (added) return;
    added = true;
    setTimeout(() => {
      cb();
      toast.success(`${prod.prod_title} added to Cart`);
      added = false;
    }, d);
  };

  return (
    <div key={prod.id}>
      <div className="card relative-container">
        <img className="card-img" src={prod.img} alt="demo" />
        <div className="card-info">
          <h5 className="card-title">{prod.prod_title}</h5>
          <p className="description">{prod.prod_desc}</p>
          <div className="card-rating">
            {prod.rating}
            <span className="material-icons star-icon"> star </span>
          </div>
          <span className="card-price">
            <sup>₹</sup>
            {prod.price}
            <s>2,970</s>
            <span className="card-discount">({prod.discount}%)</span>
          </span>

          {/* button1 */}

          {!cart.find((item) => item._id === prod._id) ? (
            <button
              className="card-btn primary-btn flex-row center-it"
              onClick={() => {
                if (user.isUserLoggedIn) {
                  throttle(() => addToCart(prod), 1000);
                } else {
                  toast.warning("You must login first");
                }
              }}
            >
              <span className="material-icons icon">shopping_cart</span>
              <p>Add to Cart</p>
            </button>
          ) : (
            <button
              className="card-btn primary-btn flex-row center-it"
              onClick={() => navigator("/cart")}
            >
              <span className="material-icons icon">shopping_cart</span>
              <p>Go to Cart</p>
            </button>
          )}

          {/* button2 */}

          {/* <button className="card-btn card-icon-btn" onClick={() => {}}>
            <p>BUY NOW</p>
          </button> */}
        </div>
        {/* icon button */}
        {wishlist.find((item) => item._id === prod._id) ? (
          <i
            className="material-icons wishlist-abs bg-none cur-point"
            onClick={() => {
              removeFromWishlist(prod._id, user);
              toast.success(`${prod.prod_title} Removed From Wishlist`);
            }}
          >
            favorite
          </i>
        ) : (
          <i
            className="material-icons wishlist-abs wishlist-rmv cur-point bg-none"
            onClick={() => {
              if (user.isUserLoggedIn) {
                addToWishlist(prod, user);
                toast.success(`${prod.prod_title} added to Wishlist`);
              } else {
                toast.warning("You must login first");
                navigator("/login");
              }
            }}
          >
            favorite
          </i>
        )}
      </div>
    </div>
  );
};

export default Card;
