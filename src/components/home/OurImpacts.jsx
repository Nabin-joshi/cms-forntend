import React, { useEffect, useState } from "react";
import { getAllOurImpacts } from "../../services/ourImpactService";

const OurImpacts = () => {
  const [ourImpacts, setOurImpacts] = useState({});
  const [locale, setLocale] = useState("eng");

  async function fetchAllOurImpacts() {
    try {
      const response = await getAllOurImpacts();
      setOurImpacts(response.data.data);
      console.log(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
    fetchAllOurImpacts();
  }, []);
  return (
    <>
      <section className="our-impact-section position-relative mt-4">
        <div className="border our-impact-content">
          <div className="">
            <h2 className="heading">
              {" "}
              {locale
                ? locale === "eng"
                  ? "Our Impact"
                  : "हाम्रो प्रभाव"
                : "Our Impact"}{" "}
            </h2>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap">
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-bullhorn our-impact-icon"></i>
              <h3 className="our-impact-number">
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[0]
                  ? locale === "eng"
                    ? ourImpacts.contents[0].count
                    : ourImpacts.contents[0].countNepali
                  : "650,230"}
              </h3>
              <p>
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[0]
                  ? locale === "eng"
                    ? ourImpacts.contents[0].desc
                    : ourImpacts.contents[0].descNepali
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quos."}
              </p>
            </div>
            <div className="slash"></div>
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-hands-holding our-impact-icon"></i>
              <h3 className="our-impact-number">
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[1]
                  ? locale === "eng"
                    ? ourImpacts.contents[1].count
                    : ourImpacts.contents[1].countNepali
                  : "650,230"}
              </h3>
              <p>
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[1]
                  ? locale === "eng"
                    ? ourImpacts.contents[1].desc
                    : ourImpacts.contents[1].descNepali
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quos."}
              </p>
            </div>
            <div className="slash"></div>
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-users-gear our-impact-icon"></i>
              <h3 className="our-impact-number">
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[2]
                  ? locale === "eng"
                    ? ourImpacts.contents[2].count
                    : ourImpacts.contents[2].countNepali
                  : "650,230"}
              </h3>
              <p>
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[2]
                  ? locale === "eng"
                    ? ourImpacts.contents[2].desc
                    : ourImpacts.contents[2].descNepali
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, quos."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurImpacts;
