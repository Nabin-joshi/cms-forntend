import React, { useEffect, useState } from "react";
import { getStories } from "../../services/storiesService";
import styles from "./Stories.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Stories = () => {
  const [story, setStory] = useState();

  async function fetchStories() {
    try {
      const response = await getStories();
      setStory(response.data.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      <section class="testimonials">
        <div class="testimonials-topbar text-center">
          <div class="container">
            <span class="text-white">Want to experience a change?</span>
            <span class="text-yellow topbar-underline">
              Read impact stories at{" "}
              <a href="#" class="font-weight-bold text-yellow">
                Transforming Lives
              </a>
            </span>{" "}
            <span>{story && story.heading}</span>
          </div>
        </div>
        <div class="container">
          <div class="row mt-5">
            {story &&
              story.contents.map((item, index) => (
                <div class="col-12 col-lg-3 d-flex flex-column align-items-center">
                  <img src={`${item.image}`} alt="" class="testimonials-img" />
                  <p class="text-center mt-2">
                    {" "}
                    {item.desc}/{item.descNepali}
                  </p>
                  <h4 class="font-weight-bold text-blue">
                    {item.person}/{item.personNepali}
                  </h4>
                </div>
              ))}
          </div>
          <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-blue-inverted mt-3">
              Read More <i class="fas fa-circle-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
