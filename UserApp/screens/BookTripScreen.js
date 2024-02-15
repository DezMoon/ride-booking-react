import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { bookTrip } from "../src/api/TripApi";

const BookTripScreen = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  // Add additional form fields and state variables as needed

  const handleBookTrip = async () => {
    try {
      // Validate form input (e.g., check if startLocation and endLocation are not empty)

      // Send request to backend API to book trip
      await bookTrip({ startLocation, endLocation });

      // Display success message to user
      Alert.alert("Success", "Trip booked successfully!");

      // Clear form fields
      setStartLocation("");
      setEndLocation("");
      // Clear additional form fields as needed
    } catch (error) {
      console.error("Error booking trip:", error);
      Alert.alert("Error", "Failed to book trip. Please try again.");
    }
  };

  return (
    <View>
      <Text>Start Location:</Text>
      <TextInput
        value={startLocation}
        onChangeText={setStartLocation}
        placeholder="Enter start location"
      />
      <Text>End Location:</Text>
      <TextInput
        value={endLocation}
        onChangeText={setEndLocation}
        placeholder="Enter end location"
      />
      {/* Add additional form fields as needed */}
      <Button title="Book Trip" onPress={handleBookTrip} />
    </View>
  );
};

export default BookTripScreen;
