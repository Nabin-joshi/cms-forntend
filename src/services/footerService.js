import axios from "axios";
import urls from "../urls/urls";

const footerApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addFooter = async (data) => {
  let response = await footerApi.post("/api/footer", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getFooter = async () => {
  const response = await footerApi.get("/api/footer");
  return response;
};
