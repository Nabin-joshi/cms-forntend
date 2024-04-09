import axios from "axios";
import urls from "../urls/urls";

const api = axios.create({
  baseURL: urls.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let locale = localStorage.getItem("locale")
  ? localStorage.getItem("locale")
  : "eng";

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

export const saveSliderImage = async (data) => {
  try {
    await api.put("/api/slider/sliderImage", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveSliderVideo = async (data) => {
  try {
    await api.put("/api/slider/sliderVideo", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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

export const getSliderData = async () => {
  let response;
  try {
    response = await api.get(`/api/slider/getSlider/${locale}`);
  } catch (error) {
    console.log(error);
  }
  return response;
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
    response = await api.get("/api/service/getService/nep");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getEnglishServiceTextEditorContent = async () => {
  let response;
  try {
    response = await api.get("/api/service/getService/eng");
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

export const saveNepaliGeographicalCoverage = async (data) => {
  try {
    await api.put(
      "/api/geographicalCoverage/updateGeographicalCoverage/nep",
      data
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishGeographicalCoverage = async (data) => {
  try {
    await api.put(
      "/api/geographicalCoverage/updateGeographicalCoverage/eng",
      data
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getNepaliGeographicalCoverage = async () => {
  let response;
  try {
    response = await api.get(
      "/api/geographicalCoverage/getGeographicalCoverage/nep"
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getEnglishGeographicalCoverage = async () => {
  let response;
  try {
    response = await api.get(
      "/api/geographicalCoverage/getGeographicalCoverage/eng"
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getGeographicalCoverage = async () => {
  let response;
  try {
    response = await api.get(
      `/api/geographicalCoverage/getGeographicalCoverage/${locale}`
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const saveNepaliOurWork = async (data) => {
  try {
    await api.put("/api/ourwork/updateOurwork/nep", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishOurWork = async (data) => {
  try {
    await api.put("/api/ourwork/updateOurwork/eng", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveNepaliOurWorkDescription = async (data) => {
  try {
    await api.put("/api/ourwork/update/ourWork/description/nep", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishOurWorkDescription = async (data) => {
  try {
    await api.put("/api/ourwork/update/ourWork/description/eng", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllOurwork = async () => {
  let response;
  try {
    response = await api.get("/api/ourWork/getAllWork");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getOurwork = async () => {
  let response;
  try {
    response = await api.get(`/api/ourWork/getOurwork/${locale}`);
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getYourSupport = async () => {
  let response;
  try {
    response = await api.get(`/api/yoursupport/getYourSupport/${locale}`);
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getNews = async () => {
  let response;
  try {
    response = await api.get(`/api/latestNews/getNews/${locale}`);
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const deleteNepaliWork = async (id) => {
  let response;
  try {
    response = await api.delete("/api/ourWork/delete/nep", { params: { id } });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const deleteEnglishWork = async (id) => {
  let response;
  try {
    response = await api.delete("/api/ourWork/delete/eng", { params: { id } });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getAllSupportData = async () => {
  let response;
  try {
    response = await api.get("/api/yoursupport/getall");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const saveNepaliYourSupportData = async (data) => {
  try {
    await api.put("/api/yoursupport/update/support/nep", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishYourSupportData = async (data) => {
  try {
    await api.put("/api/yoursupport/update/support/eng", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllLatestNews = async () => {
  let response;
  try {
    response = await api.get("/api/latestNews/getAllNews");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getAllGeoMaps = async () => {
  let response;
  try {
    response = await api.get("/api/geographicalCoverage/getAllGeoMap");
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const getGeoMapData = async () => {
  let response;
  try {
    response = await api.get(`/api/geographicalCoverage/getGeoMap/${locale}`);
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const saveNepaliGeoMapData = async (data) => {
  try {
    await api.put("/api/geographicalCoverage/updateGeoMap/nep", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishGeoMapData = async (data) => {
  try {
    await api.put("/api/geographicalCoverage/updateGeoMap/eng", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveNepaliLatestNews = async (data) => {
  try {
    await api.put("/api/latestNews/updateGeoMap/nep", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveEnglishLatestNews = async (data) => {
  try {
    await api.put("/api/latestNews/updateLatestNews/eng", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteNepaliNews = async (id) => {
  let response;
  try {
    response = await api.delete("/api/latestNews/delete/nep", {
      params: { id },
    });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const deleteEnglishNews = async (id) => {
  let response;
  try {
    response = await api.delete("/api/latestNews/delete/eng", {
      params: { id },
    });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const saveAboutUsImages = async (data) => {
  try {
    await api.put("/api/aboutUs/updateNavImage", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAboutUsImages = async () => {
  let response;
  try {
    response = await api.get("/api/aboutUs/getAboutUsImage");
  } catch (error) {
    console.log(error);
  }
  return response;
};
