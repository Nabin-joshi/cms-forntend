import axios from "axios";
import urls from "../urls/urls";

const donationApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDonationInfo = async (field) => {
  const donation = donationApi.get(`/api/donation?field=${field}`);
  return donation;
};

export const createDonation = async (data) => {
  const savedDonation = donationApi.put(`/api/donation`, data);
  return savedDonation;
};

export const deleteDonationIconDesc = async (id) => {
  const resp = donationApi.delete(`/api/donation/deleteIconDesc/${id}`);
  return resp;
};
