import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { toastPosition } from "../../../../config/toastProp";
import {
  createDonation,
  getDonationInfo,
} from "../../../../services/donationService";
import { fetchNewLetterGroup } from "../../../../services/api";
import DonationIconDescs from "./DonationIconDescs";
import { Close } from "@mui/icons-material";
import { Box, Button, Input, Modal } from "@mui/material";

const Donation = () => {
  const [formData, setFormData] = useState({
    header: "",
    headerNepali: "",
    anyAmountCountHeader: "",
    anyAmountCountHeaderNepali: "",
    bankName: "",
    bankNameNepali: "",
    location: "",
    locationNepali: "",
    swiftCode: "",
    swiftCodeNepali: "",
    currency: "",
    currencyNepali: "",
    acNumber: "",
    acNumberNepali: "",
  });

  const [openIconDescs, setOpenIconDescs] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await createDonation(formData);
      toast.success(`successfully updated`, toastPosition);
    } catch (error) {
      toast.error(`${error.resp.data.errormessage}`);
    } finally {
      setFormData({
        header: "",
        headerNepali: "",
        anyAmountCountHeader: "",
        anyAmountCountHeaderNepali: "",
        bankName: "",
        bankNameNepali: "",
        location: "",
        locationNepali: "",
        swiftCode: "",
        swiftCodeNepali: "",
        currency: "",
        currencyNepali: "",
        acNumber: "",
        acNumberNepali: "",
      });
    }
  };

  const [iconDescsForm, setIconDescsForm] = useState({
    icon: "",
    description: "",
    descriptionNepali: "",
  });

  const handleIconDescsSubmit = async (event) => {
    event.preventDefault();
    const data = { iconDescs: "" };
    data["iconDescs"] = iconDescsForm;
    try {
      const resp = await createDonation(data);
      toast.success("Added Successfully ✔", toastPosition);
      setIconDescsForm({
        icon: "",
        description: "",
        descriptionNepali: "",
      });
    } catch (error) {
      toast.error(`${error.response.data.errormessage}`, toastPosition);
    }
  };

  const handleIconDescsChanges = async (event) => {
    const { name, value, files } = event.target;
    if (name === "icon") {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setIconDescsForm((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setIconDescsForm((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formFields = Object.keys(formData).map((fieldName) => (
    <div className="form-group col-md-6" key={fieldName}>
      <div className="card">
        <div className="card-body">
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            className="form-control"
            id={fieldName}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  ));

  const fieldsList = Object.keys(formData);
  useEffect(() => {
    async function fetchDonationInfo(field) {
      try {
        const resp = await getDonationInfo(field);
        const respData = resp.data.data;
        const fieldData = respData[field];
        setFormData((formData) => ({ ...formData, [field]: fieldData }));
      } catch (error) {
        toast.error(`${error.response.data.errormessage}`, toastPosition);
      }
    }

    fieldsList.forEach((field) => {
      fetchDonationInfo(field);
    });
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Donate Us {JSON.stringify(iconDescsForm)}</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">{formFields}</div>
                  <div className="row ">
                    <button
                      type="submit"
                      style={{ margin: "auto" }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="row mt-4">
                <form onSubmit={handleIconDescsSubmit}>
                  <div className="row ">
                    <div className="col-md-6">
                      <h5 className="ml-1">Icon Descs</h5>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <Button onClick={(e) => setOpenIconDescs(true)}>
                          Show All Icons Descriptions
                        </Button>
                      </span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="card">
                        <div className="card-body">
                          <label htmlFor="description">Icon</label>
                          <input
                            type="file"
                            className="form-control"
                            id="icon"
                            name="icon"
                            onChange={handleIconDescsChanges}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <label htmlFor="description">description</label>
                          <input
                            type="text"
                            className="form-control"
                            id="iconDesc"
                            name="description"
                            value={iconDescsForm["description"]}
                            onChange={handleIconDescsChanges}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <label htmlFor="descriptionNepali">
                            Description Nepali
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="iconDesc"
                            name="descriptionNepali"
                            value={iconDescsForm["descriptionNepali"]}
                            onChange={handleIconDescsChanges}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      type="submit"
                      style={{ margin: "auto" }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Modal open={openIconDescs} onClose={() => setOpenIconDescs(false)}>
            <Box sx={style}>
              <Close
                onClick={() => setOpenIconDescs(false)}
                style={{ float: "right", cursor: "pointer" }}
              ></Close>
              <DonationIconDescs />
            </Box>
          </Modal>
        </section>{" "}
      </main>
    </>
  );
};

export default Donation;
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
