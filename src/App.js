import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, ProductList, Cart } from "./pages/index.js";
import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
