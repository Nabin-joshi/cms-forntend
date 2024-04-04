import React, { useEffect, useState } from "react";
import { getStories } from "../../services/storiesService";
import testimonialsImage1 from "../../assets/img/testimonials-1.png";
import testimonialsImage2 from "../../assets/img/testimonials-2.png";
import testimonialsImage3 from "../../assets/img/testimonials-3.png";
import testimonialsImage4 from "../../assets/img/testimonials-4.png";

const Stories = () => {
  const [stories, setStories] = useState();
  const [locale, setLocale] = useState("eng");

  async function fetchStories() {
    try {
      const response = await getStories();
      setStories(response.data.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
    let locale = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "eng";
    setLocale(locale);
    fetchStories();
  }, []);

  return (
    <>
      <section className="testimonials">
        <div className="testimonials-topbar text-center">
          <div className="container">
            <span className="text-white">Want to experience a change?</span>
            <span className="text-yellow topbar-underline">
              Read impact stories at{" "}
              <a href="#" className="font-weight-bold text-yellow">
                Transforming Lives
              </a>
            </span>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            {stories && stories.contents ? (
              stories.contents.map((story, index) => (
                <div
                  key={index}
                  className="col-12 col-lg-3 d-flex flex-column align-items-center"
                >
                  <img src={story.image} alt="" className="testimonials-img" />
                  <p className="text-center mt-2">
                    {locale
                      ? locale === "eng"
                        ? story.desc
                        : story.descNepali
                      : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque impedit accusamus at quia voluptas reiciendismolestias consequatur porro ea maxime cum numquam est nobisassumenda quos ad, ex voluptatibus magni?"}
                  </p>
                  <h4 className="font-weight-bold text-blue">
                    {" "}
                    {locale
                      ? locale === "eng"
                        ? story.person
                        : story.personNepali
                      : "John Doe"}
                  </h4>
                </div>
              ))
            ) : (
              <>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                  <img
                    src={testimonialsImage1}
                    alt=""
                    className="testimonials-img"
                  />
                  <p className="text-center mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque impedit accusamus at quia voluptas reiciendis
                    molestias consequatur porro ea maxime cum numquam est nobis
                    assumenda quos ad, ex voluptatibus magni?
                  </p>
                  <h4 className="font-weight-bold text-blue">John Doe</h4>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                  <img
                    src={testimonialsImage2}
                    alt=""
                    className="testimonials-img"
                  />
                  <p className="text-center mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque impedit accusamus at quia voluptas reiciendis
                    molestias consequatur porro ea maxime cum numquam est nobis
                    assumenda quos ad, ex voluptatibus magni?
                  </p>
                  <h4 className="font-weight-bold text-blue">John Doe</h4>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                  <img
                    src={testimonialsImage3}
                    alt=""
                    className="testimonials-img"
                  />
                  <p className="text-center mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque impedit accusamus at quia voluptas reiciendis
                    molestias consequatur porro ea maxime cum numquam est nobis
                    assumenda quos ad, ex voluptatibus magni?
                  </p>
                  <h4 className="font-weight-bold text-blue">John Doe</h4>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                  <img
                    src={testimonialsImage4}
                    alt=""
                    className="testimonials-img"
                  />
                  <p className="text-center mt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque impedit accusamus at quia voluptas reiciendis
                    molestias consequatur porro ea maxime cum numquam est nobis
                    assumenda quos ad, ex voluptatibus magni?
                  </p>
                  <h4 className="font-weight-bold text-blue">John Doe</h4>
                </div>
              </>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <a href="/stories/readmore" className="btn btn-blue-inverted mt-3">
              Read More <i className="fas fa-circle-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
