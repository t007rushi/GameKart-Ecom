import React from "react";
import { Link } from "react-router-dom";
import "./category.css";
import { categoryData } from "../../data/categoryData";
import { useFilter } from "../../Context/filter-context";

const Category = () => {
  const { dispactherforfilter } = useFilter();
  return (
    <div className="flex-row center-it middle-bar">
      <h3>CATEGORIES TO EXPLORE :</h3>
      <div className="flex-row gap-btwn">
        {categoryData.map(({ id, icon, category }) => {
          return (
            <Link
              key={id}
              to="/products"
              className="flex-col center-it feat-category"
              onClick={() => dispactherforfilter({ type: category })}
            >
              <span className="material-icons expl-icon"> {icon} </span>
              <h3>{category}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
