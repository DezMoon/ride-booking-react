// src/components/AssignDriver.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AssignDriver = () => {
  const { tripId } = useParams();
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/drivers");
        setDrivers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };

    fetchDrivers();
  }, []);

  const handleAssignDriver = async () => {
    try {
      await axios.put(`http://localhost:5000/api/trips/${tripId}/assign`, {
        driverId: selectedDriver,
      });
      alert("Driver assigned successfully");
    } catch (error) {
      console.error("Error assigning driver:", error);
      alert("Error assigning driver");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Assign Driver</h2>
      <select
        value={selectedDriver}
        onChange={(e) => setSelectedDriver(e.target.value)}
      >
        <option value="">Select Driver</option>
        {drivers.map((driver) => (
          <option key={driver._id} value={driver._id}>
            {driver.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssignDriver}>Assign Driver</button>
    </div>
  );
};

export default AssignDriver;
