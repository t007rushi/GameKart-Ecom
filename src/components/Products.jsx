import React from "react";
import { useFilter } from "../Context/filter-context";
import { useProducts } from "../Context/products-context";
import {SorterFun} from "../sort_filter_funs"
import FilterNav from "./FilterNav";

export default function Products() {
  const {prodArr} = useProducts();

  const {filterstate:{sortby}}  =useFilter();

  const sortedData = SorterFun([...prodArr], sortby)
  
  return ( 
    <div>
      <div className="main-content">
    <FilterNav />
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
