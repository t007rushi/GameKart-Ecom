import React from "react";
import "./filternav.css"
import { useFilter } from "../../Context/filter-context";
import { CLEAN_UP } from "../../constant/filterConstant";
import { categorydata, user_rating, conditions } from "../../filter-data";
import { SelectInput, Input, PriceRange } from "../index";

export default function FilterNav() {
  const { dispactherforfilter,filterstate: { category, rating, condition } } = useFilter();
  return (
    <div>
      <div className="left-side-filter flex-col">
        <div className="flex-row spc-btwn">
          <h4>Filter</h4>
          <h4
            className="txt-underline cur-point"
            onClick={() => dispactherforfilter({ type: CLEAN_UP })}
          >
            Clear
          </h4>
        </div>

        <SelectInput />

        <PriceRange />

        <div className="type">
          <h2>Categories</h2>
          <Input inputs={{data:categorydata,tocheck:category}} />
        </div>

        <div className="condition">
          <h2>Conditions</h2>
          <Input inputs={{data:conditions,tocheck:condition}}/>
        </div>

        <div className="condition">
          <h2>User Ratings</h2>
          <Input inputs={{data:user_rating,tocheck:rating}} />
        </div>
      </div>
    </div>
  );
}
