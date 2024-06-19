import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const fetchData = async (type) => {
  try {
    const response = await axios.get(`${API_URL}/api/data/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { API_URL };
