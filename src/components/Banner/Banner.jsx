import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="home-intro flex-row banner-container">
      <div className="home-descr flex-col  banner-card">
        <h1>EXPLORE THE NEXT GEN</h1>
        <h1> GAMING WORLD</h1>
        <p>
          Experience thrilling, cinematic storytelling and the iconic
          franchise’s largest blockbuster action set pieces.
        </p>
        <div className="flex-row gap-btwn">
          <a href="./screens/prodListHori.html" className="undle">
            <button className="btn primary-btn bold banner-btn">
              Learn More &gt;
            </button>
          </a>
          <Link to="/products" className="undle">
            <button className="btn linked-btn bold banner-btn">
              SHOP NOW &gt;
            </button>
          </Link>
        </div>
      </div>
      <img
        src="./assets/home/Gaming-amico.png"
        alt=""
        className="home-img banner-img"
      />
    </div>
  );
};

export default Banner;
