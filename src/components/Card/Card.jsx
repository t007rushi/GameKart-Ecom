import React from "react";

const Card = ({ prod }) => {
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
            <p>Add to wishlist</p>
            <p>
              <i className="material-icons"> favorite </i>
            </p>
          </button>

          {/* button2 */}

          <button className="card-btn card-icon-btn" onClick={() => {}}>
            <span className="material-icons icon">shopping_cart</span>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
