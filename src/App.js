import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Footer />
              </div>
            }
          ></Route>
          <Route path="/products" ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
