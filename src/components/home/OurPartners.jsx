import React, { useEffect, useState } from "react";
import { getOurPartnerHeading } from "../../services/ourPartnerService";

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
      <section class="pt-5 bg-white">
        <div class="container position-relative ">
          <h2 class="heading text-center text-blue">
            {ourPartners && ourPartners.heading}/
            {ourPartners && ourPartners.headingNepali}
          </h2>
          <div class="partners-slider">
            <div class="swiper-container2">
              <div class="swiper-wrapper">
                {ourPartners &&
                  ourPartners.contents &&
                  ourPartners.contents.map((data, index) => {
                    return (
                      <div class="swiper-slide">
                        <img
                          src={data.icon}
                          alt="Partner 1"
                          class="img-fluid"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
