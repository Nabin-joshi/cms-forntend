import React, { useEffect, useState } from "react";
import { getSliderData } from "../../services/api";

import slider1 from "../../assets/img/slider-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const [sliderData, setSliderData] = useState(null);

  const [videoURL, setVideoURL] = useState(
    "http://localhost:5000/public/videos/1709843178096-file_example_MP4_640_3MG.mp4"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSliderData();
        console.log(res);
        setTimeout(() => {
          if (res) {
            setSliderData(res.data.slider);
            setVideoURL(res.data.slider.video);
          }
        });
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Swiper
              speed={400}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                {" "}
                <div className="swiper-slide position-relative">
                  <div className="slide-hero-text d-flex flex-column align-items-start">
                    <h1>
                      {sliderData
                        ? sliderData.title
                        : "Championing Possibilities, Building Brighter Horizons"}{" "}
                    </h1>
                    <p>
                      {sliderData
                        ? sliderData.content
                        : "Helping children and youth to thrive. This text could be " +
                          "significanlty longer Lorem ipsum dolor sit amet consectetur" +
                          "adipisicing elit. Dolor optio ab distinctio porro accusamus" +
                          "nisi aperiam, dolores quo, quae possimus laudantium? Debitis" +
                          "aperiam animi est iusto quis cupiditate! Aspernatur, maxime."}
                    </p>
                    <a href="/learnMore" className="btn btn-blue">
                      Learn More{" "}
                      <i className="fas fa-circle-arrow-right ml-3"></i>
                    </a>
                  </div>
                  <div className="gradient-black"></div>
                  <img
                    src={
                      sliderData && sliderData.image && sliderData.image !== ""
                        ? sliderData.image
                        : slider1
                    }
                    alt="Slide 1"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper-slide position-relative">
                  <div className="slide-hero-text d-flex flex-column align-items-start">
                    <h1>
                      {sliderData
                        ? sliderData.title
                        : "Championing Possibilities, Building Brighter Horizons"}{" "}
                    </h1>
                    <p>
                      {sliderData
                        ? sliderData.content
                        : "Helping children and youth to thrive. This text could be " +
                          "significanlty longer Lorem ipsum dolor sit amet consectetur" +
                          "adipisicing elit. Dolor optio ab distinctio porro accusamus" +
                          "nisi aperiam, dolores quo, quae possimus laudantium? Debitis" +
                          "aperiam animi est iusto quis cupiditate! Aspernatur, maxime."}
                    </p>
                    <a href="/learnMore" className="btn btn-blue">
                      Learn More{" "}
                      <i className="fas fa-circle-arrow-right ml-3"></i>
                    </a>
                  </div>
                  <div className="gradient-black"></div>
                  <video
                    className="video-background"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={videoURL}
                  ></video>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <a href="#">
          <div className="go-up-btn">
            <i className="fas fa-arrow-up"></i>
          </div>
        </a>
      </section>
    </>
  );
}
