import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
