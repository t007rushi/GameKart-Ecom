import { createContext, useReducer, useContext } from "react";
import { FilterReducerFun } from "../reducer/FilterReducerFun";

const FilterContext = createContext(null);

const FilterContextPRovider = ({ children }) => {
  const [filterstate, dispactherforfilter] = useReducer(FilterReducerFun, {
    sortby: null,
    priceRange: null,
    category: { games: false, console: false, accesories: false },
    condition: null,
    rating: 0,
    search: "",
  });

  return (
    <FilterContext.Provider value={{ filterstate, dispactherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextPRovider, useFilter };
