import { toast } from "react-toastify";
import URLS from "../urls/urls";
const headers = {
  "Content-Type": "Application/json",
};

export const createNewsLetterUser = async (userData) => {
  try {
    const res = await fetch(`${URLS.BASE_URL}/api/newsLetter/newsLetterUser`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (data.success === true) {
      return data;
    } else {
      // alert(data.errormessage);
      toast.error(`${data.errormessage}`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    }
  } catch (error) {
    // alert("Something went wrong !!!" + JSON.stringify(error));
    toast.error(`Something went wrong`, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
  }
};

export const donateUs = async (formData) => {
  try {
    const res = await fetch(`${URLS.BASE_URL}/api/newsLetter/donateUs`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data.success);
    if (data.success === true) {
      return data;
    } else {
      // alert(data.errormessage);
      toast.error(`${data.errormessage}`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    }
  } catch (error) {
    // alert("Something went wrong !!!" + JSON.stringify(error));
    toast.error(`Something went wrong`, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
  }
};
