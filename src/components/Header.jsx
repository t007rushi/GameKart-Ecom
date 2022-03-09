import React from "react";

export default function Header() {
  return (
    <div>
      <>
        <header className="flex-row header-bar">
          <div className="flex-row header-left">
            <i className="material-icons header-icon"> menu </i>
            <a href="./index.html" className="hm-pg-link">
              <h1 className="flex-row web-logo">
                <span className="material-icons web-logo-icon">
                  {" "}
                  sports_esports{" "}
                </span>
                GameKart
              </h1>
            </a>
          </div>
          <div className="flex-row header-mid">
            <i className="material-icons"> search </i>
            <input
              type="text"
              placeholder="Search varierty gaming products.."
              className="search-bar"
            />
          </div>
          <a href="./screens/LoginPage.html">
            <button className="btn primary-btn">LOGIN</button>
          </a>
          <div className="flex-row header-right">
            <a href="./screens/wishlist.html">
              <div className="relative-container">
                <i className="material-icons header-icon">
                  favorite_border
                  <div className="badge top-right lrg red-clr flex-row center-it">
                    3
                  </div>
                </i>
              </div>
            </a>
            <a href="./screens/mycart.html" className="cart">
              <div className="flex-row relative-container">
                <i className="material-icons header-icon"> shopping_cart </i>
                <div className="badge top-right lrg red-clr flex-row center-it">
                  2
                </div>
              </div>
            </a>
            <i className="material-icons header-icon"> logout </i>
          </div>
        </header>
      </>
    </div>
  );
}
