import React, { useEffect, useState } from "react";
import { getResourcesData } from "../../services/resourcesService";
import { useParams } from "react-router-dom";

export const ResourcesHome = () => {
  const [media, setMedia] = useState("");
  const [newsAndPressRelease, setNewsAndPressRelease] = useState("");
  const [events, setEvents] = useState("");
  const [digitalLibrary, setDigitalLibrary] = useState("");
  const [transformingLives, setTransformingLives] = useState("");
  const [blog, setBlog] = useState("");
  const [locale, setLocale] = useState("nep");
  let { fieldName } = useParams();

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
      <section className="about-us-section my-3">
        <div className="container">
          <div className="card">
            <div className="card-body">
              {fieldName && fieldName === "vacancy" && (
                <>
                  <h3 className="text-center mt-3">Vacancy</h3>
                  <p dangerouslySetInnerHTML={{ __html: media }}></p>
                </>
              )}

              {fieldName && fieldName === "procurement" && (
                <>
                  <h3 className="text-center mt-3">Procurement </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: newsAndPressRelease }}
                  ></p>
                </>
              )}

              {fieldName && fieldName === "volunteer" && (
                <>
                  <div className="card p-3 mt-3">
                    <h3 className="text-center mt-3">Volunteer </h3>
                    <p dangerouslySetInnerHTML={{ __html: events }}></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "digitalLibrary" && (
                <>
                  <div className="card p-3 mt-3">
                    <h3 className="text-center mt-3">Digital Library</h3>
                    <p dangerouslySetInnerHTML={{ __html: digitalLibrary }}></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "lives" && (
                <>
                  <div className="card p-3 mt-3">
                    <h3 className="text-center mt-3">Transforming Lives</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: transformingLives }}
                    ></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "blog" && (
                <>
                  <div className="card p-3 mt-3">
                    <h3 className="text-center mt-3">Blog</h3>
                    <p dangerouslySetInnerHTML={{ __html: blog }}></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
