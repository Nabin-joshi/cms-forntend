import React, { useEffect, useState } from "react";

import newsImage from "../../assets/img/news-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { getNews } from "../../services/api";
import { NavLink } from "react-router-dom";

function LatestNews() {
  const [locale, setLocale] = useState("eng");
  const [latestNews, setLatestNews] = useState(null);

  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);

    const fetchData = async () => {
      try {
        const res = await getNews();

        if (res) {
          setLatestNews(res.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="news-section mt-5">
        <div className="container position-relative">
          <h2 className="heading text-center text-blue">
            {" "}
            {locale
              ? locale === "eng"
                ? "Latest News"
                : "नवीनतम समाचार"
              : "Latest News"}
          </h2>
          <div className="news-slider">
            <div className="swiper-container3">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Navigation]}
                >
                  {latestNews && latestNews.news ? (
                    latestNews.news.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="news-card text-left">
                            <div className="position-relative text-center">
                              <img
                                src={item.image ? item.image : newsImage}
                                alt={`news ${index}`}
                                className="img-fluid"
                              />
                              <div className="news-date d-flex flex-column">
                                <h2>
                                  {item.date
                                    ? item.date.split("-")[0]
                                    : locale
                                    ? locale === "eng"
                                      ? "14"
                                      : "१४"
                                    : "14"}
                                </h2>
                                <h4 className="mt-n2">
                                  {item.date
                                    ? item.date.split("-")[1]
                                    : locale
                                    ? locale === "eng"
                                      ? "Jan"
                                      : "जनवरी"
                                    : "Jan"}
                                </h4>
                              </div>
                            </div>
                            <h3 className="font-weight-bold text-blue mt-5">
                              {item.title
                                ? item.title
                                : locale
                                ? locale === "eng"
                                  ? "Empowering Communities Through Education"
                                  : "शिक्षा द्वारा समुदायको सशक्तिकरण"
                                : "Empowering Communities Through Education"}
                            </h3>
                            <p className="">
                              {item.contentDescription
                                ? item.contentDescription
                                : locale
                                ? locale === "eng"
                                  ? "Our organization has been actively involved in providing education to underprivileged communities, thereby empowering them to create a better future for themselves."
                                  : "हाम्रो संस्था गरिब समुदायहरूलाई शिक्षा प्रदान गर्दै समुदायलाई आफ्नो भविष्यको लागि राम्रो बनाउन सशक्तिकरण गरिरहेको छ।"
                                : "Our organization has been actively involved in providing education to underprivileged communities, thereby empowering them to create a better future for themselves."}
                            </p>
                            <NavLink
                              to={`/latestnews/readMore/${item._id}`}
                              className="text-blue mb-2"
                            >
                              {locale
                                ? locale === "eng"
                                  ? "Read More"
                                  : "थप पढ्नुहोस्"
                                : "Read More"}{" "}
                              <i className="fas fa-circle-arrow-right ml-2"></i>
                            </NavLink>
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
                      </SwiperSlide>
                    ))
                  ) : (
                    <>
                      <SwiperSlide>
                        <div className="swiper-slide">
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
                                  {locale
                                    ? locale === "eng"
                                      ? "14"
                                      : "१४"
                                    : "14"}
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
                      </SwiperSlide>
                    </>
                  )}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a
              href="/latestNews/viewAll"
              className="btn btn-blue-inverted mt-3"
            >
              {locale
                ? locale === "eng"
                  ? "View All"
                  : "सबै हेर्नुहोस्"
                : "View All"}{" "}
              <i className="fas fa-circle-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
