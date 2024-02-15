import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../../src/api/authApi";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      await AsyncStorage.setItem("token", token);
      navigation.navigate("Home"); // Navigate to home screen after successful login
    } catch (error) {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
