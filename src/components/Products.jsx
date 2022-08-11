import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions";

const Products = ({ bookList, cart, addToCart }) => {
  
  return (
    <div className="container mt-3">
      <h2>
        <span>Book List</span>
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            My Cart <span className="badge text-bg-danger">{cart.length}</span>
          </button>
        </Link>
      </h2>
      {bookList.map((book)=> {
       const {id,name,price,author,image} = book
        return (
          <div className="book" key={id} >
            <img src={image}alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Author: {author}</p>
              <p>Price: {price}</p>
              <button className="btn btn-success" onClick={() =>addToCart(book)}>Add to cart</button>
            </div>
          </div>
        )
      })}


    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,

  }
}


export default connect(mapStateToProps ,{addToCart})(Products);
// yarn add redux react-redux react-router-dom