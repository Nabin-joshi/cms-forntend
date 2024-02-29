import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { englishConfig } from "../../../../services/joditConfigService";

const OurWork = () => {
  const editorRef = useRef(null);
  const [formsFieldsEnglish, setformsFieldsEnglish] = useState({
    description: "",
    ourWork: [
      {
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
        header: "",
        image: "",
        details: "",
      },
    ],
  });

  const handleEnglishInputChange = (index, event) => {
    const { name, value, files } = event.target;
    const updatedOurWork = [...formsFieldsEnglish.ourWork];
    if (name === "image" && files && files[0]) {
      updatedOurWork[index][name] = URL.createObjectURL(files[0]);
      updatedOurWork[index]["image"] = files[0]; // Store the file object itself
    } else {
      updatedOurWork[index][name] = value;
    }
    setformsFieldsEnglish({ ...formsFieldsEnglish, ourWork: updatedOurWork });
  };

  const handleNepaliInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedOurWork = [...formsFieldsNepali.ourWork];
    updatedOurWork[index][name] = value;
    setformsFieldsEnglish({ ...formsFieldsNepali, ourWork: updatedOurWork });
  };

  const handleAddOurWork = () => {
    setformsFieldsEnglish({
      ...formsFieldsEnglish,
      ourWork: [
        ...formsFieldsEnglish.ourWork,
        {
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
    console.log(formsFieldsNepali);
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
                    <div key={index} className="row border border-dark rounded">
                      <div className=" mt-3 container">
                        <h5 className="card-title">{index + 1}. Our Work</h5>
                        <hr className="border-2" />
                      </div>

                      <div className=" mb-3">
                        <label className="form-label">Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="image"
                          onChange={(e) => {
                            handleEnglishInputChange(index, e);
                            handleNepaliInputChange(index, e);
                          }}
                        />
                      </div>

                      <div className=" mb-3">
                        <img src={work.image} alt="uploaded image" />
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
                            onChange={(e) => handleEnglishInputChange(index, e)}
                          />
                        </div>
                        <div className=" mb-3">
                          <JoditEditor
                            ref={editorRef}
                            tabIndex={1}
                            value={work.details}
                            config={englishConfig}
                            onChange={(content) =>
                              handleEnglishInputChange(index, {
                                target: { name: "details", value: content },
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
                            value={formsFieldsNepali.ourWork[index].header}
                            onChange={(e) => handleNepaliInputChange(index, e)}
                          />
                        </div>
                        <div className=" mb-3">
                          <JoditEditor
                            ref={editorRef}
                            tabIndex={1}
                            value={formsFieldsNepali.ourWork[index].details}
                            config={englishConfig}
                            onChange={(content) =>
                              handleNepaliInputChange(index, {
                                target: { name: "details", value: content },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-3 mb-3 d-flex justify-content-end">
                        <button
                          onClick={() => handleRemoveOurWork(index)}
                          className="btn btn-primary"
                        >
                          Remove Work
                        </button>
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
