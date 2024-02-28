import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  addOurPartnerContents,
  addOurPartnerHeading,
  getAllOurPartnerData,
} from "../../../../services/ourPartnerService";
import { Box, Button, Modal } from "@mui/material";
import OurPartnersList from "./OurPartnersList";

const OurPartner = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const iconRef = useRef();
  const [open, setOpen] = useState(false);

  const [partnerData, setPartnerData] = useState({
    heading: "",
    headingNepali: "",
    contents: [],
  });

  const submitHeading = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", partnerData.heading);
    formData.append("headingNepali", partnerData.headingNepali);
    try {
      const response = await addOurPartnerHeading(formData);
      toast.success("Heading added successfully!", {
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

  const submitContent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("icon", iconRef.current.files[0]);
    try {
      const response = await addOurPartnerContents(formData);
      toast.success("Content added successfully!", { position: "top-center" });
    } catch (error) {
      toast.error(error.response.data.errormessage, {
        position: "top-center",
        autoClose: 1000,
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
    async function fetchData() {
      const response = await getAllOurPartnerData();
      const rData = response.data.data;
      if (rData) {
        setPartnerData(rData);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Our Partner</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Our Partner</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    {" "}
                    Our Partner's list
                  </Button>
                  <h5 className="card-title">Add Heading</h5>
                  <hr className="border-2" />
                  <form onSubmit={submitHeading}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Heading</label>
                        <input
                          type="text"
                          className="form-control"
                          ref={headingRef}
                          value={partnerData.heading}
                          onChange={(e) =>
                            setPartnerData({
                              ...partnerData,
                              heading: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Heading Nepali</label>
                        <input
                          type="text"
                          className="form-control"
                          ref={headingNepaliRef}
                          value={partnerData.headingNepali}
                          onChange={(e) =>
                            setPartnerData({
                              ...partnerData,
                              headingNepali: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Save Heading
                    </button>
                  </form>
                  <hr />
                  <h5>Add Content</h5>
                  <form onSubmit={submitContent}>
                    <div className="mb-3">
                      <label className="form-label">Icon</label>
                      <input
                        type="file"
                        className="form-control"
                        ref={iconRef}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add Content
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OurPartnersList />
        </Box>
      </Modal>
    </>
  );
};

export default OurPartner;

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
