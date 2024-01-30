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

export const saveContent = async (data) => {
  try {
    await api.put("/api/blog/update/65ad742140933d0ccc3563e8", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getContent = async () => {
  let response;
  try {
    response = await api.get("/api/blog/65ad742140933d0ccc3563e8");
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
