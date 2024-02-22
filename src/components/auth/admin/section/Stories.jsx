import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { ToastContainer, toast } from "react-toastify";
import {
  addStory,
  addStoryHeading,
  getStoryHeading,
} from "../../../../services/storiesService";
import Footer from "./Footer";

const Stories = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const descRef = useRef();
  const descNepaliRef = useRef();
  const imageRef = useRef();
  const personRef = useRef();
  const personNepaliRef = useRef();
  const [color, setColor] = useState("#aabbcc");
  const [storyHeading, setStoryHeading] = useState({
    heading: "",
    headingNepali: "",
    readMoreBtnColor: "",
  });

  const submitStoryHeading = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", storyHeading.heading);
    formData.append("headingNepali", storyHeading.headingNepali);
    formData.append("readMoreBtnColor", color);
    try {
      const response = await addStoryHeading(formData);
      toast.success("stroy Saved Successfully!", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.response.data.errormessage, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      // alert(error);
    }
  };

  const submitStory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("desc", descRef.current.value);
    formData.append("descNepali", descNepaliRef.current.value);
    formData.append("person", personRef.current.value);
    formData.append("personNepali", personNepaliRef.current.value);
    formData.append("image", imageRef.current.files[0]); // Append the file to FormData
    try {
      const response = await addStory(formData);
      toast.success("stroy Saved Successfully!", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    } catch (error) {
      let msg;
      if (error.code === "ERR_NETWORK") {
        msg = "Something went wrong !!!";
      } else {
        msg = error.response.data.errorMessage;
      }
      toast.error(msg, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    }
  };
  useEffect(() => {
    async function fetchStoryHeading() {
      const response = await getStoryHeading();
      // setStoryHeading(response.json);
      const rData = response.data.data;
      if (rData) {
        setStoryHeading(rData);
      }
    }
    fetchStoryHeading();
  }, []);
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Stories</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Stories</li>
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
                  <div className="row">
                    {/* a qukc brown fox jumps over the lazy dog. a qukc brown fox
                    jumps over the lazy dog.{" "} */}
                    <div className="d-flex justify-content-between">
                      <div className="col-md-5">
                        <div className="mb-3">
                          <label className="form-label"> Heading</label>
                          <input
                            type="text"
                            value={storyHeading.heading}
                            name="heading"
                            ref={headingRef}
                            className="form-control"
                            onChange={(e) =>
                              setStoryHeading({
                                ...storyHeading,
                                heading: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="mb-3">
                          <label className="form-label"> Heading Nepali</label>
                          <input
                            value={storyHeading.headingNepali}
                            name="headingNepali"
                            type="text"
                            className="form-control"
                            onChange={(e) =>
                              setStoryHeading({
                                ...storyHeading,
                                headingNepali: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">
                        Read More Button Color
                      </label>
                      <SketchPicker color={color} onChange={setColor} />
                    </div>

                    <div
                      style={{ marginTop: "10px" }}
                      className="d-flex justify-content-center"
                    >
                      <button
                        type="submit"
                        onClick={(e) => submitStoryHeading(e)}
                        className="btn btn-primary "
                      >
                        Create Story's Heading
                      </button>
                    </div>
                  </div>
                  <hr />
                  <h5>Add Story</h5>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="col-5">
                        <form>
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                              ref={descRef}
                              className="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Person Name</label>
                            <textarea
                              ref={personRef}
                              className="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Person Image</label>
                            <input
                              type="file"
                              ref={imageRef}
                              className="form-control"
                              multiple
                              rows="3"
                            ></input>
                          </div>
                        </form>
                      </div>

                      <div className="col-5">
                        <form>
                          <div className="mb-3">
                            <label className="form-label">
                              Description Nepali
                            </label>
                            <textarea
                              ref={descNepaliRef}
                              className="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Person's Name Nepali
                            </label>
                            <textarea
                              ref={personNepaliRef}
                              className="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      onClick={(e) => submitStory(e)}
                      className="btn btn-primary "
                    >
                      Create Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
      <hr />
    </>
  );
};

export default Stories;
