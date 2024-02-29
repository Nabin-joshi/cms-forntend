import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  getAllOurImpacts,
  updateOurImpact,
} from "../../../../services/ourImpactService";
import { Close } from "@mui/icons-material";

const OurImpactList = () => {
  const [ourImpactList, setOurImpactList] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [enableInput, setEnableInput] = useState(false);
  const [imageKey, setImageKey] = useState(0); // State to force image re-render

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleChange = (index, field, e) => {
    const updatedImpacts = [...ourImpactList];

    let value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    if (e.target.name === "icon") {
      updatedImpacts[index]["newIcon"] = new FormData();
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          updatedImpacts[index]["icon"] = reader.result;
          updatedImpacts[index]["newIcon"] = reader.result;
          setOurImpactList(updatedImpacts);
        }
      };
    } else {
      updatedImpacts[index][field] = value;
      setOurImpactList(updatedImpacts);
    }
  };

  const handleSubmit = async (index) => {
    setEnableInput(false);
    const impactToUpdate = ourImpactList[index];
    try {
      const response = await updateOurImpact([impactToUpdate]);
      toast.success(`Impact has been updated successfully`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchOurImpacts();
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
      setEnableInput(true);
    }
  };

  const updateAllAtOnce = async () => {
    setEnableInput(false);
    try {
      const response = await updateOurImpact(ourImpactList);
      toast.success(`All impacts have been updated successfully`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchOurImpacts();
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
      setEnableInput(true);
    }
  };

  async function fetchOurImpacts() {
    try {
      const response = await getAllOurImpacts();
      setOurImpactList(response.data.data.contents);
    } catch (error) {
      console.error("Error fetching values:", error);
    }
  }

  useEffect(() => {
    fetchOurImpacts();
  }, []);

  return (
    <>
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
          <h2>OurImpact List</h2>
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
          <RefreshIcon
            onClick={fetchOurImpacts}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <table className="table table-blue table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Count </th>
            <th>Count (Nepali)</th>
            <th>Description</th>
            <th>Description (Nepali)</th>
          </tr>
        </thead>
        <tbody>
          {ourImpactList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={item.count}
                  onChange={(e) => handleChange(index, "count", e)}
                  disabled={!enableInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.countNepali}
                  onChange={(e) => handleChange(index, "countNepali", e)}
                  disabled={!enableInput}
                />
              </td>
              <td style={{ position: "relative" }}>
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
                  <button
                    onClick={() => setFocusedIndex(null)}
                    className="closeButton"
                  >
                    <Close>X</Close>
                  </button>
                )}
              </td>
              <td style={{ position: "relative" }}>
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
              </td>
              <td>
                <button
                  disabled={!enableInput}
                  onClick={() => handleSubmit(index)}
                  className="btn btn-outline-primary btn-sm"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={updateAllAtOnce}
                  disabled={!enableInput}
                  className="btn btn-outline-primary"
                >
                  Update All
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <ToastContainer />
    </>
  );
};

export default OurImpactList;
