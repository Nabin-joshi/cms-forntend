import React, { useEffect, useRef, useState } from "react";
import {
  getNewsLetterGroups,
  getNewsLetterGroupsLimited,
  sendNewsLetterToEmails,
} from "../../../../services/NewsLetterGroupMapping";
import { ToastContainer, toast } from "react-toastify";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { NestCamWiredStand } from "@mui/icons-material";
import { toastError } from "../../../../services/ToastService";
import { toastPosition } from "../../../../config/toastProp";
const NewsPaperGroupMappingForm = () => {
  const [newsLetterGroups, setNewsLetterGroup] = useState([]);
  const [groupOptions, selectGroupOptions] = useState();
  const fileRef = useRef();

  const optionsG = [
    { name: "The Godfather", id: 1 },
    { name: "Pulp Fiction", id: 2 },
  ];
  const defaultProps = {
    options: groupOptions,
    getOptionLabel: (option) => option.name,
  };
  const fetchLimitedGroups = async (event) => {
    try {
      const response = await getNewsLetterGroupsLimited(event.target.value);
      const responseData = response.data.limitedGroups;
      selectGroupOptions(responseData);
    } catch (error) {
      alert("SOmething went wrong " + error.response.data.errormessage);
    }
  };

  const updateSelectedNewsLetterGroup = (event) => {
    const parsedValueObj = JSON.parse(event.target.value);
    if (newsLetterGroups.map((nl) => nl._id).includes(parsedValueObj._id)) {
      return;
    }
    setNewsLetterGroup((prevData) => [...prevData, parsedValueObj]);
  };

  const removeGroup = (id) => {
    const filteredNewsGroups = newsLetterGroups.filter((nl) => nl._id !== id);
    setNewsLetterGroup(filteredNewsGroups);
    // alert(JSON.stringify(filteredNewsGroups));
  };

  const submitMappingNewsletterToUser = (event) => {
    event.preventDefault();
    const mapData = {};
    mapData["groups"] = newsLetterGroups;
    const formData = new FormData();
    const reader = new FileReader();
    if (fileRef.current.files.length === 0) {
      toast.error("please upload file !", toastPosition);
      return;
    }
    reader.readAsDataURL(fileRef.current.files[0]);
    reader.onload = async () => {
      if (reader.readyState === 2) {
        mapData["file"] = reader.result;
        try {
          const res = await sendNewsLetterToEmails(mapData);
          toast.success(`Send Successfully`, toastPosition);
          setNewsLetterGroup([]);
        } catch (error) {
          toast.error(error.response.data.errormessage, toastPosition);
        }
      }
    };
  };

  const fetchAllGroups = async () => {
    try {
      const res = await getNewsLetterGroups();
      const responseData = res.data.newsLetterGroups;
      selectGroupOptions(responseData);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAllGroups();
  }, []);

  return (
    <>
      {" "}
      <main className="main">
        <div className="pagetitle">
          <h1>NewsLetter Group Mapping </h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">
                NewsLetter Group Mapping
              </li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form action="" onSubmit={submitMappingNewsletterToUser}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-3">
                            <label htmlFor="">
                              <span>NewsLetter </span>{" "}
                            </label>
                          </div>
                          <div className="col-md-3">
                            <input type="file" ref={fileRef} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-3">
                            {" "}
                            <label htmlFor="">SelectGroup </label>
                          </div>
                          <div className="col-md-3 ml-3">
                            <div className="row">
                              <input
                                type="text"
                                onChange={fetchLimitedGroups}
                              />{" "}
                            </div>
                            <div
                              className="row"
                              style={{
                                overflow: "scroll",
                                width: "150px",
                                height: "100px",
                              }}
                            >
                              {groupOptions &&
                                groupOptions.map((el, index) => (
                                  <>
                                    <li
                                      style={{ listStyle: "none", padding: 0 }}
                                    >
                                      <Button
                                        size="small"
                                        value={JSON.stringify(el)}
                                        onClick={updateSelectedNewsLetterGroup}
                                      >
                                        {el.name}
                                      </Button>
                                    </li>
                                    <br></br>
                                  </>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          {" "}
                          {newsLetterGroups &&
                            newsLetterGroups.map((el, index) => (
                              <li className="m-2">
                                <Button
                                  key={index + "sng"}
                                  variant="contained"
                                  color="secondary"
                                  size="small"
                                >
                                  <span className="">{el.name}</span>
                                  <span
                                    className="ml-3 text-danger"
                                    onClick={() => removeGroup(el._id)}
                                  >
                                    x{" "}
                                  </span>
                                </Button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <Button type="submit" color="primary">
                      {" "}
                      Send{" "}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
};

export default NewsPaperGroupMappingForm;
