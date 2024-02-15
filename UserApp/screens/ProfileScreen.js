import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { getUserProfile } from "../src/api/UserApi";
import { getTripHistory } from "../src/api/TripApi";

const ProfileScreen = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [tripHistory, setTripHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(userId);
        setUser(userProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(error.message || "Failed to fetch user profile");
        setLoading(false);
      }
    };

    const fetchTripHistory = async () => {
      try {
        const history = await getTripHistory(userId);
        setTripHistory(history);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trip history:", error);
        setError(error.message || "Failed to fetch trip history");
        setLoading(false);
      }
    };

    fetchUserProfile();
    fetchTripHistory();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!user) {
    return <Text style={styles.error}>User not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>{user.username}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{user.email}</Text>
      <br />
      <hr />
      <Text style={styles.label}>Trip History:</Text>
      {tripHistory.map((trip, index) => (
        <View key={index}>
          <Text>Trip {index + 1}</Text>
          <Text>Start Location: {trip.startLocation}</Text>
          <Text>End Location: {trip.endLocation}</Text>
          <Text>Status: {trip.status}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default ProfileScreen;
