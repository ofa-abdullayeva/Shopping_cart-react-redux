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
      <h3>Cart Total $458</h3>
      <div className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" alt="img-1" />
        <div>
          <h4>Clean Code</h4>
          <p>Author: Robert C. Martin</p>
          <p>Price: $42.49</p>
          <p>Total: $42.49</p>
          <p>There is a total of this book in your cart.</p>
          <div className="btn-group">
              <button className="btn btn-outline-primary"> - </button> 
              <button className="btn btn-outline-primary"> Remove </button>
              <button className="btn btn-outline-primary"> + </button>
          </div>
        </div >
      </div>
    </div>
  )
};

export default Cart;
