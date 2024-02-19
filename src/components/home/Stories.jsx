import React, { useEffect, useState } from "react";
import { getStories } from "../../services/storiesService";
import styles from "./Stories.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Stories = () => {
  const [story, setStory] = useState();

  async function fetchStories() {
    try {
      const response = await getStories();
      console.log(response);
      setStory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      <div className={`row ${styles["storyHeading"]}`}>
        <b>{story && story.heading}</b>
      </div>
      <div className="container">
        <div className="row pl-3">
          {story &&
            story.contents.map((item, index) => (
              <div className="col-md-4">
                <div
                  class="card "
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "15px",
                    alignItems: "center ",
                    paddingTop: "10px",
                    textAlign: "center",
                    height: "361px",
                    border: "0px",
                  }}
                >
                  <img
                    className={`card-img-top ${styles["story-person-image"]} `}
                    src={`${item.image}`}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text">
                      <b className={`text-muted ${styles.personName}`}>
                        {item.person}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div className={`row ${styles["center-text"]}`}>
          <button>{story && story.heading}</button>
        </div> */}
        <div
          className={`row   ${styles["center-text"]}`}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <button
            className={`${styles["readMoreBtn"]}`}
            // style={{
            //   width: "20%",
            //   padding: "10px 20px", // Adjust padding as needed
            //   border: "2px solid blue",
            //   borderRadius: "20px", // Adjust border radius to your preference
            //   backgroundColor: "white",
            //   color: "blue",
            //   fontSize: "16px", // Adjust font size as needed
            //   cursor: "pointer",
            //   transition:
            //     "background-color 0.3s, color 0.3s, border-color 0.3s", // Add transition for smooth hover effect
            // }}
          >
            Read More <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Stories;
