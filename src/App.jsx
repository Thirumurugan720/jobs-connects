import React, { useState } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Products />
      <Cart />
    </div>
  );
}

export default App;