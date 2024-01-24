import axios from "axios";
import urls from "../urls/urls";

const api = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  let response;

  try {
    response = await api.post("/api/auth/login", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const saveContent = async (data) => {
  try {
    await api.put("/api/blog/update/65ad742140933d0ccc3563e8", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getContent = async () => {
  let response;
  try {
    response = await api.get("/api/blog/65ad742140933d0ccc3563e8");
  } catch (error) {
    console.log(error);
  }
  return response;
};
