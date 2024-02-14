// src/pages/Dashboard.js
import React from "react";
import Dashboard from "../components/Dashboard";
import UserCountWidget from "../components/DashboardWidgets/UserCountWidget";
import TripCountWidget from "../components/DashboardWidgets/TripCountWidget";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <UserCountWidget count={100} />
        </div>
        <div className="col-md-6">
          <TripCountWidget count={50} />
        </div>
      </div>

      <Dashboard />
      {/* Add more dashboard widgets as needed */}
    </div>
  );
};

export default DashboardPage;
