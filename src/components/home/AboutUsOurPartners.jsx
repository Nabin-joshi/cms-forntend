import React, { useEffect, useState } from "react";
import { getAboutUsImages } from "../../services/api";
import coverImage from "../../assets/img/cover.jpg";
import { getOurPartnerHeading } from "../../services/ourPartnerService";

const AboutUsOurPartners = () => {
  const [aboutUsImages, setAboutUsImages] = useState();
  const [currentLocale, setcurrentLocale] = useState("EN");
  const [ourPartners, setourPartners] = useState({});

  const fetchData = async () => {
    try {
      const res = await getAboutUsImages();
      const resData = res.data;
      if (resData) {
        setAboutUsImages(resData);
      }

      const response = await getOurPartnerHeading();
      setourPartners(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    let currentLocale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setcurrentLocale(currentLocale);
  }, []);

  return (
    <>
      <section className="about-us-section ">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${
              aboutUsImages && aboutUsImages.aboutUsOurPartners
                ? aboutUsImages.aboutUsOurPartners
                : coverImage
            })`,
          }}
        >
          <div className="banner-content">
            <h1 className="text-white text-center">
              {currentLocale === "EN" ? "About Koshish" : "कोशिश बारेमा"}
            </h1>
          </div>
        </div>

        <div className="container">
          <div>
            <div className="card-body">
              <h1 className="text-center text-blue">
                {currentLocale === "EN" ? "Our Partners" : "हाम्रा साझेदारहरू"}{" "}
              </h1>
              <div className="row mt-5">
                {ourPartners && ourPartners.contents
                  ? ourPartners.contents.map((item, index) => (
                      <div
                        key={index}
                        className="col-12 col-lg-3 d-flex flex-column align-items-center"
                      >
                        <img
                          src={item.icon ? item.icon : ""}
                          alt=""
                          className="testimonials-img"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsOurPartners;
