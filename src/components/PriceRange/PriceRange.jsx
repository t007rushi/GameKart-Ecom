import React from "react";
import { PRICERANGE } from "../../constant/filterConstant";
import { useFilter } from "../../Context/filter-context";

const PriceRange = () => {
    const { dispactherforfilter } = useFilter();
  return (
    <div className="filter-wrapper flex-col">
      <label htmlFor="price">
        <h4>Price Range</h4>
      </label>
      <div className="flex-row spc-btwn">
        <h5>1000</h5>
        <h5>25000</h5>
        <h5>50000</h5>
      </div>

      <input
        type="range"
        name="price"
        className="prange"
        min="1000"
        max="50000"
        onChange={(e) =>
          dispactherforfilter({
            type: PRICERANGE,
            payload: e.target.value,
          })
        }
      />
    </div>
  );
};

export default PriceRange;
