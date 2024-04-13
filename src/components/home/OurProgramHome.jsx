import React, { useEffect, useState } from "react";
import { getOurProgramData } from "../../services/ourProgramService";
import { useParams } from "react-router-dom";
import { getOurWorkImages } from "../../services/api";
import coverImage from "../../assets/img/cover.jpg";

const OurProgramHome = () => {
  const [field, setFieldValue] = useState("");
  const [locale, setLocale] = useState("eng");
  const [currentLocale, setcurrentLocale] = useState("EN");
  const [navbarImages, setNavBarImages] = useState();

  const { programType } = useParams();
  const fetchFieldValue = async (field) => {
    try {
      const res = await getOurProgramData(field);
      const stateData = res.data.data;
      setFieldValue(stateData[field]);
    } catch (error) {}
  };

  useEffect(() => {
    if (locale === "eng") {
      fetchFieldValue(programType);
    } else if (locale === "nep") {
      fetchFieldValue(programType + "Nepali");
    }
    fetchData();

    let currentLocale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setcurrentLocale(currentLocale);
  }, [programType]);

  const fetchData = async () => {
    try {
      const res = await getOurWorkImages();
      const resData = res.data;
      if (resData) {
        setNavBarImages(resData);
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="about-us-section ">
        {programType === "advocacyAwarness" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.advocacyAwarness
                  ? navbarImages.advocacyAwarness
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN"
                  ? "Our Program Koshish"
                  : "हाम्रो कार्यक्रम 'कोशिश'"}
              </h1>
            </div>
          </div>
        )}

        {programType === "empowermentAndCommunityInclusion" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.empowerment
                  ? navbarImages.empowerment
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN"
                  ? "Our Program Koshish"
                  : "हाम्रो कार्यक्रम 'कोशिश'"}
              </h1>
            </div>
          </div>
        )}

        {programType === "strengthenCommunitySupportSystem" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.support
                  ? navbarImages.support
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN"
                  ? "Our Program Koshish"
                  : "हाम्रो कार्यक्रम 'कोशिश'"}
              </h1>
            </div>
          </div>
        )}

        {programType === "organizationalDevelopment" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.orgDevelopment
                  ? navbarImages.orgDevelopment
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN"
                  ? "Our Program Koshish"
                  : "हाम्रो कार्यक्रम 'कोशिश'"}
              </h1>
            </div>
          </div>
        )}

        {programType === "ecsc" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.ecsc
                  ? navbarImages.ecsc
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN"
                  ? "Our Program Koshish"
                  : "हाम्रो कार्यक्रम 'कोशिश'"}
              </h1>
            </div>
          </div>
        )}

        <div className="container">
          <div className="">
            <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: field }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProgramHome;
