import axios from "axios";
import urls from "../urls/urls";

const newsLetterGroupMapApi = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNewsLetterGroups = async () => {
  const groups = newsLetterGroupMapApi.get(`/api/newsLetter/newsLetterGroup`);
  return groups;
};

export const getNewsLetterGroupsLimited = async (data) => {
  const groups = newsLetterGroupMapApi.get(
    `/api/newsLetter/newsLetterGroupsLimited?groupNameLike=${data}`
  );
  return groups;
};

export const sendNewsLetterToEmails = async (data) => {
  const sendNewsPaperToEmail = newsLetterGroupMapApi.post(
    `/api/newsLetter/sendNewsLetterToGroups`,
    data
  );
  return sendNewsPaperToEmail;
};
