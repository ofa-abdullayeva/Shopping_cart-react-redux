import React from "react";

import { Link } from "react-router-dom"

const Cart = () => {
  return (
  <div className="container">
    <h2>
      <Link to="/">
      Book List
      </Link>
      <span>My Cart</span>
    </h2>
  </div>
  )
};

export default Cart;
