import React from "react";
import {FilterNav, Product} from "../../components/index.js"

export const ProductList = () => {
  return (
    <div className="main-content">
      <FilterNav />
      <Product />
    </div>
  );
};

export default ProductList;
