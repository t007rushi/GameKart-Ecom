import { createContext, useReducer, useContext } from "react";

const FilterContext = createContext(null);

const FilterReducerFun = (state, action) => {
  switch (action.type) {
    //   Sorting
    case "lowtoHigh":
      return { ...state, sortby: "ltoh" };
    case "Hightolow":
      return { ...state, sortby: "htol" };
    case "new_arrival":
      return { ...state, sortby: "new" };
    case "with_discount":
      return { ...state, sortby: "discount" };

    // Filtering
    case "priceRange":
      return { ...state, priceRange: action.payload };
    //clean_up
    case "clear":
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
