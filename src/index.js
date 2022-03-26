import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
import { FilterContextPRovider } from "./Context/filter-context";
import { ProductProvider } from "./Context/products-context";
import { WishlistProvider } from "./Context/wishlist-context";
import { makeServer } from "./server";
import { CartProvider } from "./Context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <FilterContextPRovider>
                <App />
              </FilterContextPRovider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
