import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Header,
  ProductList,
  LogIn,
  SignUpPage,
  Cart,
  Wishlist,
  Checkout,
  PlaceOrder,
} from "./pages/index.js";
import Mockman from "mockman-js";
import ProtectedRoute from "./Router/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/order" element={<PlaceOrder />}></Route>
        {/* Protected Routes */}
        <Route
          path="/cart"
          element={<ProtectedRoute ProtectedComp={<Cart />}></ProtectedRoute>}
        ></Route>
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute ProtectedComp={<Wishlist />}></ProtectedRoute>
          }
        ></Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
