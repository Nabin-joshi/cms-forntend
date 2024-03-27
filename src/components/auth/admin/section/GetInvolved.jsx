import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getInvolvedData,
  updateGetInvolvedField,
} from "../../../../services/getInvolvedService";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { Button } from "@mui/material";

const GetInvolved = () => {
  const vacancyRef = useRef();
  const procurementRef = useRef();
  const volunteerRef = useRef();
  const donateRef = useRef();

  const vacancyRefNepali = useRef();
  const procurementRefNepali = useRef();
  const volunteerRefNepali = useRef();
  const donateRefNepali = useRef();

  const [vacancy, setVacancy] = useState("");
  const [procurement, setProcurement] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [donate, setDonate] = useState("");

  const [vacancyNepali, setVacancyNepali] = useState("");
  const [procurementNepali, setProcurementNepali] = useState("");
  const [volunteerNepali, setVolunteerNepali] = useState("");
  const [donateNepali, setDonateNepali] = useState("");

  const stateDatas = {
    vacancy: setVacancy,
    procurement: setProcurement,
    volunteer: setVolunteer,
    donate: setDonate,
    vacancyNepali: setVacancyNepali,
    procurementNepali: setProcurementNepali,
    volunteerNepali: setVolunteerNepali,
    donateNepali: setDonateNepali,
  };

  const updateFieldVacancy = () => {
    const fields = {
      vacancy: vacancyRef.current.value,
      vacancyNepali: vacancyRefNepali.current.value,
    };
    updateFieldsOfGetInvolved(fields);
  };

  const updateFieldProcurement = () => {
    const fields = {
      procurement: procurementRef.current.value,
      procurementNepali: procurementRefNepali.current.value,
    };
    updateFieldsOfGetInvolved(fields);
  };

  const updateFieldVolunteer = () => {
    const fields = {
      volunteer: volunteerRef.current.value,
      volunteerNepali: volunteerRefNepali.current.value,
    };
    updateFieldsOfGetInvolved(fields);
  };

  const updateFieldDonate = () => {
    const fields = {
      donate: donateRef.current.value,
      donateNepali: donateRefNepali.current.value,
    };
    updateFieldsOfGetInvolved(fields);
  };

  const updateFieldsOfGetInvolved = async (fieldsData) => {
    try {
      const response = await updateGetInvolvedField(fieldsData);
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

  const getInvolvedFields = async (field) => {
    const res = await getInvolvedData(field);
    const data = res.data.data;
    const setDataFunc = stateDatas[field];
    setDataFunc(data);
  };

  useEffect(() => {
    const fieldsKeys = Object.keys(stateDatas);

    fieldsKeys.forEach((field) => {
      getInvolvedFields(field);
    });
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>About Us</h1>
        </div>
        <section className="section">
          <div className="row card">
            <div className="col-md-12 card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Vacancy
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={vacancy}
                  ref={vacancyRef}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Vacancy (Nepali)
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={vacancyNepali}
                  ref={vacancyRefNepali}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <Button onClick={updateFieldVacancy} style={{ float: "right" }}>
                Update Vacancy
              </Button>
            </div>
          </div>
          <hr />

          <div className="row card">
            <div className="col-md-12 card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Procurement
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={procurement}
                  ref={procurementRef}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Procurement (Nepali)
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={procurementNepali}
                  ref={procurementRefNepali}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <Button
                onClick={updateFieldProcurement}
                style={{ float: "right" }}
              >
                Update Procurement
              </Button>
            </div>
          </div>
          <hr></hr>
          <div className="row card">
            <div className="col-md-12 card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Volunteer
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={volunteer}
                  ref={volunteerRef}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Volunteer (Nepali)
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={volunteerNepali}
                  ref={volunteerRefNepali}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <Button onClick={updateFieldVolunteer} style={{ float: "right" }}>
                Update Volunteer
              </Button>
            </div>
          </div>
          <hr />

          <div className="row card">
            <div className="col-md-12 card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Donate
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={donate}
                  ref={donateRef}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label" htmlFor="">
                  Donate (Nepali)
                </label>
                <JoditEditor
                  name=""
                  id=""
                  value={donateNepali}
                  ref={donateRefNepali}
                ></JoditEditor>
              </div>
            </div>
            <div className="col-md-12">
              <Button onClick={updateFieldDonate} style={{ float: "right" }}>
                Update Donate
              </Button>
            </div>
          </div>
          <hr />
        </section>
      </main>

      <ToastContainer />
    </>
  );
};

export default GetInvolved;
