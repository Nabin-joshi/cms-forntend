import React, { useState } from "react";

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
        "http://localhost:5000/api/newsLetter/newsLetterGroup",
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
      alert("Error while adding group !!" + error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter group name:
          <br />
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            value={formData.groupName} //tied to state variable, set initial or current value
            onChange={handleChange}
          />
          {errors.groupName && (
            <p style={{ color: "red" }}>{errors.groupName}</p>
          )}
        </label>
        <br />

        <br />
        <button type="submit">Add Group</button>
      </form>
    </>
  );
};

export default CreateNewsLetterGroup;
