import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { logout } from "../services/authService";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Navigate to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error logging out
    }
  };

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/trips">Trips</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
