import React from "react";
import { View, Text, Button } from "react-native";

const RideRequestScreen = ({ navigation }) => {
  const handleAcceptRequest = () => {
    // Logic to accept ride request
  };

  const handleDenyRequest = () => {
    // Logic to deny ride request
  };

  return (
    <View>
      <Text>User has requested a ride</Text>
      <Button title="Accept" onPress={handleAcceptRequest} />
      <Button title="Deny" onPress={handleDenyRequest} />
    </View>
  );
};

export default RideRequestScreen;
