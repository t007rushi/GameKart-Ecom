import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Context/cartContext";
import { FilterContextProvider } from "./Context/filter-context";
import { ProductProvider } from "./Context/products-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
