import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { ToastContainer, toast } from "react-toastify";
import {
  addStory,
  addStoryHeading,
  getStoryHeading,
} from "../../../../services/storiesService";
import Footer from "./Footer";
import CustomModal from "./NewLetter/popup/CustomModal";
import StoriesList from "./StoriesList";
import { Button } from "@mui/material";

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
  const [isModalOpen, setModalOpen] = useState(false);

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

  const storyUpdatedMsg = (id) => {
    toast.success(`story has been updated successfully `, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
    setModalOpen(false);
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
                  <Button onClick={() => setModalOpen(true)}>
                    {" "}
                    Show And Edit Stories
                  </Button>

                  <hr className="border-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="hero">
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentComponent={<StoriesList storyUpdate={storyUpdatedMsg} />}
        ></CustomModal>
      </div>

      <ToastContainer />
      <hr />
    </>
  );
};

export default Stories;
