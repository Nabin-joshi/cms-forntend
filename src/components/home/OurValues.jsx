import React, { useEffect, useState } from "react";
import { getOurValuesHeading } from "../../services/ourValuesService";

const OurValues = () => {
  const [ourValues, setOurValues] = useState();
  const [locale, setLocale] = useState("eng");

  async function fetchAllOurValues() {
    try {
      const response = await getOurValuesHeading();
      setOurValues(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllOurValues();
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
  }, []);
  return (
    <>
      <section className="thematic-areas-section position-relative mt-5">
        <div className="border thematic-areas-content">
          <h2 className="heading text-center">
            {" "}
            {locale
              ? locale === "eng"
                ? "Our Values/Thematic Areas"
                : "हाम्रा मूल्यहरू / विषय विस्तारहरू"
              : "Our Values/Thematic Areas"}{" "}
          </h2>
          <div className="row">
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-bullhorn our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[0].title
                      ? ourValues.contents[0].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[0].titleNepali
                    ? ourValues.contents[0].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-hands-holding our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[1].title
                      ? ourValues.contents[1].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[1].titleNepali
                    ? ourValues.contents[1].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-users-gear our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[2].title
                      ? ourValues.contents[2].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[2].titleNepali
                    ? ourValues.contents[2].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-graduation-cap our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[3].title
                      ? ourValues.contents[3].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[3].titleNepali
                    ? ourValues.contents[3].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-handshake our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[4].title
                      ? ourValues.contents[4].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[4].titleNepali
                    ? ourValues.contents[4].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-center mb-5">
              <i className="fas fa-book our-impact-icon"></i>
              <h4 className="mt-3">
                {" "}
                {locale
                  ? locale === "eng"
                    ? ourValues && ourValues.contents[0].title
                      ? ourValues.contents[0].title
                      : "Empowerment"
                    : ourValues && ourValues.contents[0].titleNepali
                    ? ourValues.contents[0].titleNepali
                    : "Empowerment"
                  : "Empowerment"}{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
