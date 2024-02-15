import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://localhost:5000/api";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const { token } = await response.json();
    await AsyncStorage.setItem("token", token);
    return token;
  } catch (error) {
    throw error;
  }
};
