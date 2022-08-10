import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top">
          <div className="container header">
            <img
              src="https://miro.medium.com/max/600/1*CiYzhVhFjqI6QH72xETY1A.jpeg"
              alt="react redux"
            />
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
