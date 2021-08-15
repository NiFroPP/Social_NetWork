import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "88df7ccc-8a4e-436e-853c-c5519e0fc4ed",
  },
});

export default instance;
