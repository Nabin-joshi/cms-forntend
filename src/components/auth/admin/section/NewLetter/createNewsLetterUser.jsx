import React, { useEffect, useState } from "react";
import URLS from "../../urls/urls";
import { Button, Input } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";
import { createNewsLetterUser } from "../../services/NewsLetterUserService";

const CreateNewsLetterUser = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    switch (name) {
      case "name":
        setErrors({
          ...errors,
          [name]: value.length < 5 ? "Name length cannot be less than 5" : "",
        });
        break;
      case "email":
        let emailError = "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          emailError = " invalid email !";
        }
        if (value.trim().length < 1) {
          emailError = "Email is required ";
        }

        setErrors({
          ...errors,
          [name]: emailError,
        });

        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createNewsLetterUser(userData);
    setUserData({
      name: "",
      email: "",
    });
    props.userAddedFunc(data.savedNewsLetterUser._id);
  };

  useEffect(() => {}, []);
  return (
    <>
      <h5>Add User in NewsLetter</h5>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Name: </label>
          <Input
            variant="outlined"
            name="name"
            type="text"
            value={userData.name}
            onChange={handleOnChange}
          />
          <small style={{ color: "red" }}>{errors.name}</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Email: </label>
          <Input
            variant="outlined"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
          />
          <small style={{ color: "red" }}>{errors.email}</small>
        </div>
        <div
          className="mt-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="submit" color="primary" variant="soft">
            Add User
          </Button>
          {/* <Button disabled variant="solid">
            Add User
          </Button>
          <Button disabled color="neutral" variant="soft">
            Add User
          </Button>
          <Button disabled color="success">
            Add User
          </Button>
          <Button disabled color="danger" variant="plain">
            Add User
          </Button> */}
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateNewsLetterUser;
