// src/components/TripList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/trips");
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            {trip.origin} to {trip.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
