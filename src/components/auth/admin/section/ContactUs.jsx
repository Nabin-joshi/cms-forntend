import { Button, Input, Textarea } from "@mui/joy";
import React from "react";
import { useState } from "react";
import {
  getContactUsData,
  updateContactUsField,
} from "../../../../services/ContactUsService";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    header: "",
    headerNepali: "",
    headerImage: "",
    description: "",
    descriptionNepali: "",
    phone: "",
    phoneNepali: "",
    address: "",
    addressNepali: "",
    email: "",
  });

  const updateFormData = (event) => {
    const fieldname = event.target.name;
    if (fieldname === "headerImage") {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFormData((prevData) => ({
            ...prevData,
            ["newHeaderImage"]: reader.result,
          }));
        }
      };
      return;
    }
    const fieldvalue = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldname]: fieldvalue,
    }));
  };

  const submitForm = async () => {
    try {
      const res = await updateContactUsField(formData);
      toast.success("updated successfully");
    } catch (error) {
      alert("something went wrong");
    }
  };

  const fetchContactUs = async () => {
    try {
      const res = await getContactUsData();
      const resData = res.data.data;
      setFormData(resData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchContactUs();
  }, []);

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Slider</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </nav>
        </div>
        <div className="row bg-white p-3 rounded">
          <div className="col-md-6 ">
            <label htmlFor="">Header</label>
            <Input
              type="text"
              name="header"
              id="header"
              value={formData.header}
              onChange={updateFormData}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="">Header Nepali </label>
            <Input
              type="text"
              name="headerNepali"
              id="headerNepali"
              value={formData.headerNepali}
              onChange={updateFormData}
            />
          </div>
        </div>
        <hr />
        <div className="row  bg-white p-3 rounded">
          <div className="col-md-6">
            <label>Header Image</label>
            <div style={{ display: "flex", justifyContent: "between" }}>
              <Input
                type="file"
                name="headerImage"
                onChange={updateFormData}
              ></Input>
              <img
                src={formData.headerImage}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row  bg-white p-3 rounded">
          <div className="col-md-6">
            <label htmlFor="">Description</label>
            <Textarea
              minRows={2}
              maxRows={4}
              id="description"
              name="description"
              value={formData.description}
              onChange={updateFormData}
            ></Textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Description Nepali</label>
            <Textarea
              minRows={2}
              maxRows={4}
              id="descriptionNepali"
              name="descriptionNepali"
              value={formData.descriptionNepali}
              onChange={updateFormData}
            ></Textarea>
          </div>
        </div>
        <hr />
        <div className="row  bg-white p-3 rounded">
          <div className="col-md-6">
            <label htmlFor="">Phone</label>{" "}
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={updateFormData}
            ></Input>
          </div>
          <div className="col-md-6">
            {" "}
            <label htmlFor="">Phone Nepali</label>{" "}
            <Input
              type="text"
              id="phoneNepali"
              name="phoneNepali"
              value={formData.phoneNepali}
              onChange={updateFormData}
            ></Input>
          </div>
        </div>
        <hr />
        <div className="row  bg-white p-3 rounded">
          <div className="col-md-6">
            <label htmlFor="">Address</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={updateFormData}
            ></Input>
          </div>
          <div className="col-md-6">
            <label htmlFor="">Address Nepali</label>
            <Input
              type="text"
              id="addressNepali"
              name="addressNepali"
              value={formData.addressNepali}
              onChange={updateFormData}
            ></Input>
          </div>
        </div>
        <hr />
        <div className="row  bg-white p-3 rounded">
          <div className="col-md-6">
            <label htmlFor="">Email</label>
            <Input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={updateFormData}
            ></Input>
          </div>
        </div>
        <hr />
        <div className="row bg-white p-3 rounded">
          <div className="btn-div ml-3">
            <Button onClick={submitForm}> Create</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
