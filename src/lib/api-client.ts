import Axios from "axios";
import Cookies from "universal-cookie";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const cookies = new Cookies();

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("access_token")}`,
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.error(message);

    return Promise.reject(error);
  }
);
