import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getUserProfile } from "../src/api/UserApi";

const ProfileScreen = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(userId);
        setUser(userProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    return <Text>User not found</Text>;
  }

  return (
    <View>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      {/* Display other user data */}
    </View>
  );
};

export default ProfileScreen;
