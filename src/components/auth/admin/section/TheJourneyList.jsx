import { Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import {
  getTheJourney,
  updateTheJourney,
} from "../../../../services/theJourneyService";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ToastContainer, toast } from "react-toastify";
import { Close } from "@mui/icons-material";

const TheJourneyList = () => {
  const [journeyList, setJourneyList] = useState([
    {
      date: "2023-01-01",
      dateNepali: "२०७९-१-१",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      descNepali: "लोरेम इप्सम डोलोर सित अमेत, कोन्सेक्टेतुर अदिपिस्किंग एलिट।",
    },
  ]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [enableInput, setEnableInput] = useState(false);

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleChange = (index, field, e) => {
    const updatedJourney = [...journeyList];
    updatedJourney[index][field] = e.target.value;
    setJourneyList(updatedJourney);
  };

  const handleSubmit = (index) => async (event) => {
    event.preventDefault();
    setEnableInput(false);
    const toUpdateJourney = journeyList[index];
    try {
      const updateAll = await updateTheJourney([toUpdateJourney]);
      toast.success(`Journey has been updated successfully`, {
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
      fetchJourney();
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

  const updateAllAtOnce = async (event) => {
    event.preventDefault();
    setEnableInput(false);
    try {
      const updateAll = await updateTheJourney(journeyList);
      toast.success(`Journey has been updated successfully`, {
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
      fetchJourney();
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

  async function fetchJourney() {
    try {
      const response = await getTheJourney();
      setJourneyList(response.data.data.contents);
    } catch (error) {
      console.error("Error fetching journey:", error);
    }
  }

  useEffect(() => {
    fetchJourney();
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
          <h2>Journey List</h2>
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
          <RefreshIcon onClick={fetchJourney} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <table className="table table-blue table-striped">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Date</th>
            <th>Date (Nepali)</th>
            <th>Description</th>
            <th>Description (Nepali)</th>
          </tr>
        </thead>
        <tbody>
          {journeyList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={item.date}
                  onChange={(e) => handleChange(index, "date", e)}
                  disabled={!enableInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.dateNepali}
                  onChange={(e) => handleChange(index, "dateNepali", e)}
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
                    <Close></Close>
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
                  onClick={handleSubmit(index)}
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

export default TheJourneyList;
