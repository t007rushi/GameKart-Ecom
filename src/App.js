import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Header,
  ProductList,
  LogIn,
  SignUpPage,
  Cart,
  Wishlist
} from "./pages/index.js";
import Mockman from "mockman-js";
import ProtectedRoute from "./Router/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        {/* Protected Routes */}
        <Route
          path="/cart"
          element={<ProtectedRoute ProtectedComp={<Cart />}></ProtectedRoute>}
        ></Route>
        <Route
          path="/wishlist"
          element={<ProtectedRoute ProtectedComp={<Wishlist />}></ProtectedRoute>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
