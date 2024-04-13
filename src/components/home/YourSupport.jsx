import React, { useEffect, useState } from "react";
import { getYourSupport } from "../../services/api";
import { Link } from "react-router-dom";
import leftquote from "../../assets/img/“.svg";

function YourSupport() {
  const [locale, setLocale] = useState("eng");
  const [yourSupport, setYourSupport] = useState();

  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
    const fetchData = async () => {
      try {
        const res = await getYourSupport();
        if (res) {
          setYourSupport(res.data.yourSupport);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="donate-section">
        <div className="donate-container border-blue p-3">
          <div className="donate-padding">
            <div className="donate-statement">
              <h2 className="text-white font-weight-bold">
                {yourSupport && yourSupport.header
                  ? yourSupport.header
                  : locale
                  ? locale === "eng"
                    ? " Your support can make a difference"
                    : "तपाईंको समर्थनले अर्थ गर्दछ।"
                  : " Your support can make a difference"}
              </h2>
              <p className="text-blue">
                {yourSupport && yourSupport.description
                  ? yourSupport.description
                  : locale
                  ? locale === "eng"
                    ? "Our work has resulted in positive change. We have rehabilitatedabout mental health conditions and reduced barriers to treatmentand services. Many persons with mental health conditions havesought care and now enjoy fulfilling, productive lives in their communities. Help us continue our mission towards our goal."
                    : "हाम्रो कामले सकारात्मक परिवर्तन ल्याएको छ। हामीले आफ्नो लक्ष्यसम्मको मिशनमा सिधै बढी गएका छौं। हामीले मानसिक स्वास्थ्य सम्बन्धी अवस्थाहरूको पुनर्स्थापना गरेका छौं र उपचार र सेवामा बाधाहरू कम गरेका छौं। धेरै मानिसहरूले मानसिक स्वास्थ्य सम्बन्धी अवस्थाहरूको उपचार खोजेका छन् र अहिले आफ्नो समुदायमा खुशियाल, उत्तरदायी जीवन बिताउँछन्। हाम्रो लक्ष्यको प्रति हाम्रो मिशन जारी राख्नमा हामीलाई सहयोग गर्नुहोस्।"
                  : "Our work has resulted in positive change. We have rehabilitatedabout mental health conditions and reduced barriers to treatmentand services. Many persons with mental health conditions havesought care and now enjoy fulfilling, productive lives in their communities. Help us continue our mission towards our goal."}
              </p>
              <Link to="/donation">
                <button className="btn btn-blue-inverted">
                  Donate Now <i className="fas fa-circle-arrow-right ml-2"></i>
                </button>
              </Link>
            </div>

            <div className="donate-quote mt-3">
              <div className="text-blue text-right quote-marks">
                {yourSupport && yourSupport.quotation
                  ? yourSupport.quotation
                  : locale
                  ? locale === "eng"
                    ? "Every soul traverses a labyrinth of challenges, each step a testament to resilience. Yet, within these trials lies the essence of growth, propelling us towards our true potential, illuminating the path of enlightenment and fulfillment."
                    : "प्रत्येक आत्मा चुनौतीहरूको एक अविरल मार्गमा यात्रा गर्दछ। तर यस चुनौतीहरूले हामीलाई अघि बढाउँछन्।"
                  : "Every soul traverses a labyrinth of challenges, each step a testament to resilience. Yet, within these trials lies the essence of growth, propelling us towards our true potential, illuminating the path of enlightenment and fulfillment."}

                <h4 className="text-blue text-right">
                  {" "}
                  {yourSupport && yourSupport.quotationBy
                    ? yourSupport.quotationBy
                    : locale
                    ? locale === "eng"
                      ? " Gautama Buddha"
                      : "गौतम बुद्ध"
                    : " Gautama Buddha"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default YourSupport;
