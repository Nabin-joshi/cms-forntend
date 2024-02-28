import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  getAllOurPartnerData,
  updateOurPartner,
} from "../../../../services/ourPartnerService";

const OurPartnersList = () => {
  const [partnerList, setPartnersList] = useState([{}]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [enableInput, setEnableInput] = useState(false);
  const [imageKey, setImageKey] = useState(0); // State to force image re-render

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleChange = (index, field, e) => {
    const updatedPartners = [...partnerList];

    let value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    if (e.target.name === "avatar") {
      updatedPartners[index]["newIcon"] = new FormData();
      const reader = new FileReader();
      //   console.log(reader);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          updatedPartners[index]["icon"] = reader.result;
          updatedPartners[index]["newIcon"] = reader.result;
          setPartnersList(updatedPartners);
        }
      };
    } else {
      updatedPartners[index][field] = value;
      setPartnersList(updatedPartners);
    }
    console.log(partnerList, "  $$$");
  };

  const updateAllAtOnce = async (event) => {
    event.preventDefault();
    setEnableInput(false);
    try {
      const updateAll = await updateOurPartner(partnerList);
      toast.success(`Partners have been edited successfully  `, {
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
      fetchPartners();
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
    const partnerToUpdate = partnerList[index];
    try {
      const response = await updateOurPartner([partnerToUpdate]);
      toast.success(`partner has been edited successfully  `, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchPartners();
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

  async function fetchPartners() {
    try {
      const response = await getAllOurPartnerData();
      setPartnersList(response.data.data.contents);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }
  useEffect(() => {
    fetchPartners();
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
          <RefreshIcon onClick={fetchPartners} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <table className="table table-blue table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Icon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {partnerList &&
            partnerList.map((item, index) => (
              <tr key={index}>
                <td>
                  <span>{index + 1}</span>
                </td>
                <td>
                  <label htmlFor={`image-${index}`}>
                    <img
                      disabled={!enableInput}
                      src={item.icon}
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

export default OurPartnersList;
