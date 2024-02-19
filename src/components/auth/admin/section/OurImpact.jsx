import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  addOurImpact,
  addOurImpactHeading,
  getOurImpactHeading,
} from "../../../../services/ourImpactService";

const OurImpact = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const iconRef = useRef();
  const countRef = useRef();
  const countNepaliRef = useRef();
  const descRef = useRef();
  const descNepaliRef = useRef();
  const [color, setColor] = useState("#aabbcc");

  const [impact, setImpact] = useState({
    heading: "",
    headingNepali: "",
    contents: [],
  });

  const submitImpactHeading = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", impact.heading);
    formData.append("headingNepali", impact.headingNepali);
    formData.append("readMoreBtnColor", color);
    try {
      const response = await addOurImpactHeading(formData);
      toast.success("Impact heading Saved Successfully!", {
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
    }
  };

  const submitImpact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("icon", iconRef.current.files[0]);
    formData.append("count", countRef.current.value);
    formData.append("countNepali", countNepaliRef.current.value);
    formData.append("desc", descRef.current.value);
    formData.append("descNepali", descNepaliRef.current.value);

    try {
      const response = await addOurImpact(formData);
      toast.success("Impact added Successfully!", {
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

  useEffect(() => {
    async function fetchOurImpactHeading() {
      const response = await getOurImpactHeading();
      const rData = response.data.data;
      if (rData) {
        setImpact(rData);
      }
    }
    fetchOurImpactHeading();
  }, []);
  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Our Impact</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Our Impact</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Impact</h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Heading</label>
                        <input
                          type="text"
                          value={impact.heading}
                          ref={headingRef}
                          className="form-control"
                          onChange={(e) =>
                            setImpact({
                              ...impact,
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
                          value={impact.headingNepali}
                          ref={headingNepaliRef}
                          className="form-control"
                          onChange={(e) =>
                            setImpact({
                              ...impact,
                              headingNepali: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        onClick={submitImpactHeading}
                        className="btn btn-primary"
                      >
                        Save Impact's Heading
                      </button>
                    </div>
                  </div>
                  <hr />
                  <h5>Add Impact Contents</h5>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label">Icon</label>
                        <input
                          type="file"
                          ref={iconRef}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Count</label>
                        <input
                          type="number"
                          ref={countRef}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Count Nepali</label>
                        <input
                          type="number"
                          ref={countNepaliRef}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          ref={descRef}
                          className="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description Nepali</label>
                        <textarea
                          ref={descNepaliRef}
                          className="form-control"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        onClick={submitImpact}
                      >
                        Add Impact
                      </button>
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
};

export default OurImpact;
