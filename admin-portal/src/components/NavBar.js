import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">User List</Link>
        </li>
        <li>
          <Link to="/trips">Trip List</Link>
        </li>
        <li>
          <Link to="/add-user">Add User</Link>
        </li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
