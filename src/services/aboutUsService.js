import axios from "axios";
import urls from "../urls/urls";

const aboutUsApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
});

export const updateAboutUsField = async (data) => {
  const response = await aboutUsApi.put("/api/aboutUs/broadCommittee", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getAboutUs = async (field) => {
  const response = await aboutUsApi.get(
    `/api/aboutUs/broadCommittee?field=${field}`
  );
  return response;
};

export const addBoardCommitteeMember = async (formData) => {
  const response = await aboutUsApi.post(
    "/api/aboutUs/broadCommittee",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const deleteBoardCommitteeMember = async (id) => {
  const response = await aboutUsApi.delete(`/api/aboutUs/broadCommittee/${id}`);
  return response;
};

export const deleteThematicArea = async (id) => {
  const response = await aboutUsApi.delete(`/api/aboutUs/thematicAreas/${id}`);
  return response;
};
