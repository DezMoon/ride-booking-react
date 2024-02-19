import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    // Make a POST request to logout endpoint
    await axios.post(`${BASE_URL}/logout`);
    // Clear user authentication data from local storage
    localStorage.removeItem("accessToken");
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out:", error);
    // Handle error logging out
    throw error;
  }
};

export const isAuthenticated = () => {
  // Check if user is authenticated
  return localStorage.getItem("accessToken") !== null;
};
