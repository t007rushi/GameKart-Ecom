import React from "react";
import { useFilter } from "../Context/filter-context";
import { useProducts } from "../Context/products-context";
import filter from "../filter-data";
import {SorterFun} from "../sort_filter_funs"

export default function Products() {
  const {prodArr} = useProducts();
  const {dispactherforfilter} = useFilter();
  const {filterstate:{sortby}}  =useFilter();

  const sortedData = SorterFun([...prodArr], sortby)
  
  return ( 
    <div>
      <div className="main-content">
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
              <h5>0</h5>
              <h5>2500</h5>
              <h5>5000</h5>
            </div>

            <input
              type="range"
              name="price"
              className="prange"
              min="0"
              max="5000"
              onChange={() => {}}
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

        <div className="right-side-main">
          <h1>Showing Products({sortedData.length})</h1>

          <div className="right-side">
            {sortedData.map((prod) => {
              return (
                
                <div  key={prod.id} className="card">
                  <img className="card-img" src={prod.img} alt="demo" />
                  <div className="card-info">
                    <h5 className="card-title">{prod.prod_title}</h5>
                    <p className="description">{prod.prod_desc}</p>
                    <div className="card-rating">
                      {prod.rating}
                      <span className="material-icons star-icon"> star </span>
                    </div>

                    <span className="card-price">
                      <sup>₹</sup>
                      {prod.price}
                      <s>2,970</s>
                      <span className="card-discount">
                       ({prod.discount}%)
                      </span>
                    </span>
                    <button className="card-btn primary-btn">BUY NOW</button>
                    <button className="card-btn card-icon-btn">
                      <span className="material-icons icon">     
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
