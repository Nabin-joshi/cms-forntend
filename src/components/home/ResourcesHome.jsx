import React, { useEffect, useState } from "react";
import { getResourcesData } from "../../services/resourcesService";
import { useParams } from "react-router-dom";
import { getResourcesImages } from "../../services/api";
import coverImage from "../../assets/img/cover.jpg";

export const ResourcesHome = () => {
  const [media, setMedia] = useState("");
  const [newsAndPressRelease, setNewsAndPressRelease] = useState("");
  const [events, setEvents] = useState("");
  const [digitalLibrary, setDigitalLibrary] = useState("");
  const [transformingLives, setTransformingLives] = useState("");
  const [blog, setBlog] = useState("");
  const [locale, setLocale] = useState("nep");
  let { fieldName } = useParams();
  const [currentLocale, setcurrentLocale] = useState("EN");
  const [navbarImages, setNavBarImages] = useState();

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

    let currentLocale = localStorage.getItem("locale")
      ? localStorage.getItem("locale") === "eng"
        ? "EN"
        : "NP"
      : "EN";
    setcurrentLocale(currentLocale);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getResourcesImages();
      const resData = res.data;
      if (resData) {
        setNavBarImages(resData);
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="about-us-section ">
        {fieldName === "vacancy" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.vacancy
                  ? navbarImages.vacancy
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Media" : "मिडिया"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "procurement" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.procurement
                  ? navbarImages.procurement
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Resources" : "स्रोतहरू"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "volunteer" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.volunteer
                  ? navbarImages.volunteer
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Resources" : "स्रोतहरू"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "digitalLibrary" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.digitalLibrary
                  ? navbarImages.digitalLibrary
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Resources" : "स्रोतहरू"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "lives" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.transformingLives
                  ? navbarImages.transformingLives
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Resources" : "स्रोतहरू"}
              </h1>
            </div>
          </div>
        )}

        {fieldName === "blog" && (
          <div
            className="banner"
            style={{
              backgroundImage: `url(${
                navbarImages && navbarImages.blog
                  ? navbarImages.blog
                  : coverImage
              })`,
            }}
          >
            <div className="banner-content">
              <h1 className="text-white text-center">
                {" "}
                {currentLocale === "EN" ? "Resources" : "स्रोतहरू"}
              </h1>
            </div>
          </div>
        )}

        <div className="container">
          <div className="">
            <div className="card-body">
              {fieldName && fieldName === "vacancy" && (
                <>
                  <h3>{currentLocale === "EN" ? "Vacancy" : "रिक्ति"}</h3>
                  <p dangerouslySetInnerHTML={{ __html: media }}></p>
                </>
              )}

              {fieldName && fieldName === "procurement" && (
                <>
                  <h3>{currentLocale === "EN" ? "News" : "समाचार"} </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: newsAndPressRelease }}
                  ></p>

                  <>
                    <h3>{currentLocale === "EN" ? "Events" : "कार्यक्रम"} </h3>
                    <p dangerouslySetInnerHTML={{ __html: events }}></p>
                  </>
                </>
              )}

              {fieldName && fieldName === "digitalLibrary" && (
                <>
                  <div>
                    <h3>
                      {currentLocale === "EN"
                        ? "Digital Library"
                        : "डिजिटल पुस्तकालय"}
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: digitalLibrary }}></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "lives" && (
                <>
                  <div>
                    <h3>
                      {currentLocale === "EN" ? "Publications" : "प्रकाशन"}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: transformingLives }}
                    ></p>
                  </div>
                </>
              )}

              {fieldName && fieldName === "blog" && (
                <>
                  <div>
                    <h3>{currentLocale === "EN" ? "Blog" : "ब्लग"}</h3>
                    <p dangerouslySetInnerHTML={{ __html: blog }}></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
