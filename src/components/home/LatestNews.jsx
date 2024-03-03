import React, { useEffect } from "react";

import newsImage from "../../assets/img/news-1.png";
import Swiper from "swiper";

function LatestNews() {
  useEffect(() => {
    var swiper3 = new Swiper(".swiper-container3", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
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
      },
    });
  }, []);

  return (
    <>
      <section className="news-section mt-5">
        <div className="container position-relative">
          <h2 className="heading text-center text-blue">Latest News</h2>
          <div className="news-slider">
            <div className="swiper-container3">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img src={newsImage} alt="News 1" className="img-fluid" />
                      <div className="news-date d-flex flex-column">
                        <h2>14</h2>
                        <h4 className="mt-n2">Jan</h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>
                    <a href="#" className="text-blue mb-2">
                      Read More{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">John Doe</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img src={newsImage} alt="News 1" className="img-fluid" />
                      <div className="news-date d-flex flex-column">
                        <h2>14</h2>
                        <h4 className="mt-n2">Jan</h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>
                    <a href="#" className="text-blue mb-2">
                      Read More{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">John Doe</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img src={newsImage} alt="News 1" className="img-fluid" />
                      <div className="news-date d-flex flex-column">
                        <h2>14</h2>
                        <h4 className="mt-n2">Jan</h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>
                    <a href="#" className="text-blue mb-2">
                      Read More{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">John Doe</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="news-card text-left">
                    <div className="position-relative text-center">
                      <img src={newsImage} alt="News 1" className="img-fluid" />
                      <div className="news-date d-flex flex-column">
                        <h2>14</h2>
                        <h4 className="mt-n2">Jan</h4>
                      </div>
                    </div>
                    <h3 className="font-weight-bold text-blue mt-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quos.
                    </p>
                    <a href="#" className="text-blue mb-2">
                      Read More{" "}
                      <i className="fas fa-circle-arrow-right ml-2"></i>
                    </a>
                    <div className="news-card-bottom pt-2 border-top d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <span className="ml-2">John Doe</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-share"></i>
                        <span className="ml-2">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-blue-inverted mt-3">
              View All <i className="fas fa-circle-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
