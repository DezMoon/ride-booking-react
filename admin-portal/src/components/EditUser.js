import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/userService";

const EditUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userId, userData);
      setSuccess("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
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
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
