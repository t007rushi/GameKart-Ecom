import React, { useEffect } from "react";
import { useFilter } from "../../Context/filter-context";
import { useProducts } from "../../Context/products-context";
import { SorterFun, FilterFun } from "../../sort-filter-funs";
import Card from "../Card/Card";

export default function Product() {
  const { prodArr, fetchData } = useProducts();
  useEffect(() => fetchData(), []);
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
        <h1>Showing Products({FilterData.length})</h1>

        <div className="right-side">
          {FilterData.map((prod) => {
            return <Card key={prod.id} prod={prod} />;
          })}
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
