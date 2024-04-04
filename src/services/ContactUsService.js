import axios from "axios";
import urls from "../urls/urls";

const contactUsApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
});

export const updateContactUsField = async (data) => {
  const response = await contactUsApi.put("/api/contactUs", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getContactUsData = async (field = "") => {
  const response = await contactUsApi.get(`/api/contactUs?field=${field}`);
  return response;
};

export const createGetInTouch = async (data) => {
  const response = await contactUsApi.post(`/api/contactUs/getInTouch`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getGetInTouch = async () => {
  const response = await contactUsApi.get("/api/contactUs/getInTouch");
  return response;
};
