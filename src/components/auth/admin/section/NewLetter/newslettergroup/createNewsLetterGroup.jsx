import React, { useState } from "react";
import URLS from "../../../../../../urls/urls";
import { Button, Input } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

const CreateNewsLetterGroup = (props) => {
  const [formData, setFormData] = useState({
    //initialize state with the object, //destructuring the assignment in react, consise way, extracting value and assign value in concise way
    groupName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      // ...=> rest parameter, object destructuring with rest, spreading property(object) , spreading elements (list);
      ...formData, //preserve the existing , "Computed Property Names" or "Computed Property Keys
      [name]: value,
    });

    // setErrors({
    //   ...errors,
    //   [name]: "",
    // });
    switch (name) {
      case "groupName":
        setErrors({
          ...errors,
          [name]: value.length < 5 ? "Name must be at least 5 in length" : "",
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${URLS.BASE_URL}/api/newsLetter/newsLetterGroup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setFormData({
        //initialize state with the object, //destructuring the assignment in react, consise way, extracting value and assign value in concise way
        groupName: "",
      });
      props.finishGroupAdding(data.savedNewsLetterUserGroup.name);
    } catch (error) {
      toast.error(`Error while adding group !! ${error.message}`, {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter group name:
          <br />
          <Input
            className="mt-2"
            type="text"
            name="groupName"
            placeholder="Group Name"
            value={formData.groupName} //tied to state variable, set initial or current value
            onChange={handleChange}
            variant="outlined"
          />
          {errors.groupName && (
            <p style={{ color: "red" }}>{errors.groupName}</p>
          )}
        </label>
        <br />

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="solid" color="primary" type="submit">
            Add Group
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateNewsLetterGroup;
