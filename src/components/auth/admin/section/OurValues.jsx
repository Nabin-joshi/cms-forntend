import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  addOurValues,
  addOurValuesHeading,
  getOurValuesHeading,
} from "../../../../services/ourValuesService";

const OurValues = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const iconRef = useRef();
  const titleRef = useRef();
  const titleNepaliRef = useRef();
  const [color, setColor] = useState("#aabbcc");

  const [values, setValues] = useState({
    heading: "",
    headingNepali: "",
    contents: [],
  });

  const submitValueHeading = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", values.heading);
    formData.append("headingNepali", values.headingNepali);
    formData.append("readMoreBtnColor", color);
    try {
      const response = await addOurValuesHeading(formData);
      toast.success("Values heading Saved Successfully!", {
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

  const submitValues = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("icon", iconRef.current.files[0]);
    formData.append("title", titleRef.current.value);
    formData.append("titleNepali", titleNepaliRef.current.value);
    try {
      const response = await addOurValues(formData);
      toast.success("Values added Successfully!", {
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
    async function fetchOurValuesHeading() {
      const response = await getOurValuesHeading();
      const rData = response.data.data;
      if (rData) {
        setValues(rData);
      }
    }
    fetchOurValuesHeading();
  }, []);
  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Our Values</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Our Values</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Values</h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Heading</label>
                        <input
                          type="text"
                          value={values.heading}
                          ref={headingRef}
                          className="form-control"
                          onChange={(e) =>
                            setValues({
                              ...values,
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
                          value={values.headingNepali}
                          ref={headingNepaliRef}
                          className="form-control"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              headingNepali: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        onClick={submitValueHeading}
                        className="btn btn-primary"
                      >
                        Save Value's Heading
                      </button>
                    </div>
                  </div>
                  <hr />
                  <h5>Add Values Contents</h5>
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
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          ref={titleRef}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Title Nepali</label>
                        <input
                          type="text"
                          ref={titleNepaliRef}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        onClick={submitValues}
                      >
                        Add Value
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

export default OurValues;
