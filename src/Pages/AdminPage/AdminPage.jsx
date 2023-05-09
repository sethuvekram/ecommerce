import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.29.234:8081/Admin/getAllUsers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      
      .then((response) => setUsers(response.data));
  }, []);
  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://192.168.29.234:8081/Admin/getUserById/${userId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
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
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="admin-page__reports">
     
      </div>
    </div>
  );
};

export default AdminPage;
