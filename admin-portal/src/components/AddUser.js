// src/components/AddUser.js
import React, { useState } from "react";
import { registerUser } from "../services/userService";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUser = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(userData);
      console.log("User registered successfully:", newUser);
      setSuccess("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add User</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            name="role"
            value={userData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="driver">Driver</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddUser;
