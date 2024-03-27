import { Box, Button, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  addBoardCommitteeMember,
  getAboutUs,
  updateAboutUsField,
} from "../../../../services/aboutUsService";
import BoardCommitteeMembers from "./BoardCommitteeMembers";
import { Close } from "@mui/icons-material";
import ThematicAreas from "./ThematicAreas";
import JoditEditor from "jodit-react";

const AboutUs = () => {
  const historyRef = useRef();
  const historyNepaliRef = useRef();
  const whoWeAreRef = useRef();
  const whoWeAreNepaliRef = useRef();
  const ourValuesRef = useRef();
  const ourValuesNepaliRef = useRef();
  const visionRef = useRef();
  const visionNepaliRef = useRef();
  const missionRef = useRef();
  const missionNepaliRef = useRef();
  const goalRef = useRef();
  const goalNepaliRef = useRef();
  const ourApproachRef = useRef();
  const ourApproachNepaliRef = useRef();

  const [open, setOpenBoardCommittee] = useState(false);
  const [openThematicValues, setOpenThematicValues] = useState(false);
  const [aboutUs, setAboutUs] = useState({});

  const updateFieldsHistory = () => {
    const fields = {
      history: historyRef.current.value,
      historyNepali: historyNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields);
  };

  const updateFieldsWhoWeAre = () => {
    const fields = {
      whoWeAre: whoWeAreRef.current.value,
      whoWeAreNepali: whoWeAreNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields);
  };

  const updateFieldsOurValues = () => {
    const fields = {
      ourValues: ourValuesRef.current.value,
      ourValuesNepali: ourValuesNepaliRef.current.value,
    };
    const res = updateFieldsOfAboutUs(fields);
  };

  const updateFieldsVision = () => {
    const fields = {
      vision: visionRef.current.value,
      visionNepali: visionNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields); // You need to define this function to update the fields
  };

  const updateFieldsMission = () => {
    const fields = {
      mission: missionRef.current.value,
      missionNepali: missionNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields); // You need to define this function to update the fields
  };

  const updateFieldsGoal = () => {
    const fields = {
      goal: goalRef.current.value,
      goalNepali: goalNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields); // You need to define this function to update the fields
  };

  const updateFieldsOurApproach = () => {
    const fields = {
      ourApproach: ourApproachRef.current.value,
      ourApproachNepali: ourApproachNepaliRef.current.value,
    };
    updateFieldsOfAboutUs(fields);
  };
  const updateFieldsOfAboutUs = async (fieldsData) => {
    try {
      const response = await updateAboutUsField(fieldsData);
      // toast.success("updated Successfully!", {
      //   position: "top-center",
      //   autoClose: 700,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: 0,
      //   theme: "colored",
      // });
      alert("updated successfully");
      // fetchAboutUs();
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

  async function fetchAboutUs() {
    const res = await getAboutUs();
    const data = res.data.data;
    setAboutUs(data);
    historyRef.current.value = data.history;
    historyNepaliRef.current.value = data.historyNepali;
    whoWeAreRef.current.value = data.whoWeAre;
    whoWeAreNepaliRef.current.value = data.whoWeAreNepali;
    ourValuesRef.current.value = data.ourValues;
    ourValuesNepaliRef.current.value = data.ourValuesNepali;
    visionRef.current.value = data.vision;
    visionNepaliRef.current.value = data.visionNepali;

    missionRef.current.value = data.mission;
    missionNepaliRef.current.value = data.missionNepali;

    goalRef.current.value = data.goal;
    goalNepaliRef.current.value = data.goalNepali;

    ourApproachRef.value = data.ourApproach;
    ourApproachNepaliRef.value = data.ourApproachNepali;
  }
  useEffect(() => {
    fetchAboutUs();
  }, []);

  const [ourThematicAreasFD, setOurThematicAreasFD] = useState({
    title: "",
    titleNepali: "",
  });

  const onChangeOurThematicAreasFD = (e) => {
    setOurThematicAreasFD({
      ...ourThematicAreasFD,
      [e.target.name]: e.target.value,
    });
  };

  const submitOurThematicAreasForm = async (e) => {
    e.preventDefault();
    const data = {
      ourThematicAreas: ourThematicAreasFD,
    };
    updateFieldsOfAboutUs(data);
  };

  const [boardCommitteeFD, setBoardCommitteeFD] = useState({
    name: "",
    nameNepali: "",
    gender: "Male",
    position: "Board Member",
  });

  const onChangeBoardCommitteeFD = (e) => {
    const { name, value } = e.target;
    setBoardCommitteeFD((fd) => ({
      ...fd,
      [name]: value,
    }));
  };

  const submitBoardCommitteeForm = async (e) => {
    e.preventDefault();

    try {
      const res = await addBoardCommitteeMember(boardCommitteeFD);
      toast.success("successfully added", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      // setBoardCommitteeFD({
      //   name: "",
      //   nameNepali: "",
      //   gender: "Male",
      //   position: "Board Member",
      // });
    } catch (error) {
      alert(JSON.stringify(error));
      toast.error(error.response.data.errorMessage, {
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
  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>About Us</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          History
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.history}
                          ref={historyRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          History (Nepali)
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.historyNepali}
                          ref={historyNepaliRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsHistory}
                        style={{ float: "right" }}
                      >
                        Update History
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Who We Are{" "}
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.whoWeAre}
                          ref={whoWeAreRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Who We Are ( Nepali)
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.whoWeAreNepali}
                          ref={whoWeAreNepaliRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsWhoWeAre}
                        style={{ float: "right" }}
                      >
                        Update Who We Are
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Values{" "}
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.ourValues}
                          ref={ourValuesRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Values (Nepali)
                        </label>
                        <JoditEditor
                          name=""
                          id=""
                          value={aboutUs.ourValuesNepali}
                          ref={ourValuesNepaliRef}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsOurValues}
                        style={{ float: "right" }}
                      >
                        Update Our Values
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Vision
                        </label>
                        <JoditEditor
                          ref={visionRef}
                          value={aboutUs.vision}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Vision (Nepali)
                        </label>
                        <JoditEditor
                          ref={visionNepaliRef}
                          value={aboutUs.visionNepali}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsVision}
                        style={{ float: "right" }}
                      >
                        Update Vision
                      </Button>
                    </div>
                    <hr></hr>
                    {/* Similar JSX structure for mission and goal */}
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Mission
                        </label>
                        <JoditEditor
                          ref={missionRef}
                          value={aboutUs.mission}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Mission (Nepali)
                        </label>
                        <JoditEditor
                          ref={missionNepaliRef}
                          value={aboutUs.missionNepali}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsMission}
                        style={{ float: "right" }}
                      >
                        Update Mission
                      </Button>
                    </div>
                    <hr></hr>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Goal
                        </label>
                        <JoditEditor
                          ref={goalRef}
                          value={aboutUs.goal}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="">
                          Our Goal (Nepali)
                        </label>
                        <JoditEditor
                          ref={goalNepaliRef}
                          value={aboutUs.goalNepali}
                        ></JoditEditor>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsGoal}
                        style={{ float: "right" }}
                      >
                        Update Goal
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="">Our Approach</label>
                      <JoditEditor
                        ref={ourApproachRef}
                        value={aboutUs.ourApproach}
                      ></JoditEditor>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="">Our Approach (Nepali)</label>
                      <JoditEditor
                        ref={ourApproachNepaliRef}
                        value={aboutUs.ourApproachNepali}
                      ></JoditEditor>
                    </div>
                    <div className="col-md-12">
                      <Button
                        onClick={updateFieldsOurApproach}
                        style={{ float: "right" }}
                      >
                        Update Our Approach
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Our Thematic Areas</h5>
                    </div>

                    <div className="col-md-6">
                      <span>
                        <Button
                          onClick={(e) => setOpenThematicValues(true)}
                          style={{ float: "right" }}
                        >
                          Show All Thematic Areas
                        </Button>
                      </span>
                    </div>

                    <hr />
                    <form
                      onSubmit={submitOurThematicAreasForm}
                      className="mt-3"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="title">
                              Title:
                            </label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              value={ourThematicAreasFD.title}
                              onChange={onChangeOurThematicAreasFD}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="titleNepali">
                              Title (Nepali):
                            </label>
                            <input
                              type="text"
                              name="titleNepali"
                              id="titleNepali"
                              value={ourThematicAreasFD.titleNepali}
                              onChange={onChangeOurThematicAreasFD}
                            />
                          </div>
                        </div>
                      </div>
                      <Button type="submit">Add Thematic Area</Button>
                    </form>
                  </div>

                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Board Committee</h5>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <Button onClick={(e) => setOpenBoardCommittee(true)}>
                          Show All Members
                        </Button>
                      </span>
                    </div>
                    <form onSubmit={submitBoardCommitteeForm} className="mt-3">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="">
                              Name:
                            </label>
                            <input
                              name="name"
                              id="name"
                              value={boardCommitteeFD.name}
                              onChange={onChangeBoardCommitteeFD}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="">
                              Name (Nepali):
                            </label>
                            <input
                              name="nameNepali"
                              id="nameNepali"
                              value={boardCommitteeFD.nameNepali}
                              onChange={onChangeBoardCommitteeFD}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="">
                            gender:
                          </label>
                          <select
                            name="gender"
                            id="gender"
                            value={boardCommitteeFD.name}
                            onChange={onChangeBoardCommitteeFD}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="">
                            position:
                          </label>
                          <select
                            name="position"
                            id="position"
                            value={boardCommitteeFD.name}
                            onChange={onChangeBoardCommitteeFD}
                          >
                            <option value="Chairperson">Chairperson</option>
                            <option value="Treasurer">Treasurer</option>
                            <option value="General Secretary">
                              General Secretary
                            </option>
                            <option value="Board Member">Board Member</option>
                          </select>
                        </div>
                      </div>
                      <Button type="submit">Add Member</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Modal open={open} onClose={() => setOpenBoardCommittee(false)}>
        <Box sx={style}>
          <Close
            onClick={() => setOpenBoardCommittee(false)}
            style={{ float: "right", cursor: "pointer" }}
          ></Close>
          <BoardCommitteeMembers />
        </Box>
      </Modal>
      <Modal
        open={openThematicValues}
        onClose={() => setOpenThematicValues(false)}
      >
        <Box sx={style}>
          <Close
            onClick={() => setOpenThematicValues(false)}
            style={{ float: "right", cursor: "pointer" }}
          ></Close>
          <ThematicAreas />
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AboutUs;

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
