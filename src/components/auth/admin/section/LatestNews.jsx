import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { englishConfig } from "../../../../services/joditConfigService";

import { toastError, toastSuccess } from "../../../../services/ToastService";
import { ToastContainer } from "react-toastify";
import {
  deleteEnglishNews,
  deleteNepaliNews,
  getAllLatestNews,
  saveEnglishLatestNews,
  saveNepaliLatestNews,
} from "../../../../services/api";

const LatestNews = () => {
  const editorRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState([]);
  const [formsFieldsEnglish, setformsFieldsEnglish] = useState({
    latestNews: [
      {
        _id: "",
        title: "",
        image: "",
        date: "",
        contentDescription: "",
        details: "",
      },
    ],
  });

  const [formsFieldsNepali, setformsFieldsNepali] = useState({
    latestNews: [
      {
        _id: "",
        title: "",
        image: "",
        date: "",
        contentDescription: "",
        details: "",
      },
    ],
  });

  const getAllNews = async () => {
    try {
      let res = await getAllLatestNews();
      if (res.data) {
        res.data.forEach((item) => {
          if (item.locale === "eng") {
            setformsFieldsEnglish((prevState) => ({
              ...prevState,
              latestNews: item.news,
            }));
          } else if (item.locale === "nep") {
            setformsFieldsNepali((prevState) => ({
              ...prevState,
              latestNews: item.news,
            }));
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnglishInputChange = (index, event) => {
    const { name, value } = event.target;
    setformsFieldsEnglish((prevState) => {
      const updatedLatestNews = [...prevState.latestNews];
      updatedLatestNews[index][name] = value;
      return { ...prevState, latestNews: updatedLatestNews };
    });
  };

  const handleNepaliInputChange = (index, event) => {
    const { name, value } = event.target;
    setformsFieldsNepali((prevState) => {
      const updatedLatestNews = [...prevState.latestNews];
      updatedLatestNews[index][name] = value;
      return { ...prevState, latestNews: updatedLatestNews };
    });
  };

  const handleAddlatestNews = () => {
    setformsFieldsEnglish({
      ...formsFieldsEnglish,
      latestNews: [
        ...formsFieldsEnglish.latestNews,
        {
          _id: "",
          image: "",
          Date: "",
          contentDescription: "",
          details: "",
        },
      ],
    });

    setformsFieldsNepali({
      ...formsFieldsNepali,
      latestNews: [
        ...formsFieldsNepali.latestNews,
        {
          _id: "",
          image: "",
          Date: "",
          contentDescription: "",
          details: "",
        },
      ],
    });
  };

  const handleRemovelatestNews = async (index, nepalinews, enslishnews) => {
    if (
      nepalinews._id &&
      nepalinews._id !== "" &&
      enslishnews._id &&
      enslishnews._id !== ""
    ) {
      await deleteNepaliNews(nepalinews._id);
      await deleteEnglishNews(enslishnews._id);

      removeWork(index);
    } else {
      removeWork(index);
    }
  };

  const removeWork = (index) => {
    const updatedEnglishNews = [...formsFieldsEnglish.latestNews];
    updatedEnglishNews.splice(index, 1);
    setformsFieldsEnglish({
      ...formsFieldsEnglish,
      latestNews: updatedEnglishNews,
    });

    const updatedNepaliNews = [...formsFieldsNepali.latestNews];
    updatedNepaliNews.splice(index, 1);
    setformsFieldsNepali({
      ...formsFieldsNepali,
      latestNews: updatedNepaliNews,
    });
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];

    setformsFieldsEnglish((prevState) => {
      const updatedLatestNews = [...prevState.latestNews];
      updatedLatestNews[index].image = file;
      return { ...prevState, latestNews: updatedLatestNews };
    });

    setformsFieldsNepali((prevState) => {
      const updatedLatestNews = [...prevState.latestNews];
      updatedLatestNews[index].image = file;
      return { ...prevState, latestNews: updatedLatestNews };
    });
  };

  useEffect(() => {
    setIsCollapsed(new Array(formsFieldsEnglish.latestNews.length).fill(true));
  }, [formsFieldsEnglish.latestNews.length]);

  useEffect(() => {
    getAllNews(); // Call getAlllatestNews function when the component mounts
  }, []);

  const toggleCollapse = (index) => {
    setIsCollapsed((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleSaveWork = async (index, e) => {
    e.preventDefault();
    try {
      if (formsFieldsEnglish) {
        const formData = new FormData();
        formData.append("title", formsFieldsEnglish.latestNews[index].title);
        formData.append("date", formsFieldsEnglish.latestNews[index].date);
        formData.append(
          "contentDescription",
          formsFieldsEnglish.latestNews[index].contentDescription
        );
        formData.append("image", formsFieldsEnglish.latestNews[index].image);
        formData.append(
          "details",
          formsFieldsEnglish.latestNews[index].details
        );
        formData.append("id", formsFieldsEnglish.latestNews[index]._id);
        await saveEnglishLatestNews(formData);
      }

      if (formsFieldsNepali) {
        const formData = new FormData();
        formData.append("title", formsFieldsNepali.latestNews[index].title);
        formData.append("date", formsFieldsNepali.latestNews[index].date);
        formData.append(
          "contentDescription",
          formsFieldsNepali.latestNews[index].contentDescription
        );
        formData.append("image", formsFieldsNepali.latestNews[index].image);
        formData.append("details", formsFieldsNepali.latestNews[index].details);
        formData.append("id", formsFieldsNepali.latestNews[index]._id);
        await saveNepaliLatestNews(formData);
      }
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastError();
    }
  };

  return (
    <main className="main">
      <div className="pagetitle">
        <h1>Latest News</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Auth</a>
            </li>
            <li className="breadcrumb-item">Components</li>
            <li className="breadcrumb-item active">Latest News</li>
          </ol>
        </nav>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                {formsFieldsEnglish.latestNews.map((news, index) => (
                  <>
                    <div key={index} className="parameters-container">
                      <div
                        className="parameters-header"
                        onClick={() => toggleCollapse(index)}
                      >
                        <span className="parameters-title">
                          {index + 1}. Latest News
                        </span>
                        <div className="icon-containers">
                          <button className="parameters-toggle-btn">
                            <i
                              onClick={handleAddlatestNews}
                              class="bi bi-plus-lg"
                            ></i>
                          </button>
                          <button className="parameters-toggle-btn">
                            <i
                              onClick={() =>
                                handleRemovelatestNews(
                                  index,
                                  formsFieldsNepali.latestNews[index],
                                  news
                                )
                              }
                              class="bi bi-trash3"
                            ></i>
                          </button>
                          <button
                            className="parameters-toggle-btn"
                            id={`toggleButton${index}`}
                          >
                            {isCollapsed[index] ? "\u25BC" : "\u25B2"}
                          </button>
                        </div>
                      </div>
                      <div
                        className="parameters-body"
                        id={`parametersBody${index}`}
                        style={{
                          display: isCollapsed[index] ? "none" : "block",
                        }}
                      >
                        <div className=" border border-dark rounded">
                          <div className="d-flex mt-3 container">
                            <h5 className="card-title">
                              {index + 1}. Latest News
                            </h5>
                            <hr className="border-2" />
                            <div className=" justify-content-end">
                              <button
                                onClick={(e) => handleSaveWork(index, e)}
                                className="btn btn-primary"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                          <div className=" row m-2 ">
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Image</label>
                              <input
                                type="file"
                                onChange={(e) => handleImageChange(index, e)}
                              />
                            </div>

                            <div className=" mb-3 col-md-6">
                              <img
                                style={{
                                  height: "200px",
                                  width: "300px",
                                  objectFit: "contain",
                                }}
                                src={news.image}
                                alt="uploaded image"
                              />
                            </div>

                            <div className="col-md-6">
                              <h4 className="card-title">English </h4>
                              <hr className="border-2" />
                              <div className=" mb-3">
                                <label className="form-label">Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={news.title}
                                  name="title"
                                  onChange={(e) =>
                                    handleEnglishInputChange(index, e)
                                  }
                                />
                              </div>
                              <div className=" mb-3">
                                <label className="form-label">Date</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={news.date}
                                  name="date"
                                  onChange={(e) =>
                                    handleEnglishInputChange(index, e)
                                  }
                                />
                              </div>
                              <div className=" mb-3">
                                <label className="form-label">
                                  Content Description
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={news.contentDescription}
                                  name="contentDescription"
                                  onChange={(e) =>
                                    handleEnglishInputChange(index, e)
                                  }
                                />
                              </div>
                              <div className=" mb-3">
                                <JoditEditor
                                  ref={editorRef}
                                  tabIndex={1}
                                  value={news.details}
                                  config={englishConfig}
                                  onChange={(content) =>
                                    handleEnglishInputChange(index, {
                                      target: {
                                        name: "details",
                                        value: content,
                                      },
                                    })
                                  }
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <h4 className="card-title">Nepali </h4>
                              <hr className="border-2" />
                              <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={
                                    formsFieldsNepali.latestNews[index].title
                                  }
                                  name="title"
                                  onChange={(e) =>
                                    handleNepaliInputChange(index, {
                                      target: {
                                        name: "title",
                                        value: e.target.value,
                                      },
                                    })
                                  }
                                />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">Date</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={
                                    formsFieldsNepali.latestNews[index].date
                                  }
                                  name="date"
                                  onChange={(e) =>
                                    handleNepaliInputChange(index, {
                                      target: {
                                        name: "date",
                                        value: e.target.value,
                                      },
                                    })
                                  }
                                />
                              </div>

                              <div className="mb-3">
                                <label className="form-label">
                                  Content Description
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={
                                    formsFieldsNepali.latestNews[index]
                                      .contentDescription
                                  }
                                  name="contentDescription"
                                  onChange={(e) =>
                                    handleNepaliInputChange(index, {
                                      target: {
                                        name: "contentDescription",
                                        value: e.target.value,
                                      },
                                    })
                                  }
                                />
                              </div>
                              <div className=" mb-3">
                                <JoditEditor
                                  ref={editorRef}
                                  tabIndex={1}
                                  value={
                                    formsFieldsNepali.latestNews[index].details
                                  }
                                  config={englishConfig}
                                  onChange={(content) =>
                                    handleNepaliInputChange(index, {
                                      target: {
                                        name: "details",
                                        value: content,
                                      },
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="m-3 d-flex justify-content-end  ">
                            <button
                              onClick={() =>
                                handleRemovelatestNews(
                                  index,
                                  formsFieldsNepali.latestNews[index],
                                  news
                                )
                              }
                              className="btn btn-primary"
                            >
                              Remove Work
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                  </>
                ))}

                <div className="mt-3 mb-3 d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    onClick={handleAddlatestNews}
                  >
                    Add Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
};

export default LatestNews;
