import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService"; // Import the logout function
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/login"); // Redirect to the login page after logout
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
          <button onClick={handleLogout}>Logout</button>{" "}
          {/* Add Logout button */}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
