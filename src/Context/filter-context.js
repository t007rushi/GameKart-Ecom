import { createContext, useReducer, useContext } from "react";
import {
  CLEAN_UP,
  CONDITION,
  PRICERANGE,
  RATING,
  SORT,
} from "../constant/filterConstant";

const FilterContext = createContext(null);

const FilterReducerFun = (state, action) => {
  switch (action.type) {
    //   Sorting
    case SORT:
      return { ...state, sortby: action.payload };
    // Filtering
    case PRICERANGE:
      return { ...state, priceRange: action.payload };
    //Category Filtering
    case "GAMES":
      return {
        ...state,
        category: { ...state.category, games: !state.category.games },
      };
    case "CONSOLE":
      return {
        ...state,
        category: { ...state.category, console: !state.category.console },
      };
    case "ACCESORIES":
      return {
        ...state,
        category: { ...state.category, accesories: !state.category.accesories },
      };
    //radio
    case CONDITION:
      return { ...state, condition: action.payload };
    case RATING:
      return { ...state, rating: action.payload };
    //clean_up
    case CLEAN_UP:
      return {
        sortby: null,
        priceRange: null,
        category: { games: false, console: false, accesories: false },
        condition: null,
        rating: 0,
      };

    default:
      return state;
  }
};

const FilterContextProvider = ({ children }) => {
  const [filterstate, dispactherforfilter] = useReducer(FilterReducerFun, {
    sortby: null,
    priceRange: null,
    category: { games: false, console: false, accesories: false },
    condition: null,
    rating: 0,
  });

  return (
    <FilterContext.Provider value={{ filterstate, dispactherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextProvider, useFilter };
