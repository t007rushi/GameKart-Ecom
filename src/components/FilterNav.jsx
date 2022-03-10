import React from 'react'
import filter from "../filter-data";
import { useFilter } from "../Context/filter-context";


export default function FilterNav() {
    const {dispactherforfilter} = useFilter();
  return (
    <div>
            <div className="left-side-filter flex-col">
          <div className="flex-row spc-btwn">
            <h4>Filter</h4>
            <h4 className="txt-underline" onClick={() =>dispactherforfilter({type: 'clean_up'})}>Clear</h4>
          </div>

          <div className="sort">
            <h4>SORT</h4>
            <select name="sorting" onChange={(e) => dispactherforfilter({type: e.target.value})}>
              {filter.sortArr.map((data) => {
                return <option key={data.val} value={data.val}>{data.sortby}</option>;
              })}
            </select>
          </div>
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
              onChange={(e) => dispactherforfilter({type:"priceRange",payload: e.target.value})}
            />
          </div>

          <div className="type filter-wrapper flex-col">
            <h2>Categories</h2>
            {filter.category.map((category) => {
              return (
                <div className="flex-row spac_bord">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Games">{category.catg}</label>
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
                  <label htmlFor="cond1">{rating.rating_categ}</label>
                </div>
              );
            })}
          </div>

          <div className="genre filter-wrapper flex-col">
            <h2>Genre</h2>
            {filter.genre.map((genre) => {
              return (
                <div className="check flex-row spac_bord">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="action">{genre.Genre}</label>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}
