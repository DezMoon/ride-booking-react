import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    console.log();
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
