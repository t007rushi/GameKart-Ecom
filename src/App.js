import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Header,
  ProductList,
} from "./pages/index.js";
import Mockman from "mockman-js"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
