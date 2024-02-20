import axios from "axios";
import urls from "../urls/urls";

const ourPartnersApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addOurPartnerHeading = async (data) => {
  const response = await ourPartnersApi.post("/api/ourPartners/heading", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addOurPartnerContents = async (data) => {
  const response = await ourPartnersApi.post(
    "/api/ourPartners/contents",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

export const getOurPartnerHeading = async () => {
  const response = await ourPartnersApi.get("/api/ourPartners/all");
  return response;
};

export const getAllOurPartnerData = async () => {
  const response = await ourPartnersApi.get("/api/ourPartners/all");
  return response;
};

export const updateOurPartner = async (id, data) => {
  const response = await ourPartnersApi.put(`/api/ourPartners/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteOurPartner = async (id) => {
  const response = await ourPartnersApi.delete(`/api/ourPartners/${id}`);
  return response;
};
