import React from "react";
import { useFilter } from "../../Context/filter-context";
import { useProducts } from "../../Context/products-context";
import { SorterFun, FilterFun } from "../../sort-filter-funs";
import Card from "../Card/Card";

export default function Product() {
  const { prodArr } = useProducts();

  const {
    filterstate: { sortby, priceRange, category, condition, rating },
  } = useFilter();

  const sortedData = SorterFun([...prodArr], sortby);

  const FilterData = FilterFun(
    sortedData,
    priceRange,
    category,
    condition,
    rating
  );
  return (
    <div>
      <div className="right-side-main">
        <h1>Showing Products({FilterData.length})</h1>

        <div className="right-side">
          {FilterData.map((prod) => {
            return <Card key={prod.id} prod={prod} />;
          })}
        </div>
      </div>
    </div>
  );
}

//commented code
// import { useCart } from "../../Context/cartContext";
// import { useWishlist } from "../../Context/wishlistContext";
// const { cartDispatcher } = useCart();
// const { wishDispatcher } = useWishlist();
// fun1: wishDispatcher,
// fun2: cartDispatcher,
