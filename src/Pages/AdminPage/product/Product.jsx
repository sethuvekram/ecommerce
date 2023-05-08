import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.scss";
function Product() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8081/Category1/addProduct",
        {
          category: category,
          name: name,
          price: price,
          description: description,
        },

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Product added successfully!");
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding product");
      });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Category1/getAllProducts",
        {
          headers: {
            Authorization: "Bearer " +localStorage.getItem("token"),
            
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Select a value:</label>
        <select
          id="my-selector"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">--Please select a category--</option>
          <option value="Category1">Category1</option>

          <option value="Category2">Category2</option>
          <option value="Category3">Category3</option>
          <option value="Category4">Category4</option>
          <option value="Category5">Category5</option>
        </select>

        <br />
        <br />

        <br />
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label>Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <br />
        <br />
        <div className="btn">
          <button type="submit" id="sbtn">
            Add Product
          </button>
        </div>
      </form>

      <div className="product-list">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Price</th>

              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.category}</td>

                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
