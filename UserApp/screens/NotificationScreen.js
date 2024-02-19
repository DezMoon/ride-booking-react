import React, { useEffect } from "react";
import { View, Text } from "react-native";
import PushNotification from "react-native-push-notification";

const NotificationScreen = () => {
  useEffect(() => {
    // Initialize push notification handler
    PushNotification.configure({
      // Handle notification received event
      onNotification: function (notification) {
        // Display the notification message
        console.log("Notification received:", notification.message);
      },
    });

    return () => {
      // Cleanup on unmount
      PushNotification.unregister();
    };
  }, []);

  return (
    <View>
      <Text>Notification Screen</Text>
      {/* Add UI components to display notifications */}
    </View>
  );
};

export default NotificationScreen;
