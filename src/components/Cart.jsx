import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { removeToCart } from "../actions";

const Cart = ({ cart ,removeToCart }) => {
  const totalAmount = cart.reduce((total,item) =>(total += item.price), 
    0).toFixed(2);
  return (
    <div className="container">
      <h2>
        <Link to="/">
          Book List
        </Link>
        <span>My Cart</span>
      </h2>
      <h3>Cart Total $ {totalAmount}</h3>
      {cart.map(({id,name,price,image,author}) => {
        
        return (
          <div className="book" key={id}>
            <img src={image} alt={image} />
            <div>
              <h4>{name}</h4>
              <p>Author: {author}</p>
              <p>Price: ${price}</p>
              <p>Total: $42.49</p>
              <p>There is a total of this book in your cart.</p>
              <div className="btn-group">
                <button className="btn btn-outline-primary"> - </button>
                <button className="btn btn-outline-primary" onClick={()=>removeToCart(id)}> Remove </button>
                <button className="btn btn-outline-primary"> + </button>
              </div>
            </div >
          </div>
        )
      })}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};


export default connect(mapStateToProps,{removeToCart})(Cart);
