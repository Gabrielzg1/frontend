import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2020",
});

export const login = async (email, password, type) => {
  return api.post(`/${type}/login`, { email, password });
};
export const getUsers = async () => {
  return api.get("/users");
};
