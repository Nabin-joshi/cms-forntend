import React, { useEffect, useRef, useState } from "react";
import {
  getAllPopupPage,
  savePopupPageEnglish,
  savePopupPageNepali,
} from "../../../../services/api";
import {
  englishConfig,
  nepaliConfig,
} from "../../../../services/joditConfigService";
import JoditEditor from "jodit-react";
import { toastSuccess } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";

const PopupPage = () => {
  const englishEditor = useRef(null);
  const nepaliEditor = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  const [englishFormContent, setEnglishFormContent] = useState({
    heading: "Bringing Smile Back and Transforming Lives",
    content:
      "We ensure that persons with mental health conditions and psychosocial disabilities are included in the community and that they are not isolated or segregated from it.",
    showPopup: true,
  });

  const [nepaliFormContent, setNepaliFormContent] = useState({
    heading: "मुस्कान फिर्ता ल्याउँदै र जीवन परिवर्तन गर्दै",
    content:
      "हामी सुनिश्चित गर्छौं कि मानसिक स्वास्थ्य अवस्था र मनोसामाजिक अपाङ्गता भएका व्यक्तिहरूलाई समुदायमा समावेश गरिएको छ र उनीहरूलाई यसबाट अलग वा अलग गरिएको छैन।",
    showPopup: true,
  });

  const getPopupPageData = async () => {
    try {
      let res = await getAllPopupPage();
      if (res.data) {
        res.data.forEach((item) => {
          if (item.locale === "eng") {
            if (item.showPopup === "true") {
              setShowPopup(true);
            } else {
              setShowPopup(false);
            }
            setEnglishFormContent((prevState) => ({
              ...prevState,
              heading: item.heading,
              content: item.content,
              showPopup: item.showPopup,
            }));
          } else if (item.locale === "nep") {
            setNepaliFormContent((prevState) => ({
              ...prevState,
              heading: item.heading,
              content: item.content,
              showPopup: item.showPopup,
            }));
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPopupPageData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (englishFormContent) {
      await savePopupPageEnglish(englishFormContent);
      toastSuccess();
    }

    if (nepaliFormContent) {
      await savePopupPageNepali(nepaliFormContent);
      toastSuccess();
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setShowPopup(!showPopup); // Toggle the checkbox state
    // Update both showPopup states
    setEnglishFormContent((prevState) => ({
      ...prevState,
      showPopup: !showPopup,
    }));
    setNepaliFormContent((prevState) => ({
      ...prevState,
      showPopup: !showPopup,
    }));
  };

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Popup</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Popup</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add New Popup Data</h5>
                  <hr className="border-2" />

                  <div className="container m-2">
                    <div className=" form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked={showPopup}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <h5>Show Popup</h5>
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between col-md-12">
                    <div className="col-6">
                      <form>
                        <div className="mb-3">
                          <label className="form-label"> English Heading</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="English Title"
                            value={englishFormContent.heading}
                            onChange={(event) =>
                              setEnglishFormContent((prevState) => ({
                                ...prevState,
                                heading: event.target.value,
                              }))
                            }
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-6">
                      <form>
                        <div className="mb-3">
                          <label className="form-label"> Nepali Heading</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nepali Title"
                            value={nepaliFormContent.heading}
                            onChange={(event) =>
                              setNepaliFormContent((prevState) => ({
                                ...prevState,
                                heading: event.target.value,
                              }))
                            }
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row"></div>
                  <h5 className="card-title text-center">English Content</h5>
                  <hr className="border-2" />
                  <div>
                    <JoditEditor
                      ref={englishEditor}
                      value={englishFormContent.content}
                      tabIndex={1}
                      config={englishConfig}
                      onBlur={(newContent) =>
                        setEnglishFormContent((prevState) => ({
                          ...prevState,
                          content: newContent,
                        }))
                      }
                    />
                  </div>
                  <br />
                  <br />
                  <br />

                  <h5 className="card-title text-center">Nepali Content</h5>
                  <hr className="border-2" />
                  <div>
                    <JoditEditor
                      ref={nepaliEditor}
                      value={nepaliFormContent.content}
                      tabIndex={1}
                      config={nepaliConfig}
                      onBlur={(newContent) =>
                        setNepaliFormContent((prevState) => ({
                          ...prevState,
                          content: newContent,
                        }))
                      }
                    />
                  </div>
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
        </section>
      </main>
      <ToastContainer />
    </>
  );
};

export default PopupPage;
