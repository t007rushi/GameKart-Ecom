import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FilterContextPRovider } from './Context/filter-context';
import { ProductProvider } from './Context/products-context';
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContextPRovider>
    <App />
    </FilterContextPRovider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


