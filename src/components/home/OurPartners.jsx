import React, { useEffect, useState } from "react";
import { getOurPartnerHeading } from "../../services/ourPartnerService";
import partnersImage1 from "../../assets/img/partner-1.png";
import partnersImage2 from "../../assets/img/partner-2.png";
import partnersImage3 from "../../assets/img/partner-3.png";
import partnersImage4 from "../../assets/img/partner-4.png";
import partnersImage5 from "../../assets/img/partner-5.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
const OurPartners = () => {
  const [ourPartners, setourPartners] = useState({});

  async function fetchAllourPartners() {
    try {
      const response = await getOurPartnerHeading();
      setourPartners(response.data.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllourPartners();
  }, []);
  return (
    <>
      <section className="pt-5 bg-white">
        <div className="container position-relative ">
          <h2 className="heading text-center text-blue">Our Partners</h2>
          <div className="partners-slider">
            <div className="swiper-container2">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  modules={[Navigation]}
                  navigation={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },

                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },

                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                  }}
                >
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage1}
                        alt="Partner 1"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage2}
                        alt="Partner 2"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage3}
                        alt="Partner 3"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage4}
                        alt="Partner 4"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage5}
                        alt="Partner 5"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <img
                        src={partnersImage5}
                        alt="Partner 6"
                        className="img-fluid"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
