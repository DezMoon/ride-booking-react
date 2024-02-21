import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCountWidget from "./DashboardWidgets/UserCountWidget";
import TripCountWidget from "./DashboardWidgets/TripCountWidget";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [tripCount, setTripCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const usersResponse = await axios.get(
          "http://localhost:5000/api/users/count",
          config
        );
        setUserCount(usersResponse.data.count);

        const tripsResponse = await axios.get(
          "http://localhost:5000/api/trips/count",
          config
        );
        setTripCount(tripsResponse.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <UserCountWidget count={userCount} />
        </div>
        <div className="col-md-6">
          <TripCountWidget count={tripCount} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
