import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getTripHistory } from "../src/api/TripApi";

const TripHistoryScreen = ({ userId }) => {
  const [tripHistory, setTripHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripHistory = async () => {
      try {
        const history = await getTripHistory(userId);
        setTripHistory(history);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trip history:", error);
        setLoading(false);
      }
    };

    fetchTripHistory();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Trip History</Text>
      <FlatList
        data={tripHistory}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>Start Location: {item.startLocation}</Text>
            <Text>End Location: {item.endLocation}</Text>
            {/* Display other trip details */}
          </View>
        )}
      />
    </View>
  );
};

export default TripHistoryScreen;
