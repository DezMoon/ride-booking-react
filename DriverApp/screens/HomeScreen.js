// DriverApp/screens/HomeScreen.js
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { registerForPushNotificationsAsync } from "../NotificationService";

const HomeScreen = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View>
      <Text>Driver Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
