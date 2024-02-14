import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
