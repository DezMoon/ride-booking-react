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
    // Call logout endpoint on the backend to clear the session
    await axios.post(`${BASE_URL}/logout`);
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const isAuthenticated = () => {
  // Check if the 'access_token' cookie exists
  const cookies = document.cookie.split(";");
  const accessTokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("access_token=")
  );

  // If 'access_token' cookie exists, return true
  if (accessTokenCookie) {
    console.log("Is authenticated? true");
    return true;
  } else {
    console.log("Is authenticated? false");
    return false;
  }
};
