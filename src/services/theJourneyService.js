import axios from "axios";
import urls from "../urls/urls";

const theJourneyApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addTheJourneyHeading = async (data) => {
  const response = await theJourneyApi.post("/api/thejourney/heading", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addTheJourneyContents = async (data) => {
  const response = await theJourneyApi.post("/api/thejourney/contents", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getTheJourneyHeading = async () => {
  const response = await theJourneyApi.get("/api/thejourney/all");
  return response;
};

export const getTheJourney = async () => {
  const response = await theJourneyApi.get("/api/thejourney");
  return response;
};

export const updateTheJourney = async (id, data) => {
  const response = await theJourneyApi.put(`/api/thejourney/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteTheJourney = async (id) => {
  const response = await theJourneyApi.delete(`/api/thejourney/${id}`);
  return response.data;
};
