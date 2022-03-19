import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div>
      <>
        <header className="flex-row header-bar">
          <div className="flex-row header-left">
            <i className="material-icons header-icon"> menu </i>
            <Link to="/" className="hm-pg-link">
              <h1 className="flex-row web-logo">
                <span className="material-icons web-logo-icon">
                  sports_esports
                </span>
                GameKart
              </h1>
            </Link>
          </div>
          <div className="flex-row header-mid">
            <i className="material-icons"> search </i>
            <input
              type="text"
              placeholder="Search varierty gaming products.."
              className="search-bar"
            />
          </div>
          <Link to="/login">
            <button className="btn primary-btn">LOGIN</button>
          </Link>
          <div className="flex-row header-right">
            <Link to="/wishlist">
              <div className="relative-container">
                <i className="material-icons header-icon">
                  favorite_border
                  <div className="badge top-right lrg red-clr flex-row center-it">
                    3
                  </div>
                </i>
              </div>
            </Link>
            <Link to="/cart" className="cart">
              <div className="flex-row relative-container">
                <i className="material-icons header-icon"> shopping_cart </i>
                <div className="badge top-right lrg red-clr flex-row center-it">
                 2
                </div>
              </div>
            </Link>
            <i className="material-icons header-icon"> logout </i>
          </div>
        </header>
      </>
    </div>
  );
}
