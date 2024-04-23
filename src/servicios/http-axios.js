import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8085/",
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: true
});

export default http;
