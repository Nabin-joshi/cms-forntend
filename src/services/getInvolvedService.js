import axios from "axios";
import urls from "../urls/urls";

const getInvolvedApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
});

export const updateGetInvolvedField = async (data) => {
  const response = await getInvolvedApi.put("/api/getInvolved", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getInvolvedData = async (field) => {
  const response = await getInvolvedApi.get(`/api/getInvolved?field=${field}`);
  return response;
};
