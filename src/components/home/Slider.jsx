import React, { useEffect, useState } from "react";
import {
  getEnglishSliderContent,
  getNepaliSliderContent,
} from "../../services/api";

import slider1 from "../../assets/img/slider-1.png";
import Swiper from "swiper";

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

        // Initialize Swiper after fetching data
        const swiper = new Swiper(".swiper-container", {
          speed: 400,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });

        return () => {
          swiper.destroy(true, true); // Cleanup Swiper instance
        };
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide position-relative">
              <div className="slide-hero-text d-flex flex-column align-items-start">
                <h1>
                  {englishData
                    ? englishData.title
                    : "Championing Possibilities, Building Brighter Horizons"}{" "}
                </h1>
                <p>
                  {englishData
                    ? englishData.content
                    : "Helping children and youth to thrive. This text could be " +
                      "significanlty longer Lorem ipsum dolor sit amet consectetur" +
                      "adipisicing elit. Dolor optio ab distinctio porro accusamus" +
                      "nisi aperiam, dolores quo, quae possimus laudantium? Debitis" +
                      "aperiam animi est iusto quis cupiditate! Aspernatur, maxime."}
                </p>
                <a href="/learnMore" className="btn btn-blue">
                  Learn More <i className="fas fa-circle-arrow-right ml-3"></i>
                </a>
              </div>
              <div className="gradient-black"></div>
              <img
                src={
                  englishData && englishData.image && englishData.image !== ""
                    ? englishData.image
                    : slider1
                }
                alt="Slide 1"
                className="img-fluid"
              />
            </div>
            <div className="swiper-slide position-relative">
              <div className="slide-hero-text d-flex flex-column align-items-start">
                <h1>Championing Possibilities, Building Brighter Horizons </h1>
                <p>
                  Helping children and youth to thrive. This text could be
                  significanlty longer Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolor optio ab distinctio porro accusamus
                  nisi aperiam, dolores quo, quae possimus laudantium? Debitis
                  aperiam animi est iusto quis cupiditate! Aspernatur, maxime.
                </p>
                <a href="about.html" className="btn btn-blue">
                  Learn More
                </a>
              </div>
              <div className="gradient-black"></div>
              <img src={slider1} alt="Slide 1" className="img-fluid" />
            </div>
            <div className="swiper-slide position-relative">
              <div className="slide-hero-text d-flex flex-column align-items-start">
                <h1>Championing Possibilities, Building Brighter Horizons </h1>
                <p>
                  Helping children and youth to thrive. This text could be
                  significanlty longer Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolor optio ab distinctio porro accusamus
                  nisi aperiam, dolores quo, quae possimus laudantium? Debitis
                  aperiam animi est iusto quis cupiditate! Aspernatur, maxime.
                </p>
                <a href="about.html" className="btn btn-blue">
                  Learn More
                </a>
              </div>
              <div className="gradient-black"></div>
              <img src={slider1} alt="Slide 1" className="img-fluid" />
            </div>
            <div className="swiper-slide position-relative">
              <div className="slide-hero-text d-flex flex-column align-items-start">
                <h1>Championing Possibilities, Building Brighter Horizons </h1>
                <p>
                  Helping children and youth to thrive. This text could be
                  significanlty longer Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolor optio ab distinctio porro accusamus
                  nisi aperiam, dolores quo, quae possimus laudantium? Debitis
                  aperiam animi est iusto quis cupiditate! Aspernatur, maxime.
                </p>
                <a href="/learnMore" className="btn btn-blue">
                  Learn More
                </a>
              </div>
              <div className="gradient-black"></div>
              <img src={slider1} alt="Slide 1" className="img-fluid" />
            </div>
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
