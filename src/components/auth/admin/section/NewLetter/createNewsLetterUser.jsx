import React, { useEffect, useState } from "react";
import URLS from "../../urls/urls";
import { Button, Input } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

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
    try {
      const res = await fetch(
        `${URLS.BASE_URL}/api/newsLetter/newsLetterUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      if (data.success === true) {
        setUserData({
          name: "",
          email: "",
        });
        props.userAddedFunc(data.savedNewsLetterUser._id);
      } else {
        // alert(data.errormessage);
        toast.error(`${data.errormessage}`, {
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
    } catch (error) {
      // alert("Something went wrong !!!" + JSON.stringify(error));
      toast.error(`Something went wrong`, {
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
