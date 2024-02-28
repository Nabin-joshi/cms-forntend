import React, { createRef, useEffect, useRef, useState } from "react";
import { getStories, updateStory } from "../../../../services/storiesService";
import RefreshIcon from "@mui/icons-material/Refresh";
// import "./StoriesList.css";

import { ToastContainer, toast } from "react-toastify";
import { Close } from "@mui/icons-material";
const StoriesList = () => {
  const [storyList, setStoryList] = useState([
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      descNepali: "लोरेम इप्सम डोलोर सित अमेत, कोन्सेक्टेतुर अदिपिस्किंग एलिट।",
      image: "https://example.com/image1.jpg",
      person: "John Doe",
      personNepali: "जोन डो",
      display: true,
    },
  ]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [enableInput, setEnableInput] = useState(false);
  const [imageKey, setImageKey] = useState(0); // State to force image re-render

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleChange = (index, field, e) => {
    const updatedStories = [...storyList];

    let value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    if (e.target.name === "avatar") {
      updatedStories[index]["newImage"] = new FormData();
      const reader = new FileReader();
      //   console.log(reader);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          updatedStories[index]["image"] = reader.result;
          updatedStories[index]["newImage"] = reader.result;
          setStoryList(updatedStories);
        }
      };
    } else {
      updatedStories[index][field] = value;
      setStoryList(updatedStories);
    }
    console.log(updatedStories);
  };

  const updateAllAtOnce = async (event) => {
    event.preventDefault();
    setEnableInput(false);
    try {
      const updateAll = await updateStory(storyList);
      toast.success(`stories has been edited successfully  `, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      setEnableInput(true);
      fetchStories();
      setImageKey((prevKey) => prevKey + 1);
    } catch (error) {
      toast.error(`${JSON.stringify(error)} `, {
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

  const handleSubmit = (index) => async (event) => {
    event.preventDefault();
    setEnableInput(false);
    const storyToUpdate = storyList[index];
    try {
      const response = await updateStory([storyToUpdate]);
      toast.success(`story has been edited successfully  `, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchStories();
      setImageKey((prevKey) => prevKey + 1);
      setEnableInput(true);
    } catch (error) {
      toast.error(`${JSON.stringify(error)} `, {
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

  async function fetchStories() {
    try {
      const response = await getStories();
      setStoryList(response.data.data.contents);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <>
      {" "}
      <style>
        {`
 
 
 /* StoriesList.css */
 .focusedTextarea {
  width: calc(100% + 200px); /* Increase the width of the textarea */
  height: calc(100% + 200px); /* Increase the height of the textarea */
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 1;
  resize: none; /* Disable resizing of the textarea */
}
.closeButton {
  position: absolute;
  top: -0.8rem;
  right: -12rem;
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.textareaContainer {
  position: relative;
}
    `}
      </style>
      <div className="row">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Stories List</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!enableInput && (
            <button
              className="btn btn-danger"
              onClick={() => setEnableInput(true)}
            >
              Enable update
            </button>
          )}
          {enableInput && (
            <button
              className="btn btn-success"
              onClick={() => setEnableInput(false)}
            >
              Disable update
            </button>
          )}
          <RefreshIcon onClick={fetchStories} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <table className="table table-blue table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Display</th>
            <th>Description</th>
            <th>Description (Nepali)</th>
            {/* <th>Image</th> */}
            <th>Person</th>
            <th>Person (Nepali)</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {storyList &&
            storyList.map((item, index) => (
              <tr key={index}>
                <td>
                  <span>{index + 1}</span>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.display}
                    onChange={(e) => handleChange(index, "display", e)}
                    disabled={!enableInput}
                  />
                </td>
                <td style={{ position: "relative" }}>
                  <div className="textareaContainer">
                    <textarea
                      disabled={!enableInput}
                      value={item.desc}
                      onChange={(e) => handleChange(index, "desc", e)}
                      onFocus={() => handleFocus(index + "desc")}
                      onBlur={() => setFocusedIndex(null)}
                      className={
                        focusedIndex === index + "desc" ? "focusedTextarea" : ""
                      }
                    />
                    {focusedIndex === index + "desc" && (
                      <Close
                        className="closeButton"
                        onClick={() => setFocusedIndex(null)}
                      ></Close>
                    )}
                  </div>
                </td>
                <td style={{ position: "relative" }}>
                  <div className="textareaContainer">
                    <textarea
                      disabled={!enableInput}
                      value={item.descNepali}
                      onChange={(e) => handleChange(index, "descNepali", e)}
                      onFocus={() => handleFocus(index + "descNepali")}
                      onBlur={() => setFocusedIndex(null)}
                      className={
                        focusedIndex === index + "descNepali"
                          ? "focusedTextarea"
                          : ""
                      }
                    />
                    {focusedIndex === index + "descNepali" && (
                      <button
                        onClick={() => setFocusedIndex(null)}
                        className="closeButton"
                      >
                        X
                      </button>
                    )}
                  </div>
                </td>
                {/* <td>
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) =>
                      handleChange(index, "image", e)
                    }
                  />
                </td> */}
                <td>
                  <input
                    disabled={!enableInput}
                    type="text"
                    value={item.person}
                    onChange={(e) => handleChange(index, "person", e)}
                  />
                </td>
                <td>
                  <input
                    disabled={!enableInput}
                    type="text"
                    value={item.personNepali}
                    onChange={(e) => handleChange(index, "personNepali", e)}
                  />
                </td>
                <td>
                  <label htmlFor={`image-${index}`}>
                    <img
                      disabled={!enableInput}
                      src={item.image}
                      // src={item.image + `?${imageKey}`} // Append a unique key to the URL
                      style={{
                        height: "50px",
                        width: "50px",
                        cursor: "pointer",
                        borderRadius: "50%", // Apply border radius to make the image rounded
                      }}
                      alt=""
                    />
                  </label>
                  <input
                    disabled={!enableInput}
                    id={`image-${index}`}
                    type="file"
                    name="avatar"
                    onChange={(e) => {
                      handleChange(index, "image", e);
                    }}
                    style={{ display: "none", borderRadius: "50px" }}
                  />
                </td>

                <td>
                  <button
                    disabled={!enableInput}
                    onClick={handleSubmit(index)}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>

          <td
            colSpan="{9}"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              disabled={!enableInput}
              onClick={updateAllAtOnce}
              className="btn btn-outline-primary"
            >
              <>Update All</>
            </button>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default StoriesList;
