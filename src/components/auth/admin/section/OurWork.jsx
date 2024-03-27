import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { englishConfig } from "../../../../services/joditConfigService";
import { saveEnglishOurWork } from "../../../../services/api";

const OurWork = () => {
  const editorRef = useRef(null);
  const imageRef = useRef();
  const [isCollapsed, setIsCollapsed] = useState([]);
  const [formsFieldsEnglish, setformsFieldsEnglish] = useState({
    description: "",
    ourWork: [
      {
        _id: "",
        header: "",
        image: "",
        details: "",
      },
    ],
  });

  const [formsFieldsNepali, setformsFieldsNepali] = useState({
    description: "",
    ourWork: [
      {
        _id: "",
        header: "",
        image: "",
        details: "",
      },
    ],
  });

  const handleEnglishInputChange = (index, event) => {
    const { name, value } = event.target;
    setformsFieldsEnglish((prevState) => {
      const updatedOurWork = [...prevState.ourWork];
      updatedOurWork[index][name] = value;
      return { ...prevState, ourWork: updatedOurWork };
    });
  };

  const handleNepaliInputChange = (index, event) => {
    const { name, value } = event.target;
    setformsFieldsNepali((prevState) => {
      const updatedOurWork = [...prevState.ourWork];
      updatedOurWork[index][name] = value;
      return { ...prevState, ourWork: updatedOurWork };
    });
  };

  const handleAddOurWork = () => {
    setformsFieldsEnglish({
      ...formsFieldsEnglish,
      ourWork: [
        ...formsFieldsEnglish.ourWork,
        {
          _id: "",
          header: "",
          image: "",
          details: "",
        },
      ],
    });

    setformsFieldsNepali({
      ...formsFieldsNepali,
      ourWork: [
        ...formsFieldsNepali.ourWork,
        {
          _id: "",
          header: "",
          image: "",
          details: "",
        },
      ],
    });
  };

  const handleRemoveOurWork = (index) => {
    const updatedEnglishOurWork = [...formsFieldsEnglish.ourWork];
    updatedEnglishOurWork.splice(index, 1);
    setformsFieldsEnglish({
      ...formsFieldsEnglish,
      ourWork: updatedEnglishOurWork,
    });

    const updatedNepaliOurWork = [...formsFieldsNepali.ourWork];
    updatedNepaliOurWork.splice(index, 1);
    setformsFieldsNepali({
      ...formsFieldsNepali,
      ourWork: updatedNepaliOurWork,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formsFieldsEnglish);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];

    setformsFieldsEnglish((prevState) => {
      const updatedOurWork = [...prevState.ourWork];
      updatedOurWork[index].image = file;
      return { ...prevState, ourWork: updatedOurWork };
    });

    setformsFieldsNepali((prevState) => {
      const updatedOurWork = [...prevState.ourWork];
      updatedOurWork[index].image = file;
      return { ...prevState, ourWork: updatedOurWork };
    });
  };

  useEffect(() => {
    setIsCollapsed(new Array(formsFieldsEnglish.ourWork.length).fill(true));
  }, [formsFieldsEnglish.ourWork.length]);

  const toggleCollapse = (index) => {
    setIsCollapsed((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleSaveWork = async (index, e) => {
    e.preventDefault();
    if (formsFieldsEnglish) {
      const formData = new FormData();
      formData.append("header", formsFieldsEnglish.ourWork[index].header);
      formData.append("image", formsFieldsEnglish.ourWork[index].image);
      formData.append("details", formsFieldsEnglish.ourWork[index].details);
      formData.append("id", formsFieldsEnglish.ourWork[index]._id);
      await saveEnglishOurWork(formData);
    }

    if (formsFieldsNepali) {
    }
  };

  return (
    <main className="main">
      <div className="pagetitle">
        <h1>Our Work</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Auth</a>
            </li>
            <li className="breadcrumb-item">Components</li>
            <li className="breadcrumb-item active">Our Work</li>
          </ol>
        </nav>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="mt-3 mb-3 d-flex justify-content-end">
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <h4 className="card-title">English </h4>
                    <hr className="border-2" />
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formsFieldsEnglish.description}
                        onChange={(e) =>
                          setformsFieldsEnglish({
                            ...formsFieldsEnglish,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">Nepali </h4>
                    <hr className="border-2" />
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formsFieldsNepali.description}
                        onChange={(e) =>
                          setformsFieldsNepali({
                            ...formsFieldsNepali,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {formsFieldsEnglish.ourWork.map((work, index) => (
                  <>
                    <div key={index} className="parameters-container">
                      <div
                        className="parameters-header"
                        onClick={() => toggleCollapse(index)}
                      >
                        <span className="parameters-title">
                          {index + 1}. Our Work
                        </span>
                        <div className="icon-containers">
                          <button className="parameters-toggle-btn">
                            <i
                              onClick={handleAddOurWork}
                              class="bi bi-plus-lg"
                            ></i>
                          </button>
                          <button className="parameters-toggle-btn">
                            <i
                              onClick={() => handleRemoveOurWork(index)}
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
                              {index + 1}. Our Work
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
                                src="http://localhost:5000/public/images/1709872939105-Wallpaper.jpg"
                                alt="uploaded image"
                              />
                            </div>

                            <div className="col-md-6">
                              <h4 className="card-title">English </h4>
                              <hr className="border-2" />
                              <div className=" mb-3">
                                <label className="form-label">Heading</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={work.header}
                                  name="header"
                                  onChange={(e) =>
                                    handleEnglishInputChange(index, e)
                                  }
                                />
                              </div>
                              <div className=" mb-3">
                                <JoditEditor
                                  ref={editorRef}
                                  tabIndex={1}
                                  value={formsFieldsEnglish.details}
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
                                <label className="form-label">Heading</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={
                                    formsFieldsNepali.ourWork[index].header
                                  }
                                  name="header"
                                  onChange={(e) =>
                                    handleNepaliInputChange(index, {
                                      target: {
                                        name: "header",
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
                                    formsFieldsNepali.ourWork[index].details
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
                              onClick={() => handleRemoveOurWork(index)}
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
                    onClick={handleAddOurWork}
                  >
                    Add Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
