import React, { useEffect, useState } from "react";

import ourWorkImage1 from "../../assets/img/work-1.png";
import ourWorkImage2 from "../../assets/img/work-2.png";
import ourWorkImage3 from "../../assets/img/work-3.png";
import { getOurwork } from "../../services/api";
import { NavLink } from "react-router-dom";

function OurWork() {
  const [locale, setLocale] = useState("eng");
  const [ourWork, setOurWork] = useState(null);

  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
    const fetchData = async () => {
      try {
        const res = await getOurwork();

        setTimeout(() => {
          if (res.data) {
            setOurWork(res.data);
          }
        });
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="mt-5">
        <div className="container">
          <h2 className="heading text-center text-blue">
            {" "}
            {locale
              ? locale === "eng"
                ? "Our work"
                : "हाम्रो काम"
              : "Our work"}
          </h2>
          <p className="text-center">
            {ourWork && ourWork.description
              ? ourWork.description
              : locale
              ? locale === "eng"
                ? "Our non-profit organization provides vital support for physically and mentally impaired individuals. Through tailored programs and compassionate assistance, we empower them to overcome challenges and embrace independence. With dedicated professionals and volunteers, we create a supportive community where everyone can thrive."
                : "हाम्रो नाफामुनि संस्था शारीरिक र मानसिक अशक्तता भएका व्यक्तिहरूको लागि महत्त्वपूर्ण समर्थन प्रदान गर्दछ। निष्कर्षित कार्यक्रम र दयालु सहयोगद्वारा हामी उनीहरूलाई चुनौतीहरूलाई परास्त गर्न र स्वतन्त्रता अवलम्बन गर्न आजिवनी सफल बनाउन उनीहरूलाई शक्ति दिन्छ। समर्पित पेशेवरहरू र स्वयंसेवकहरूको साथमा हामी एक समर्थन योग्य समुदाय बनाउँदै छौं जहाँ प्रत्येकले सम्मानित, आदरित र सफल हुनको लागि शक्तिशाली अनुभव गर्न सक्छ।"
              : "Our non-profit organization provides vital support for physically and mentally impaired individuals. Through tailored programs and compassionate assistance, we empower them to overcome challenges and embrace independence. With dedicated professionals and volunteers, we create a supportive community where everyone can thrive."}
          </p>
          <div className="row">
            {ourWork && ourWork.work ? (
              ourWork.work.slice(0, 3).map((work, index) => (
                <div className="col-12 col-lg-4 mb-4">
                  <div className="our-work-card topbar-underline">
                    <img
                      src={
                        work && work.image && work.image !== ""
                          ? work.image
                          : ourWorkImage1
                      }
                      alt={`Our Work ${index}`}
                      className="img-fluid"
                    />
                    <h3 className="font-weight-bold text-blue">
                      {" "}
                      {work && work.header
                        ? work.header
                        : locale
                        ? locale === "eng"
                          ? "Education"
                          : "शिक्षा"
                        : "Education"}
                    </h3>
                    <NavLink
                      to={`/ourWork/learnMore/${work._id}`}
                      className="text-blue-grey"
                    >
                      {locale
                        ? locale === "eng"
                          ? " Learn More"
                          : "थप जान्नुहोस्"
                        : " Learn More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </NavLink>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="our-work-card topbar-underline">
                    <img
                      src={ourWorkImage1}
                      alt="Our Work 1"
                      className="img-fluid"
                    />
                    <h3 className="font-weight-bold text-blue">
                      {" "}
                      {locale
                        ? locale === "eng"
                          ? "Education"
                          : "शिक्षा"
                        : "Education"}
                    </h3>
                    <a href="/ourWork/learnMore" className="text-blue-grey">
                      {locale
                        ? locale === "eng"
                          ? " Learn More"
                          : "थप जान्नुहोस्"
                        : " Learn More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="our-work-card topbar-underline">
                    <img
                      src={ourWorkImage2}
                      alt="Our Work 1"
                      className="img-fluid"
                    />
                    <h3 className="font-weight-bold text-blue">
                      {locale
                        ? locale === "eng"
                          ? "Campaign"
                          : "अभियान"
                        : " Campaign"}
                    </h3>
                    <a href="/ourWork/learnMore" className="text-blue-grey">
                      {locale
                        ? locale === "eng"
                          ? " Learn More"
                          : "थप जान्नुहोस्"
                        : " Learn More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                  <div className="our-work-card topbar-underline">
                    <img
                      src={ourWorkImage3}
                      alt="Our Work 1"
                      className="img-fluid"
                    />
                    <h3 className="font-weight-bold text-blue">
                      {" "}
                      {locale
                        ? locale === "eng"
                          ? " Guidence"
                          : "मार्गदर्शन"
                        : " Guidence"}
                    </h3>
                    <a href="/ourWork/learnMore" className="text-blue-grey">
                      {locale
                        ? locale === "eng"
                          ? " Learn More"
                          : "थप जान्नुहोस्"
                        : " Learn More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <a href="/ourWork/viewAll" className="btn btn-blue-inverted mt-3">
              View All <i className="fas fa-circle-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
