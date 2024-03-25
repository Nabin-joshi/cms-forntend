import React, { useEffect, useRef, useState } from "react";
import {
  getEnglishSliderContent,
  getNepaliSliderContent,
  saveEnglishSliderContent,
  saveNepaliSliderContent,
  saveSliderImage,
  saveSliderVideo,
} from "../../../../services/api";
import { toastError, toastSuccess } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";
import {
  englishConfig,
  nepaliConfig,
} from "../../../../services/joditConfigService";
import JoditEditor from "jodit-react";

function Slider() {
  const englishEditor = useRef(null);
  const nepaliEditor = useRef(null);
  const sliderImageRef = useRef(null);
  const sliderVideoRef = useRef(null);
  const showImageRef = useRef(true);

  const [imageURL, setImageURL] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const [englishFormContent, setEnglishFormContent] = useState({
    title: "Bringing Smile Back and Transforming Lives",
    content:
      "We ensure that persons with mental health conditions and psychosocial disabilities are included in the community and that they are not isolated or segregated from it.",
    learnMore: "",
    showImage: true,
  });

  const [nepaliFormContent, setNepaliFormContent] = useState({
    title: "मुस्कान फिर्ता ल्याउँदै र जीवन परिवर्तन गर्दै",
    content:
      "हामी सुनिश्चित गर्छौं कि मानसिक स्वास्थ्य अवस्था र मनोसामाजिक अपाङ्गता भएका व्यक्तिहरूलाई समुदायमा समावेश गरिएको छ र उनीहरूलाई यसबाट अलग वा अलग गरिएको छैन।",
    learnMore: "",
    showImage: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishSliderContent();
        const nepaliResponse = await getNepaliSliderContent();

        if (englishResponse && englishResponse.data.slider) {
          const { title, content, learnMore } = englishResponse.data.slider;
          setEnglishFormContent({ title, content, learnMore });
          setImageURL(englishResponse.data.slider.image);
          setVideoURL(englishResponse.data.slider.video);
        }

        if (nepaliResponse && nepaliResponse.data.slider) {
          const { title, content, learnMore } = nepaliResponse.data.slider;
          setNepaliFormContent({ title, content, learnMore });
        }
      } catch (error) {
        console.error("Error fetching slider content:", error);
        toastError();
      }
    };
    fetchData();

    const handleResize = () => setIsCollapsed(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const shouldUploadFile = (fileRef, fileType) => {
      if (!fileRef.current || fileRef.current.files.length === 0) {
        return false;
      }
      const file = fileRef.current.files[0];
      return file && file.type.startsWith(fileType + "/");
    };

    englishFormContent.showImage = showImageRef.current.checked;
    nepaliFormContent.showImage = showImageRef.current.checked;

    try {
      await saveContent(englishFormContent, saveEnglishSliderContent);
      await saveContent(nepaliFormContent, saveNepaliSliderContent);

      // Check and save image if valid
      if (shouldUploadFile(sliderImageRef, "image")) {
        await saveFile(sliderImageRef, saveSliderImage, "image");
      }

      // Check and save video if valid
      if (shouldUploadFile(sliderVideoRef, "video")) {
        await saveFile(sliderVideoRef, saveSliderVideo, "video");
      }

      toastSuccess();
    } catch (error) {
      console.error("Error saving slider content:", error);
      toastError();
    }
  };

  const saveContent = async (content, saveFunction) => {
    try {
      await saveFunction(content);
    } catch (error) {
      console.error("Error saving slider content:", error);
      throw error;
    }
  };

  const saveFile = async (fileRef, saveFunction, key) => {
    if (fileRef.current && fileRef.current.files[0]) {
      const formData = new FormData();
      formData.append(key, fileRef.current.files[0]);
      await saveFunction(formData);
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Slider</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">slider</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Slider Information</h5>
                  <hr className="border-2" />

                  <div className="parameters-container">
                    <div className="parameters-header" onClick={toggleCollapse}>
                      <span className="parameters-title">Parameters</span>
                      <button
                        className="parameters-toggle-btn"
                        id="toggleButton"
                      >
                        {isCollapsed ? "\u25BC" : "\u25B2"}{" "}
                      </button>
                    </div>
                    <div
                      className="parameters-body"
                      id="parametersBody"
                      style={{ display: isCollapsed ? "none" : "block" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="col-5">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">
                                {" "}
                                English Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="English Title"
                                value={englishFormContent.title}
                                onChange={(event) =>
                                  setEnglishFormContent((prevState) => ({
                                    ...prevState,
                                    title: event.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                English Content
                              </label>
                              <textarea
                                className="form-control"
                                value={englishFormContent.content}
                                onChange={(event) =>
                                  setEnglishFormContent((prevState) => ({
                                    ...prevState,
                                    content: event.target.value,
                                  }))
                                }
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                        </div>

                        <div className="col-5">
                          <form>
                            <div className="mb-3">
                              <label className="form-label">
                                {" "}
                                Nepali Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nepali Title"
                                value={nepaliFormContent.title}
                                onChange={(event) =>
                                  setNepaliFormContent((prevState) => ({
                                    ...prevState,
                                    title: event.target.value,
                                  }))
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Nepali Content
                              </label>
                              <textarea
                                className="form-control"
                                value={nepaliFormContent.content}
                                onChange={(event) =>
                                  setNepaliFormContent((prevState) => ({
                                    ...prevState,
                                    content: event.target.value,
                                  }))
                                }
                                rows="3"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="container m-2">
                        <div className=" form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked={englishFormContent.showImage}
                            ref={showImageRef}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            <h5>Show Only Image</h5>
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 sliderImage">
                          <img
                            src={imageURL}
                            alt="No Image"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                      <div className=" row">
                        <div className="col-12">
                          <div className=" col-6 mb-3">
                            <label
                              htmlFor="formFileImage"
                              className="form-label"
                            >
                              Upload Image
                            </label>
                            <input
                              className="form-control"
                              ref={sliderImageRef}
                              type="file"
                              id="formFileImage"
                              accept=".jpg,.jpeg,.png,.gif"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 videoContainer">
                          <video src={videoURL} controls />
                        </div>
                      </div>
                      <div className=" row">
                        <div className="col-12">
                          <div className="mb-3">
                            <label
                              htmlFor="formFileVideo"
                              className="form-label"
                            >
                              Upload Video
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="formFileVideo"
                              ref={sliderVideoRef}
                              accept=".mp4,.mkv,.3gp"
                            />
                          </div>
                        </div>
                      </div>

                      <h5 className="card-title text-center">
                        English Learn More Editor
                      </h5>
                      <hr className="border-2" />
                      <div>
                        <JoditEditor
                          ref={englishEditor}
                          value={englishFormContent.learnMore}
                          tabIndex={1}
                          config={englishConfig}
                          onBlur={(newContent) =>
                            setEnglishFormContent((prevState) => ({
                              ...prevState,
                              learnMore: newContent,
                            }))
                          }
                        />
                      </div>
                      <br />
                      <br />
                      <br />

                      <h5 className="card-title text-center">
                        Nepali Learn More Editor
                      </h5>
                      <hr className="border-2" />
                      <div>
                        <JoditEditor
                          ref={nepaliEditor}
                          value={nepaliFormContent.learnMore}
                          tabIndex={1}
                          config={nepaliConfig}
                          onBlur={(newContent) =>
                            setNepaliFormContent((prevState) => ({
                              ...prevState,
                              learnMore: newContent,
                            }))
                          }
                        />
                      </div>

                      <div
                        style={{ marginTop: "50px" }}
                        className="d-flex justify-content-center"
                      >
                        <button
                          onClick={onSubmit}
                          type="submit"
                          className="btn btn-primary "
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default Slider;
