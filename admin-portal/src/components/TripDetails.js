import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/trips/${tripId}`
        );
        setTrip(response.data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTrip();
  }, [tripId]);

  return (
    <div>
      {trip && (
        <div>
          <h2>Trip Details</h2>
          <p>Origin: {trip.origin}</p>
          <p>Destination: {trip.destination}</p>
          {/* Add more trip details as needed */}
        </div>
      )}
    </div>
  );
};

export default TripDetails;
