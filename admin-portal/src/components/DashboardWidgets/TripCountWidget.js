import React from "react";
import "./DashboardWidget.css";

const TripCountWidget = ({ count }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Trips</h5>
        <p className="card-text">{count}</p>
      </div>
    </div>
  );
};

export default TripCountWidget;
