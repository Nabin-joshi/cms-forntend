import axios from "axios";
import urls from "../urls/urls";

const ourImpactApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addOurImpactHeading = async (data) => {
  const response = await ourImpactApi.post("/api/ourImpacts/heading", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addOurImpact = async (data) => {
  const response = await ourImpactApi.post("/api/ourImpacts/contents", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const getOurImpactHeading = async () => {
  const response = await ourImpactApi.get("/api/ourImpacts/all");
  return response;
};

export const getAllOurImpacts = async () => {
  const response = await ourImpactApi.get("/api/ourImpacts/all");
  return response;
};

export const updateOurImpact = async (data) => {
  const response = await ourImpactApi.put(`/api/ourImpacts`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteOurImpact = async (id) => {
  const response = await ourImpactApi.delete(`/api/ourImpacts/${id}`);
  return response;
};
