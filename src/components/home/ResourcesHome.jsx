import React, { useEffect, useState } from "react";
import { getResourcesData } from "../../services/resourcesService";

export const ResourcesHome = () => {
  const [media, setMedia] = useState("");
  const [newsAndPressRelease, setNewsAndPressRelease] = useState("");
  const [events, setEvents] = useState("");
  const [digitalLibrary, setDigitalLibrary] = useState("");
  const [transformingLives, setTransformingLives] = useState("");
  const [blog, setBlog] = useState("");
  const [locale, setLocale] = useState("nep");
  const stateDatas = {
    media: setMedia,
    newsAndPressRelease: setNewsAndPressRelease,
    events: setEvents,
    digitalLibrary: setDigitalLibrary,
    transformingLives: setTransformingLives,
    blog: setBlog,
  };

  const stateKeys = Object.keys(stateDatas);

  useEffect(() => {
    async function fetchResourceData(field, locale = "") {
      try {
        const res = await getResourcesData(field + locale);
        const stateData = res.data.data;
        const stateFunc = stateDatas[field];
        stateFunc(stateData[field + locale]);
      } catch (error) {}
    }

    stateKeys.forEach((state) => {
      if (locale.toLocaleLowerCase() === "eng") {
        fetchResourceData(state);
      } else if (locale.toLowerCase() === "nep") {
        fetchResourceData(state, "Nepali");
      }
    });
  }, []);

  return (
    <div>
      <section class="about-us-section my-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h3 class="text-center mt-3 ">Vacancy</h3>
              <p dangerouslySetInnerHTML={{ __html: media }}>{}</p>

              <h3 class="text-center mt-3">Procurement </h3>
              <p dangerouslySetInnerHTML={{ __html: newsAndPressRelease }}></p>

              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Volunteer </h3>
                <p dangerouslySetInnerHTML={{ __html: events }}></p>
              </div>
              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Digital Library</h3>
                <p dangerouslySetInnerHTML={{ __html: digitalLibrary }}></p>
              </div>
              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Transforming Lives</h3>
                <p dangerouslySetInnerHTML={{ __html: transformingLives }}></p>
              </div>
              <div class="card p-3 mt-3">
                <h3 class="text-center mt-3">Blog</h3>
                <p dangerouslySetInnerHTML={{ __html: blog }}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
