import React, { useEffect, useState } from "react";
import { getStories } from "../../services/storiesService";

const Stories = () => {
  const [stories, setStories] = useState([]);

  async function fetchStories() {
    try {
      const response = await getStories();
      console.log(response);
      setStories(response.data.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      <div className="row"></div>
      <div className="row pl-3">
        {stories.map((item, index) => (
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src={`http://localhost:${item.image}`}
                alt="Card image cap"
              />
              <video controls className="card-img-top">
                <source
                  src={`http://localhost:${item.image}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{item.image}</p>
                <p class="card-text">
                  <small class="text-muted">{item.person}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row"></div>
    </>
  );
};

export default Stories;
