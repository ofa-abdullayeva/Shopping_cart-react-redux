import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container mt-3">
      <h2>
        <span>Book List</span>
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            My Cart <span className="badge text-bg-danger">0</span>
          </button>
        </Link>
      </h2>
      <div className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" alt="img-1" />
        <div>
        <h4>Clean Code</h4>
        <p>Author: Robert C. Martin</p>
        <p>Price: 42.49 $</p>
      </div>
      </div>

  
    </div>
  );
};

export default Products;
// yarn add redux react-redux react-router-dom