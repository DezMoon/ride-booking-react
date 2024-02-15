import { BASE_URL } from "./config";

export const getAllTrips = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trips`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch trips");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch trips");
  }
};
