import React, { useEffect, useState } from "react";
import newsImage from "../../../assets/img/news-1.png";

function LatestNewsViewAll() {
  const [locale, setLocale] = useState("eng");

  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
  }, []);
  return (
    <>
      <section className="news-section mt-5">
        <div className="container">
          <h2 className="heading text-center text-blue">
            {" "}
            {locale
              ? locale === "eng"
                ? "Latest News"
                : "नवीनतम समाचार"
              : "Latest News"}
          </h2>
          <div className="news-slider">
            <div className="container">
              <div className="wrapper">
                <div className="slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img
                        src={newsImage}
                        alt={
                          locale
                            ? locale === "eng"
                              ? "News 1"
                              : "समाचार १"
                            : "News 1"
                        }
                        className="img-fluid"
                      />
                      <div className="news-date d-flex flex-column">
                        <h2>
                          {locale ? (locale === "eng" ? "14" : "१४") : "14"}
                        </h2>
                        <h4 className="mt-n2">
                          {locale
                            ? locale === "eng"
                              ? "Jan"
                              : "जनवरी"
                            : "Jan"}
                        </h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      {locale
                        ? locale === "eng"
                          ? "Empowering Communities Through Education"
                          : "शिक्षा द्वारा समुदायको सशक्तिकरण"
                        : "Empowering Communities Through Education"}
                    </h3>
                    <p className="">
                      {locale
                        ? locale === "eng"
                          ? "Our organization has been actively involved in providing education to underprivileged communities, thereby empowering them to create a better future for themselves."
                          : "हाम्रो संस्था गरिब समुदायहरूलाई शिक्षा प्रदान गर्दै समुदायलाई आफ्नो भविष्यको लागि राम्रो बनाउन सशक्तिकरण गरिरहेको छ।"
                        : "Our organization has been actively involved in providing education to underprivileged communities, thereby empowering them to create a better future for themselves."}
                    </p>
                    <a href="/learnMore" className="text-blue mb-2">
                      {locale
                        ? locale === "eng"
                          ? "Read More"
                          : "थप पढ्नुहोस्"
                        : "Read More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "John Doe"
                              : "जोन डो"
                            : "John Doe"}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Share"
                              : "शेयर"
                            : "Share"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img
                        src={newsImage}
                        alt={
                          locale
                            ? locale === "eng"
                              ? "News 1"
                              : "समाचार १"
                            : "News 1"
                        }
                        className="img-fluid"
                      />
                      <div className="news-date d-flex flex-column">
                        <h2>
                          {locale ? (locale === "eng" ? "22" : "२२") : "22"}
                        </h2>
                        <h4 className="mt-n2">
                          {locale
                            ? locale === "eng"
                              ? "Feb"
                              : "फेब्रुअरी"
                            : "Feb"}
                        </h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      {locale
                        ? locale === "eng"
                          ? "Empowering Women Through Entrepreneurship"
                          : "उद्यमिता द्वारा महिलालाई सशक्तिकरण"
                        : "Empowering Women Through Entrepreneurship"}
                    </h3>
                    <p className="">
                      {locale
                        ? locale === "eng"
                          ? "Our organization is dedicated to supporting women in starting their own businesses, providing them with the necessary resources and guidance for success."
                          : "हाम्रो संस्था महिलाहरूलाई आफ्नो व्यवसाय आरम्भ गर्नमा समर्थन गर्दै, उनीहरूलाई सफलताका लागि आवश्यक स्रोत र मार्गदर्शन प्रदान गर्दै छ।"
                        : "Our organization is dedicated to supporting women in starting their own businesses, providing them with the necessary resources and guidance for success."}
                    </p>
                    <a href="/learnMore" className="text-blue mb-2">
                      {locale
                        ? locale === "eng"
                          ? "Read More"
                          : "थप पढ्नुहोस्"
                        : "Read More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Jane Smith"
                              : "जेन स्मिथ"
                            : "Jane Smith"}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Share"
                              : "शेयर"
                            : "Share"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img
                        src={newsImage}
                        alt={
                          locale
                            ? locale === "eng"
                              ? "News 1"
                              : "समाचार १"
                            : "News 1"
                        }
                        className="img-fluid"
                      />
                      <div className="news-date d-flex flex-column">
                        <h2>
                          {locale ? (locale === "eng" ? "10" : "१०") : "10"}
                        </h2>
                        <h4 className="mt-n2">
                          {locale
                            ? locale === "eng"
                              ? "Mar"
                              : "मार्च"
                            : "Mar"}
                        </h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      {locale
                        ? locale === "eng"
                          ? "Promoting Sustainable Development Through Community Engagement"
                          : "समुदाय संलग्नता द्वारा सान्त्वना विकासको समर्थन"
                        : "Promoting Sustainable Development Through Community Engagement"}
                    </h3>
                    <p className="">
                      {locale
                        ? locale === "eng"
                          ? "Our organization believes in the power of community engagement to drive sustainable development initiatives, fostering collaboration and empowering local communities."
                          : "हाम्रो संस्था सान्त्वना विकासका पहलहरू ल्याउन समुदाय संलग्नता को शक्तिमा विश्वास गर्दछ, सहयोग बढाउन र स्थानीय समुदायहरूलाई सशक्त बनाउन।"
                        : "Our organization believes in the power of community engagement to drive sustainable development initiatives, fostering collaboration and empowering local communities."}
                    </p>
                    <a href="/learnMore" className="text-blue mb-2">
                      {locale
                        ? locale === "eng"
                          ? "Read More"
                          : "थप पढ्नुहोस्"
                        : "Read More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Emily Johnson"
                              : "एमिली जोन्सन"
                            : "Emily Johnson"}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Share"
                              : "शेयर"
                            : "Share"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img
                        src={newsImage}
                        alt={
                          locale
                            ? locale === "eng"
                              ? "News 1"
                              : "समाचार १"
                            : "News 1"
                        }
                        className="img-fluid"
                      />
                      <div className="news-date d-flex flex-column">
                        <h2>{locale ? (locale === "eng" ? "5" : "५") : "5"}</h2>
                        <h4 className="mt-n2">
                          {locale
                            ? locale === "eng"
                              ? "Apr"
                              : "अप्रिल"
                            : "Apr"}
                        </h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      {locale
                        ? locale === "eng"
                          ? "Preserving Biodiversity Through Conservation Efforts"
                          : "संरक्षण प्रयासहरूमा बायोडाइभर्सिटी संरक्षित गर्दै"
                        : "Preserving Biodiversity Through Conservation Efforts"}
                    </h3>
                    <p className="">
                      {locale
                        ? locale === "eng"
                          ? "Our organization is actively engaged in conservation efforts to preserve biodiversity, safeguarding our ecosystems for future generations."
                          : "हाम्रो संस्था बायोडाइभर्सिटी संरक्षित गर्नका लागि संरक्षण प्रयासहरूमा सक्रिय छ, आउँदा को लागि हाम्रा पारिस्थितिको रक्षा गर्दै।"
                        : "Our organization is actively engaged in conservation efforts to preserve biodiversity, safeguarding our ecosystems for future generations."}
                    </p>
                    <a href="/learnMore" className="text-blue mb-2">
                      {locale
                        ? locale === "eng"
                          ? "Read More"
                          : "थप पढ्नुहोस्"
                        : "Read More"}{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Michael Brown"
                              : "माइकल ब्राउन"
                            : "Michael Brown"}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">
                          {locale
                            ? locale === "eng"
                              ? "Share"
                              : "शेयर"
                            : "Share"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNewsViewAll;
