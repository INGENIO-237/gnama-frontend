import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const server = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default server;
