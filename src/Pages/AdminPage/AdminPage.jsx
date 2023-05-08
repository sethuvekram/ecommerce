import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminPage = () => {
  // const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  
 
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8081/users",
  //         {
  //           headers: {
  //             Authorization: localStorage.getItem("token"),
  //             "Content-Type": "application/json",
  //           },
  //           params: {
  //             role: "admin",
  //           },
  //         }
  //       );
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/users/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      // Remove the deleted user from the list
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = async (userId) => {
    // TODO: Implement the edit user functionality
    console.log(`Editing user with ID: ${userId}`);
  };

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
              <th >User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="admin-page__reports">
        {/* <h2>Reports</h2>
        <ul className="admin-page__list">
          <li>Number of active users: 100</li>
          <li>Total sales: $10,000</li>
          <li>Number of items sold: 500</li>
        </ul> */}
      </div>
      
    </div>
  );
};

export default AdminPage;
