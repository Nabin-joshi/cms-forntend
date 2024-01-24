import React, { useEffect, useState } from "react";

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
        "http://localhost:5000/api/newsLetter/newsLetterUser",
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
        alert(data.errormessage);
      }
    } catch (error) {
      // alert("Something went wrong !!!" + JSON.stringify(error));
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <h1>Add User in NewsLetter</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Name: </label>
          <input
            name="name"
            type="text"
            value={userData.name}
            onChange={handleOnChange}
          />
          <small style={{ color: "red" }}>{errors.name}</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
          />
          <small style={{ color: "red" }}>{errors.email}</small>
        </div>

        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default CreateNewsLetterUser;
