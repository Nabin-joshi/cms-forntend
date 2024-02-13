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

export const saveEnglishServiceTextEditorContent = async (data) => {
  try {
    await api.put("/api/service/updateService/eng", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveNepaliServiceTextEditorContent = async (data) => {
  try {
    await api.put("/api/service/updateService/nep", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishSliderContent = async (data) => {
  try {
    await api.put("/api/slider/updateSlider/eng", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveNepaliSliderContent = async (data) => {
  try {
    await api.put("/api/slider/updateSlider/nep", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getNepaliSliderContent = async () => {
  let response;
  try {
    response = await api.get("/api/slider/getSlider/nep");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getEnglishSliderContent = async () => {
  let response;
  try {
    response = await api.get("/api/slider/getSlider/eng");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getNepaliServiceTextEditorContent = async () => {
  let response;
  try {
    response = await api.get(
      "/api/service/getService/nep"
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getEnglishServiceTextEditorContent = async () => {
  let response;
  try {
    response = await api.get(
      "/api/service/getService/eng"
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const createNewLetterGroup = async (formData) => {
  let response;
  try {
    response = await api.post("/api/newsLetter/newsLetterGroup", formData);
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};

export const fetchNewLetterGroup = async () => {
  let response;
  try {
    response = await api.get("/api/newsLetter/newsLetterGroup");
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};

export const createNewsLetterUser = async (userData) => {
  let response;
  try {
    response = await api.post("/api/newsLetter/newsLetterGroup", userData);
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};

export const getLikelyUsers = async (data) => {
  let response;
  try {
    response = await api.get(
      `/api/newsLetter/newsLetterUsersLimited?emailLike=${data}`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};

export const getLikelyGroups = async (data) => {
  let response;
  try {
    response = await api.get(
      `/api/newsLetter/newsLetterGroupsLimited?groupNameLike=${data}`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};

export const addNewsLetterUserGroupMap = async (userGroupMap) => {
  let response;
  try {
    response = await api.post(
      "/api/newsLetter/newsLetterUserGroupMap",
      userGroupMap
    );
  } catch (error) {
    console.log(error);
    return error;
  }
  return response;
};
