import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminPage = () => {
  // const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:8081/Category1/getAllProducts", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="admin-page">
      <h1 className="admin-page__title">
        Welcome, Admin!
        <div className="inventory">
          <Link to="/product">
            <InventoryIcon />
          </Link>
        </div>
      </h1>

      <p className="admin-page__subtitle">
        Here's some content that's specific to admins.
      </p>
      <div className="admin-page__user-management">
        <h2>User Management</h2>
        <table className="admin-page__table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>Buyer</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane.smith@example.com</td>
              <td>Seller</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bob Johnson</td>
              <td>bob.johnson@example.com</td>
              <td>Admin</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="admin-page__reports">
        <h2>Reports</h2>
        <ul className="admin-page__list">
          <li>Number of active users: 100</li>
          <li>Total sales: $10,000</li>
          <li>Number of items sold: 500</li>
        </ul>
      </div>
      <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdminPage;
