import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Fetch live matches
export const fetchMatches = async () => {
  try {
    const response = await API.get("/matches");
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
};

// User Login API
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export default API;
