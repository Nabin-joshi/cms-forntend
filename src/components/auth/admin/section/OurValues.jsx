import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  addOurValues,
  addOurValuesHeading,
  getOurValuesHeading,
} from "../../../../services/ourValuesService";
import CustomModal from "./NewLetter/popup/CustomModal";
import OurValuesList from "./OurValuesList";
import { Box, Button, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const OurValues = () => {
  const headingRef = useRef();
  const headingNepaliRef = useRef();
  const iconRef = useRef();
  const titleRef = useRef();
  const titleNepaliRef = useRef();
  const [color, setColor] = useState("#aabbcc");
  const [isModalOpen, setModalOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                  <Button onClick={handleOpen}>
                    {" "}
                    <h5 className="card-title">Show And Edit Values</h5>
                  </Button>

                  <hr className="border-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OurValuesList />
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default OurValues;
