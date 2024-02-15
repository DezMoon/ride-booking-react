import React from "react";
import { View, Text, Button } from "react-native";

const BookingConfirmationScreen = ({ navigation }) => {
  const handleConfirmBooking = () => {
    // Logic to confirm booking
  };

  const handleCallUser = () => {
    // Logic to call user
  };

  return (
    <View>
      <Text>Booking Confirmation Screen</Text>
      <Button title="Confirm Booking" onPress={handleConfirmBooking} />
      <Button title="Call User" onPress={handleCallUser} />
    </View>
  );
};

export default BookingConfirmationScreen;
