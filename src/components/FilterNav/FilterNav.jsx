import React from "react";
import filter from "../../filter-data";
import { useFilter } from "../../Context/filter-context";
import { CLEAN_UP } from "../../constant/filterConstant";
import SelectInput from "../SelectInput/SelectInput";
import PriceRange from "../PriceRange/PriceRange";
import Input from "../Input/Input";

export default function FilterNav() {
  const { dispactherforfilter } = useFilter();
  return (
    <div>
      <div className="left-side-filter flex-col">
        <div className="flex-row spc-btwn">
          <h4>Filter</h4>
          <h4
            className="txt-underline"
            onClick={() => dispactherforfilter({ type: CLEAN_UP })}
          >
            Clear
          </h4>
        </div>

        <SelectInput />

        <PriceRange />

        <div className="type filter-wrapper flex-col">
          <h2>Categories</h2>
          {filter.category.map((categ) => {
            return (
              <div className="flex-row spac_bord">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Games">{categ.category}</label>
              </div>
            );
          })}
        </div>

        <div className="condition filter-wrapper flex-col">
          <h2>Conditions</h2>
          {filter.condition.map((condition) => {
            return (
              <div className="flex-row spac_bord">
                <input type="radio" name="cond" id="cond1" />
                <label htmlFor="cond1">{condition.cond}</label>
              </div>
            );
          })}
        </div>

        <div className="condition filter-wrapper flex-col">
          <h2>User Ratings</h2>
          {filter.user_rat.map((rating) => {
            return (
              <div className="flex-row spac_bord">
                <input type="radio" name="condn" id="cond1" />
                <label htmlFor="cond1">{rating.rating_category}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
