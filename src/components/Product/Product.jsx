/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFilter } from "../../Context/filter-context";
import { useProducts } from "../../Context/products-context";
import { SorterFun, FilterFun } from "../../sort-filter-funs";
import Card from "../Card/Card";

export default function Product() {
  const { prodArr, fetchData } = useProducts();
  const {
    filterstate: { sortby, priceRange, category, condition, rating },
  } = useFilter();

  useEffect(() => {
    fetchData();
  }, []);

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

