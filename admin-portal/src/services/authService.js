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
