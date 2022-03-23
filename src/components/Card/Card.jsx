import React from "react";
import { useAuth } from "../../Context/auth-context";
import { useWishlist } from "../../Context/wishlist-context";
import "./Card.css";

const Card = ({ prod }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const { user } = useAuth();
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

          <button
            className="card-btn primary-btn flex-row center-it"
            onClick={() => {}}
          >
            <span className="material-icons icon">shopping_cart</span>
            <p>Add to Cart</p>
          </button>

          {/* button2 */}

          <button className="card-btn card-icon-btn" onClick={() => {}}>
            <p>BUY NOW</p>
          </button>
        </div>
        {wishlist.find((item) => item._id === prod._id) ? (
          <i
            className="material-icons wishlist-abs bg-none cur-point"
            onClick={() => removeFromWishlist(prod._id)}
          >
            favorite
          </i>
        ) : (
          <i
            className="material-icons wishlist-abs wishlist-rmv cur-point bg-none"
            onClick={() =>
              user.isUserLoggedIn
                ? addToWishlist(prod)
                : alert("Log In to Continue")
            }
          >
            favorite
          </i>
        )}
      </div>
    </div>
  );
};

export default Card;
