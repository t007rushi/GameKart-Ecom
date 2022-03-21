import { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [prodArr, setProdArr] = useState([]);
  const url = "/api/products"
  const fetchData = async () => {
    try{
    const { data } = await axios.get(url);
    setProdArr(data.products);}
    catch(error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider value={{ prodArr, setProdArr, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
