import React, { useEffect, useState } from "react";
import { fetchTrips } from "../api/tripApi";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTripsData = async () => {
      try {
        const tripsData = await fetchTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTripsData();
  }, []);

  return (
    <div>
      <h2>Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>{trip.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
