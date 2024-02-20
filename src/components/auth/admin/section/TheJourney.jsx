import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  addTheJourneyContents,
  addTheJourneyHeading,
  getTheJourney,
  getTheJourneyHeading,
} from "../../../../services/theJourneyService";
import { SketchPicker } from "react-color";

const TheJourney = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const subHeadingRef = useRef();
  const subHeadingNepaliRef = useRef();
  const dateRef = useRef();
  const dateNepaliRef = useRef();
  const descRef = useRef();
  const descNepaliRef = useRef();
  const colorRef = useRef();
  const [color, setColor] = useState("#aabbcc");

  const [journey, setJourney] = useState({
    heading: "",
    headingNepali: "",
    subHeading: "",
    subHeadingNepali: "",
    contents: [],
  });

  const submitJourneyHeading = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", journey.heading);
    formData.append("headingNepali", journey.headingNepali);
    formData.append("subHeading", journey.subHeading);
    formData.append("subHeadingNepali", journey.subHeadingNepali);
    formData.append("color", color);

    try {
      const response = await addTheJourneyHeading(formData);
      toast.success("Journey's Heading added Successfully!", {
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
        msg = error.response.data.errormessage;
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

  const submitTheJourneyContents = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const data = {
      date: dateRef.current.value,
      dateNepali: dateNepaliRef.current.value,
      desc: descRef.current.value,
      descNepali: descNepaliRef.current.value,
    };
    // formData.append("date", dateRef.current.value);
    // formData.append("dateNepali", dateNepaliRef.current.value);
    // formData.append("desc", descRef.current.value);
    // formData.append("descNepali", descNepaliRef.current.value);

    try {
      const response = await addTheJourneyContents(data);
      toast.success("Journey's content added Successfully!", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      dateRef.current.value = "";
      dateNepaliRef.current.value = "";
      descRef.current.value = "";
      descNepaliRef.current.value = "";
    } catch (error) {
      let msg;
      if (error.code === "ERR_NETWORK") {
        msg = "Something went wrong !!!";
      } else {
        msg = error.response.data.errormessage;
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
    async function fetchJourney() {
      const response = await getTheJourneyHeading();
      const rData = response.data.data;
      if (rData) {
        setJourney(rData);
      }
    }
    fetchJourney();
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>The Journey</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">The Journey</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            ``
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Journey</h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Heading</label>
                        <input
                          type="text"
                          value={journey.heading}
                          ref={headingRef}
                          className="form-control"
                          onChange={(e) =>
                            setJourney({
                              ...journey,
                              heading: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Heading Nepali</label>
                        <input
                          type="text"
                          value={journey.headingNepali}
                          ref={headingNepaliRef}
                          className="form-control"
                          onChange={(e) =>
                            setJourney({
                              ...journey,
                              headingNepali: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <div className="mb-3">
                        <label className="form-label">Sub-Heading</label>
                        <input
                          type="text"
                          value={journey.subHeading}
                          ref={subHeadingRef}
                          className="form-control"
                          onChange={(e) =>
                            setJourney({
                              ...journey,
                              subHeading: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      {" "}
                      <div className="mb-3">
                        <label className="form-label">Sub-Heading Nepali</label>
                        <input
                          type="text"
                          value={journey.subHeadingNepali}
                          ref={subHeadingNepaliRef}
                          className="form-control"
                          onChange={(e) =>
                            setJourney({
                              ...journey,
                              subHeadingNepali: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Color</label>
                          <SketchPicker color={color} onChange={setColor} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="text-center">
                          <button
                            className="btn btn-primary"
                            onClick={submitJourneyHeading}
                          >
                            Add Journey
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr /> <h5>Add Contents</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                          type="date"
                          ref={dateRef}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Date Nepali</label>
                        <input
                          type="text"
                          ref={dateNepaliRef}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          ref={descRef}
                          className="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Description Nepali</label>
                        <textarea
                          ref={descNepaliRef}
                          className="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary"
                      onClick={submitTheJourneyContents}
                    >
                      Add Journey' Contents
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
};

export default TheJourney;
