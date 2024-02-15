const BASE_URL = "http://localhost:5000/api"; // Update with your backend URL

export const getTripHistory = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/trips/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch trip history");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Failed to fetch trip history");
  }
};
