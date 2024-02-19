import React from "react";
import "./DashboardWidgets.css";

const DashboardWidgets = ({ widgets }) => {
  return (
    <div className="dashboard-widgets">
      {widgets.map((widget, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{widget.title}</h5>
            <p className="card-text">{widget.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardWidgets;
