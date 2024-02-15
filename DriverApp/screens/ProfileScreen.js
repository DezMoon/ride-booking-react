import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Logic to logout
    navigation.navigate("Home"); // Redirect to Home screen after logout
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
