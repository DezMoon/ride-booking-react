import React, { useState } from "react";
import { deleteUser } from "../services/userService";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteUser(userId);
      setSuccess("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="User ID"
            value={userId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete User
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;
