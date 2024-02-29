import axios from "axios";
import urls from "../urls/urls";

const ourValuesApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addOurValuesHeading = async (data) => {
  const response = await ourValuesApi.post("/api/ourvalues/heading", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addOurValues = async (data) => {
  const response = await ourValuesApi.post("/api/ourvalues/contents", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const getOurValuesHeading = async () => {
  const response = await ourValuesApi.get("/api/ourvalues/all");
  return response;
};

export const getOurValues = async () => {
  const response = await ourValuesApi.get("/api/ourvalues/all");
  return response;
};

export const updateOurValues = async (data) => {
  const response = await ourValuesApi.put(`/api/ourvalues/`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteOurValues = async (id) => {
  const response = await ourValuesApi.delete(`/api/ourvalues/${id}`);
  return response.data;
};
