import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="home-intro flex-row">
      <div className="home-descr flex-col center-it">
        <h1>EXPLORE THE NEXT GEN GAMING WORLD</h1>
        <p>
          Experience thrilling, cinematic storytelling and the iconic
          franchise’s largest blockbuster action set pieces.
        </p>
        <div className="flex-row gap-btwn">
          <a href="./screens/prodListHori.html" className="undle">
            <button className="btn primary-btn bold">Learn More &gt;</button>
          </a>
          <Link to="/products" className="undle">
            <button className="btn linked-btn bold">SHOP NOW &gt;</button>
          </Link>
        </div>
      </div>
      <img src="./assets/home/Gaming-amico.png" alt="" className="home-img" />
    </div>
  );
};

export default Banner;
