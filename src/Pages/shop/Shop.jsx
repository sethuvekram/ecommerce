import React from "react";

import {PRODUCTS}  from "../../Products.js";
import  Product from "./Product.jsx"

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Havcoc Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
            <Product />
        ))}
         
      </div>
    </div>
  );
};

export default Shop;
