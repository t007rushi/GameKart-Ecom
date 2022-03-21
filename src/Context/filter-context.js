import { createContext, useReducer, useContext } from "react";
import { CLEAN_UP, PRICERANGE, SORT } from "../constant/filterConstant";

const FilterContext = createContext(null);

const FilterReducerFun = (state, action) => {
  switch (action.type) {
    //   Sorting
    case SORT:
      return { ...state, sortby: action.payload };
    // Filtering
    case PRICERANGE:
      return { ...state, priceRange: action.payload };
    //clean_up
    case CLEAN_UP:
      return {
        sortby: null,
        priceRange: null,
        category: null,
        conditions: null,
        user_rating: null,
        genre: null,
      };

    default:
      return state;
  }
};

const FilterContextPRovider = ({ children }) => {
  const [filterstate, dispactherforfilter] = useReducer(FilterReducerFun, {
    sortby: null,
    priceRange: null,
    category: null,
    conditions: null,
    user_rating: null,
    genre: null,
  });

  return (
    <FilterContext.Provider value={{ filterstate, dispactherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextPRovider, useFilter };
