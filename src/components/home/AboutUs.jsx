import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../services/aboutUsService";
import { json, useParams } from "react-router-dom";
import { getAboutUsImages } from "../../services/api";
import { toastError } from "../../services/ToastService";
import coverImage from "../../assets/img/cover.jpg";
import { getContactUsData } from "../../services/ContactUsService";

const AboutUs = () => {
  const [currentLocale, setcurrentLocale] = useState("EN");
  const [aboutUsImages, setAboutUsImages] = useState({
    aboutUsHistory: "",
    aboutUsIntroduction: "",
    aboutUsOurTeam: "",
  });

  const [contactUs, setContactUs] = useState({
    header: "",
    headerImage: "",
    description: "",
    phone: "",
    address: "",
    email: "",
  });

  const fetchData = async () => {
    try {
      const res = await getAboutUsImages();
      const resData = res.data;

      let aboutusData = {
        aboutUsHistory: "",
        aboutUsIntroduction: "",
        aboutUsOurTeam: "",
      };

      aboutusData.aboutUsHistory = resData.aboutUsHistory;
      aboutusData.aboutUsIntroduction = resData.aboutUsIntroduction;
      aboutusData.aboutUsOurTeam = resData.aboutUsOurTeam;
      setAboutUsImages(aboutusData);
    } catch (error) {}
  };

  const [fieldValue, setFieldValue] = useState("");
  const { fieldName } = useParams();

  const [locale, setLocale] = useState("eng");
  useEffect(() => {
    const fetchFieldData = async (field, locale = "") => {
      try {
        const resp = await getAboutUs(field + locale);
        const data = resp.data.data;
        setFieldValue(data[field + locale]);
      } catch (error) {}
    };

    if (locale === "eng") {
      fetchFieldData(fieldName);
    } else if (locale === "nep") {
      fetchFieldData(fieldName, "Nepali");
    }

    // const fieldsArray = Object.keys(stateDatas);

    // async function fetchAboutUs(field, currentLocale = "") {
    //   try {
    //     const resp = getAboutUs(field + currentLocale);
    //     const data = (await resp).data.data;
    //     let fieldkey = field;

    //     const setData = stateDatas[fieldkey];
    //     setData(data[fieldkey + currentLocale]);
    //   } catch (error) {}
    // }

    // fieldsArray.forEach((field) => {
    //   if (field === "ourThematicAreas" || field === "boardCommittees") {
    //     fetchAboutUs(field);
    //   } else {
    //     if (currentLocale === "eng") {
    //       fetchAboutUs(field);
    //     } else if (currentLocale === "nep") {
    //       fetchAboutUs(field, "Nepali");
    //     }
    //   }
    // });
  }, [fieldName]);

  useEffect(() => {
    fetchData();
    let currentLocale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setcurrentLocale(currentLocale);
  }, []);

  return (
    <>
      <section className="about-us-section ">
        {fieldName === "history" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                aboutUsImages && aboutUsImages.aboutUsHistory
                  ? aboutUsImages.aboutUsHistory
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {currentLocale === "EN" ? "About Koshish" : "कोशिश बारेमा"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "whoWeAre" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                aboutUsImages && aboutUsImages.aboutUsIntroduction
                  ? aboutUsImages.aboutUsIntroduction
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {currentLocale === "EN" ? "About Koshish" : "कोशिश बारेमा"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "boardCommittees" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                aboutUsImages && aboutUsImages.aboutUsOurTeam
                  ? aboutUsImages.aboutUsOurTeam
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {currentLocale === "EN" ? "About Koshish" : "कोशिश बारेमा"}
              </h1>
            </div>
          </div>
        )}

        <div className="container">
          <div>
            <div className="card-body">
              {fieldName === "history" && (
                <h1 className="text-center text-blue">
                  {currentLocale === "EN" ? "History" : "इतिहास"}{" "}
                </h1>
              )}
              {fieldName === "whoWeAre" && (
                <h1 className="text-center text-blue">
                  {currentLocale === "EN" ? "Introduction" : "परिचय"}{" "}
                </h1>
              )}
              {fieldName === "boardCommittees" && (
                <h1 className="text-center text-blue">
                  {currentLocale === "EN" ? "Our Team" : "हाम्रा टोलीहरू"}{" "}
                </h1>
              )}

              {fieldName !== "boardCommittees" && (
                <p dangerouslySetInnerHTML={{ __html: fieldValue }}></p>
              )}
              {fieldName === "boardCommittees" && (
                <div>
                  <h5 className="ml-2">
                    {currentLocale === "EN"
                      ? "Board Members"
                      : "बोर्ड सदस्यहरू"}
                  </h5>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      flexWrap: "wrap",
                      alignContent: "space-between",
                    }}
                  >
                    {fieldName === "boardCommittees" &&
                      fieldValue &&
                      Array.isArray(fieldValue) &&
                      fieldValue.map((item, index) => {
                        if (item.role === "Board Member") {
                          return (
                            <>
                              <div className="ml-2">
                                <div className="card">
                                  <div className="card-body">
                                    {item.photo && (
                                      <img
                                        src={item.photo}
                                        alt="No Img"
                                        style={{
                                          height: "15rem",
                                          width: "15rem",
                                        }}
                                      />
                                    )}
                                    <p>{item.name}</p>
                                    <p>{item.role}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                      })}
                  </div>
                </div>
              )}
              <hr></hr>

              {fieldName === "boardCommittees" && (
                <div>
                  <h5 className="ml-2">Staff</h5>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      flexWrap: "wrap",
                      alignContent: "space-between",
                    }}
                  >
                    {fieldValue &&
                      fieldName === "boardCommittees" &&
                      Array.isArray(fieldValue) &&
                      fieldValue.map((item, index) => {
                        if (item.role === "Staff") {
                          return (
                            <>
                              {" "}
                              <div className="ml-2">
                                <div className="card">
                                  <div className="card-body">
                                    {item.photo && (
                                      <img
                                        src={item.photo}
                                        alt="No Img"
                                        style={{
                                          height: "15rem",
                                          width: "15rem",
                                        }}
                                      />
                                    )}
                                    <p>{item.name}</p>
                                    <p>{item.role}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        } else return;
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
