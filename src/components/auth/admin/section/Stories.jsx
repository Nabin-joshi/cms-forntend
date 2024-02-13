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

  const submitStory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", headingRef.current.value);
    formData.append("headingNepali", headingNepaliRef.current.value);
    formData.append("readMoreBtnColor", color);
    try {
      const response = await addStoryHeading(formData);
      if (response) {
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
      } else {
        toast.error("response.error", {
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
    } catch (error) {
      // alert(error);
    }
  };

  useEffect(() => {
    async function fetchStoryHeading() {
      const response = await getStoryHeading();
      // setStoryHeading(response.json);
      const rData = response.data.data;
      setStoryHeading(rData);
      alert(JSON.stringify(storyHeading));
    }
    fetchStoryHeading();
  }, []);
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
                  </div>

                  <div>
                    <label className="form-label">Read More Button Color</label>
                    <SketchPicker color={color} onChange={setColor} />
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="d-flex justify-content-center"
                  >
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
