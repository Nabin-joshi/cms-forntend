import React, { useEffect, useState } from "react";
import { getAllOurImpacts } from "../../services/ourImpactService";
import NumberCounter from "../shared/Number-Counter/NumberCounter";

const OurImpacts = () => {
  const [ourImpacts, setOurImpacts] = useState({});
  const [locale, setLocale] = useState("eng");
  const [showCounters, setShowCounters] = useState(false);

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
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const ourImpactSection = document.getElementById("our-impact-section");
    if (!ourImpactSection) return;
    const rect = ourImpactSection.getBoundingClientRect();
    console.log(rect.top);

    const isVisible =
      rect.top >= -120 && rect.bottom <= window.innerHeight + 120;

    setShowCounters(isVisible);
  };

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
          <div
            id="our-impact-section"
            className="d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap"
          >
            <div className="our-impact-fields d-flex flex-column">
              <i className="fas fa-bullhorn our-impact-icon"></i>
              <h3 className="our-impact-number">
                {locale &&
                ourImpacts &&
                ourImpacts.contents &&
                ourImpacts.contents[0] ? (
                  locale === "eng" ? (
                    <NumberCounter
                      animate={showCounters}
                      n={parseInt(ourImpacts.contents[0].count)}
                    />
                  ) : (
                    ourImpacts.contents[0].countNepali
                  )
                ) : (
                  "650,230"
                )}
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
                ourImpacts.contents[1] ? (
                  locale === "eng" ? (
                    <NumberCounter
                      animate={showCounters}
                      n={parseInt(ourImpacts.contents[1].count)}
                    />
                  ) : (
                    ourImpacts.contents[1].countNepali
                  )
                ) : (
                  "650,230"
                )}
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
                ourImpacts.contents[2] ? (
                  locale === "eng" ? (
                    <NumberCounter
                      animate={showCounters}
                      n={parseInt(ourImpacts.contents[2].count)}
                    />
                  ) : (
                    ourImpacts.contents[2].countNepali
                  )
                ) : (
                  "650,230"
                )}
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
