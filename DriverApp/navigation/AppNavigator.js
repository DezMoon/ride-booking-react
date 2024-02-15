// DriverApp/navigation/AppNavigator.js
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MapsScreen from "../screens/MapsScreen";
import BookingConfirmationScreen from "../screens/BookingConfirmationScreen";
import ChatScreen from "../screens/ChatScreen";
import TripHistoryScreen from "../screens/TripHistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen"; // Add this line

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen
          name="BookingConfirmation"
          component={BookingConfirmationScreen}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="TripHistory" component={TripHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> // Add this
        line
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
