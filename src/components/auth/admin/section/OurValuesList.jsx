import React, { useEffect, useState } from "react";
import {
  getOurValues,
  updateOurValues,
} from "../../../../services/ourValuesService";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurValuesList = () => {
  const [ourValuesList, setOurValuesList] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [enableInput, setEnableInput] = useState(false);
  const [imageKey, setImageKey] = useState(0); // State to force image re-render

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleChange = (index, field, e) => {
    const updatedValues = [...ourValuesList];

    let value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    if (e.target.name === "icon") {
      updatedValues[index]["newIcon"] = new FormData();
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          updatedValues[index]["icon"] = reader.result;
          updatedValues[index]["newIcon"] = reader.result;
          setOurValuesList(updatedValues);
        }
      };
    } else {
      updatedValues[index][field] = value;
      setOurValuesList(updatedValues);
    }
  };

  const updateValue = async (index) => {
    setEnableInput(false);
    const valueToUpdate = ourValuesList[index];
    try {
      const response = await updateOurValues([valueToUpdate]);
      setOurValuesList(response.data.data.contents);
      toast.success(`Value has been updated successfully`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchValues();
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

  const updateAllValues = async () => {
    setEnableInput(false);
    try {
      const response = updateOurValues(ourValuesList);
      toast.success(`All values have been updated successfully`, {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchValues();
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

  async function fetchValues() {
    try {
      const response = await getOurValues();
      setOurValuesList(response.data.data.contents);
    } catch (error) {
      console.error("Error fetching values:", error);
    }
  }

  useEffect(() => {
    fetchValues();
  }, []);

  return (
    <>
      <div className="row">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Our Values List</h2>
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
          <RefreshIcon onClick={fetchValues} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <table className="table table-blue table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Title (Nepali)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ourValuesList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <label htmlFor={`icon-${index}`}>
                  <img
                    disabled={!enableInput}
                    src={item.icon}
                    style={{
                      height: "50px",
                      width: "50px",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </label>
                <input
                  disabled={!enableInput}
                  id={`icon-${index}`}
                  type="file"
                  name="icon"
                  onChange={(e) => handleChange(index, "icon", e)}
                  style={{ display: "none", borderRadius: "50px" }}
                />
              </td>
              <td>
                <input
                  disabled={!enableInput}
                  type="text"
                  value={item.title}
                  onChange={(e) => handleChange(index, "title", e)}
                />
              </td>
              <td>
                <input
                  disabled={!enableInput}
                  type="text"
                  value={item.titleNepali}
                  onChange={(e) => handleChange(index, "titleNepali", e)}
                />
              </td>
              <td>
                <button
                  disabled={!enableInput}
                  onClick={() => updateValue(index)}
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
                  justifyContent: "center",
                }}
              >
                <button
                  disabled={!enableInput}
                  onClick={updateAllValues}
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

export default OurValuesList;
