import axios from "axios";

const api = axios.create({
  baseURL: "https://699126956279728b0153e75c.mockapi.io/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;



