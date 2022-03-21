import { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [prodArr, setProdArr] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProdArr(data.products);
  };
  return (
    <ProductContext.Provider value={{ prodArr, setProdArr, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
