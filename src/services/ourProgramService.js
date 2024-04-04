import axios from "axios";
import urls from "../urls/urls";

const ourProgramApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
});

export const updateOurProgramField = async (data) => {
  const response = await ourProgramApi.put("/api/ourProgram", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getOurProgramData = async (field) => {
  const response = await ourProgramApi.get(`/api/ourProgram?field=${field}`);
  return response;
};
