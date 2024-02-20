import React, { useEffect, useState } from "react";
import {
  getEnglishSliderContent,
  getNepaliSliderContent,
} from "../../services/api";

import sectionLogo from "../../assets/img/hero-bg.jpg";

export default function Slider() {
  const [englishData, setEnglishData] = useState(null);
  const [nepaliData, setNepaliData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishSliderContent();
        if (englishResponse) {
          setEnglishData(englishResponse.data.slider);
        }
        const nepaliResponse = await getNepaliSliderContent();
        if (nepaliResponse) {
          setNepaliData(nepaliResponse.data.slider);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
        style={{
          background: ` url(${
            englishData && englishData.image && englishData.image !== ""
              ? englishData.image
              : sectionLogo
          })`,
        }}
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                {englishData ? englishData.title : "Welcome to Koshish Nepal"}
              </h2>
              <p className="animate__animated animate__fadeInUp">
                {englishData
                  ? englishData.content
                  : "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias doloremmollitia ut. Similique ea voluptatem. Esse doloremque accusamusrepellendus deleniti vel. Minus et tempore modi architecto."}
              </p>
              <a
                href="/learnMore"
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                {nepaliData ? nepaliData.title : "Lorem Ipsum Dolor"}
              </h2>
              <p className="animate__animated animate__fadeInUp">
                {nepaliData
                  ? nepaliData.content
                  : "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut etest quaerat sequi nihil ut aliquam. Occaecati alias doloremmollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."}
              </p>
              <a
                href="/learnMore"
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="/learnMore"
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Learn More
              </a>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="homeServces" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Watch Slider Video</h2>
            <div className="container">
              {/* <video height="500" controls>
                <source
                  src={
                    englishData && englishData.video && englishData.video !== ""
                      ? englishData.video
                      : ""
                  }
                  type="video/mp4"
                />
              </video> */}
              <iframe
                height="500"
                width="800"
                controls
                allowFullScreen
                allow="autoplay"
                src={
                  englishData && englishData.video && englishData.video !== ""
                    ? englishData.video
                    : "https://www.youtube.com/watch?v=05DqIGS_koU"
                }
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
