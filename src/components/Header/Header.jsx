import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import "./Header.css";
import { signOutHandler } from "../../services";
import { useWishlist } from "../../Context/wishlist-context";
import { useCart } from "../../Context/cart-context";
import { useFilter } from "../../Context/filter-context";
import { SEARCH } from "../../constant/filterConstant";

export default function Header() {
  const { user, setUser } = useAuth();
  const { pathname } = useLocation();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { dispactherforfilter } = useFilter();
  const navigator = useNavigate();
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <>
        <header className="flex-row header-bar">
          <div className="flex-row header-left">
            {/* {pathname === "/products" && (
              <i className="material-icons header-icon"> menu </i>
            )} */}
            <NavLink to="/" className="hm-pg-link">
              <h1 className="flex-row web-logo">
                <span className="material-icons web-logo-icon">
                  sports_esports
                </span>
                <span className="site-name">GameKart</span>
              </h1>
            </NavLink>
          </div>
          <div className="flex-row header-mid">
            <i className="material-icons"> search </i>
            <input
              type="text"
              placeholder="Search varierty gaming products.."
              className="search-bar"
              onChange={(e) => {
                dispactherforfilter({ type: SEARCH, payload: e.target.value });
              }}
              onClick={() => navigator("/products")}
            />
          </div>

          <div className="flex-row header-right">
            <NavLink to="/wishlist" style={NavLinkStyles}>
              <div className="relative-container">
                <i className="material-icons header-icon">
                  favorite_border
                  {user.isUserLoggedIn && wishlist.length? (
                    <div className="badge top-right lrg red-clr flex-row center-it">
                      {wishlist.length}
                    </div>
                  ) : null}
                </i>
              </div>
            </NavLink>
            <NavLink to="/cart" style={NavLinkStyles} className="cart">
              <div className="flex-row relative-container">
                <i className="material-icons header-icon"> shopping_cart </i>
                {user.isUserLoggedIn && cart.length ? (
                  <div className="badge top-right lrg red-clr flex-row center-it">
                    {cart.length}
                  </div>
                ) : null}
              </div>
            </NavLink>
            {user.isUserLoggedIn ? (
              <i
                className="material-icons header-icon lg-out"
                onClick={() => signOutHandler(setUser)}
              >
                logout
              </i>
            ) : (
              <>
                <NavLink to="/login" style={NavLinkStyles} className="login-icon">
                  <i className="material-icons header-icon hidden-screen-size">
                    login  
                  </i>
                </NavLink>
                {!user.isUserLoggedIn &&
                !(pathname === "/login") &&
                !(pathname === "/signup") && (
                  <NavLink to="/login" style={NavLinkStyles}>
                    <button className="btn primary-btn hide-screen-size">
                      LOGIN
                    </button>
                  </NavLink>
                ) }
              </>
            )}
          </div>
        </header>
      </>
    </div>
  );
}
