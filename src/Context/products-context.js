import data from "../data";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null)

const ProductProvider = ({children}) =>{
    const [prodArr,updateProdArr] = useState(data);
    return(
        <ProductContext.Provider value={{prodArr,updateProdArr}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext)

export {ProductProvider,useProducts}