import React, { useEffect, useState } from "react";
import { getInvolvedData } from "../../services/getInvolvedService";
import { useParams } from "react-router-dom";
import { getGetInvolvedImages } from "../../services/api";
import coverImage from "../../assets/img/cover.jpg";

export const GetInvolvedHome = () => {
  const [vacancy, setVacancy] = useState("");
  const [procurement, setProcurement] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [donate, setDonate] = useState("");
  const [locale, setLocale] = useState("nep");
  let { fieldName } = useParams();
  const stateDatas = {
    vacancy: setVacancy,
    procurement: setProcurement,
    volunteer: setVolunteer,
    donate: setDonate,
  };
  const [currentLocale, setcurrentLocale] = useState("EN");
  const [navbarImages, setNavBarImages] = useState();

  const stateKeys = Object.keys(stateDatas);
  useEffect(() => {
    const getDatasForGetInvolved = async (field, locale = "") => {
      try {
        const res = await getInvolvedData(field + locale);
        const statedData = res.data.data;
        const stateUpdateFunc = stateDatas[field];
        stateUpdateFunc(statedData);
      } catch (error) {}
    };

    stateKeys.forEach((state) => {
      if (locale.toLocaleLowerCase() === "eng") {
        getDatasForGetInvolved(state);
      } else if (locale.toLocaleLowerCase() === "nep") {
        getDatasForGetInvolved(state, "Nepali");
      }
    });

    let currentLocale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setcurrentLocale(currentLocale);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getGetInvolvedImages();
      const resData = res.data;
      if (resData) {
        setNavBarImages(resData);
      }
    } catch (error) {}
  };

  return (
    <>
      <section class="about-us-section ">
        {fieldName === "vacancy" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.vacancy
                  ? navbarImages.vacancy
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Get Involved" : "संलग्न हुनुहोस्"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "procurement" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.procurement
                  ? navbarImages.procurement
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Get Involved" : "संलग्न हुनुहोस्"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "volunteer" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.volunteer
                  ? navbarImages.volunteer
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Get Involved" : "संलग्न हुनुहोस्"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "donate" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.donate
                  ? navbarImages.donate
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Get Involved" : "संलग्न हुनुहोस्"}
              </h1>
            </div>
          </div>
        )}
        <div class="container">
          <div class="">
            <div class="card-body">
              {fieldName && fieldName === "vacancy" && (
                <>
                  <h3> {currentLocale === "EN" ? "Vacancy" : "रिक्ति"}</h3>
                  <p dangerouslySetInnerHTML={{ __html: vacancy }}>{}</p>
                </>
              )}

              {fieldName && fieldName === "procurement" && (
                <>
                  <h3>{currentLocale === "EN" ? "Procurement" : "खरिदारी"} </h3>
                  <p dangerouslySetInnerHTML={{ __html: procurement }}></p>
                </>
              )}

              {fieldName && fieldName === "volunteer" && (
                <>
                  <div>
                    <h3>
                      {currentLocale === "EN" ? "Volunteer" : "स्वयंसेवक"}{" "}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: volunteer }}></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "donate" && (
                <>
                  <div>
                    <h3>
                      {currentLocale === "EN" ? "Donate" : "दान गर्नुहोस्"}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: donate }}></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
