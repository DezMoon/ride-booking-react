import axios from "axios";
import NetworkError from "./NetworkError";
import ServerError from "./ServerError";
import ValidationError from "./ValidationError";

const BASE_URL = "http://localhost:5000/api";

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server error
      if (error.response.status >= 500) {
        return <ServerError />;
      }
      // Validation error
      if (error.response.status === 400) {
        return <ValidationError errors={error.response.data.errors} />;
      }
    } else if (error.request) {
      // Network error
      return <NetworkError />;
    } else {
      // Other errors
      console.error("Error:", error.message);
      return null;
    }
  }
};
