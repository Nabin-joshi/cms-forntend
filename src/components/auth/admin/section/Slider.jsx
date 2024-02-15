import React, { useEffect, useState } from "react";
// import { SketchPicker } from "react-color";
import {
  getEnglishSliderContent,
  getNepaliSliderContent,
  saveEnglishSliderContent,
  saveNepaliSliderContent,
} from "../../../../services/api";
import { toastError, toastSuccess } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";

function Slider() {
  // const [color, setColor] = useState("#aabbcc");
  const [englishFormContent, setEnglishFormContent] = useState({
    title: "Bringing Smile Back and Transforming Lives ",
    content:
      "We ensure that persons with mental health conditions and psychosocial disabilities are included in the community and that they are not isolated or segregated from it.",
    learnMore: "",
  });

  const [nepaliFormContent, setNepaliFormContent] = useState({
    title: "मुस्कान फिर्ता ल्याउँदै र जीवन परिवर्तन गर्दै",
    content:
      "हामी सुनिश्चित गर्छौं कि मानसिक स्वास्थ्य अवस्था र मनोसामाजिक अपाङ्गता भएका व्यक्तिहरूलाई समुदायमा समावेश गरिएको छ र उनीहरूलाई यसबाट अलग वा अलग गरिएको छैन।",
    lernMore: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const englishResponse = await getEnglishSliderContent();

        const nepaliResponse = await getNepaliSliderContent();

        if (englishResponse) {
          setEnglishFormContent({
            title: englishResponse.data.slider.title,
            content: englishResponse.data.slider.content,
          });
        }
        if (nepaliResponse) {
          setNepaliFormContent({
            title: nepaliResponse.data.slider.title,
            content: nepaliResponse.data.slider.content,
          });
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  let data = {
    title: "",
    content: "",
    author: "6599a99853629133eee6477d",
    learnMore: "",
  };

  const onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (englishFormContent) {
      data.title = englishFormContent.title;
      data.content = englishFormContent.content;
      data.learnMore = englishFormContent.learnMore;

      let response;

      try {
        response = await saveEnglishSliderContent(data);
        if (response) {
          toastSuccess();
        } else {
          toastError();
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (nepaliFormContent) {
      data.title = nepaliFormContent.title;
      data.content = nepaliFormContent.content;
      data.learnMore = nepaliFormContent.lernMore;

      let response;

      try {
        response = await saveNepaliSliderContent(data);
        if (response) {
          toastSuccess();
        } else {
          toastError();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Services</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">services</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Services Rich Text Editor</h5>
                  <hr className="border-2" />

                  <div className="d-flex justify-content-between">
                    <div className="col-5">
                      <form>
                        <div className="mb-3">
                          <label className="form-label"> English Title</label>
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
                          <label className="form-label">English Content</label>
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
                          <label className="form-label"> Nepali Title</label>
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
                          <label className="form-label">Nepali Content</label>
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
                  {/* <div>
                    <label className="form-label">Read More Button Color</label>
                    <SketchPicker color={color} onChange={setColor} />
                  </div> */}

                  <div className=" row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                          Upload Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="image">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className=" row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                          Upload Video
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="image">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="d-flex justify-content-center"
                  >
                    <button
                      onClick={(e) => onSubmit(e)}
                      type="button"
                      className="btn btn-primary "
                    >
                      Save
                    </button>
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
