import axios from "axios";
import urls from "../urls/urls";

const storyApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addStoryHeading = async (data) => {
  let response = await storyApi.post("/api/stories/heading", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getStoryHeading = async () => {
  let response = await storyApi.get("/api/stories/heading");
  return response;
};

export const getStories = async () => {
  const response = await storyApi.get("/api/stories/all");
  return response;
};
