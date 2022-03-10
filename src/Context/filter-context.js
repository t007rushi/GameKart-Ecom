import { createContext, useReducer, useContext} from "react";

const FilterContext = createContext(null);


const FilterReducerFun = (state, action) => {
  switch (action.type) {
    //   Sorting
    case "LOW_TO_HIGH":
      return { ...state, sortby: "lowtohigh" };
    case "HIGH_TO_LOW":
      return { ...state, sortby: "hightolow" };
    case "NEW_ARRIVAL":
      return { ...state, sortby: "new_arive" };
    case "WITH_DISCOUNT":
      return { ...state, sortby: "highdiscount" };

    // Filtering

    //clean_up
    case "CLEAN_UP":
      return   {
            sortby: null,
            priceRange: null,
            category: null,
            conditions: null,
            user_rating: null,
            genre: null,
      }
      
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
    <FilterContext.Provider value={{filterstate, dispactherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextPRovider, useFilter };
