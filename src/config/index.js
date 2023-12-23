import axios from "axios";
import { ENDPOINT } from "../config/APIEndpoints";

const BASE_API_URL = ENDPOINT + "/api/v1";

// Util
export const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
};


export const Instance = axios.create({
  baseURL: BASE_API_URL,
});
