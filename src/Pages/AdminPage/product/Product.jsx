import React, { useState } from "react";
import axios from "axios";

function Product() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
        category: "category",
        name: "name",
        price: "price",
        description: "description",
    }
    axios
      .post("http://localhost:8081/Category1/addProduct", product,{
        headers:{
          "Authorization":"Bearer "+localStorage.getItem('token')
        }
      })
      .then((res) => {
        console.log(res.data);
        alert("Product added successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding product");
      });
  };

  return (
    <div className="product-page">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label for="my-selector">Select a value:</label>
        <select id="my-selector" name=""  
         onChange={(e) => setCategory(e.target.value)}>
          <option value="value1">Category1</option>
          <option value="value2">Category2</option>
          <option value="value3">Category3</option>
          <option value="value4">Category4</option>
          <option value="value5">Category5</option>
        </select>

        {/* <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /> */}
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Product;
