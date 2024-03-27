import axios from "axios";
import urls from "../urls/urls";

const resourcesApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
});

export const updateResourcesField = async (data) => {
  const response = await resourcesApi.put("/api/resources", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getResourcesData = async (field) => {
  const response = await resourcesApi.get(`/api/resources?field=${field}`);
  return response;
};
