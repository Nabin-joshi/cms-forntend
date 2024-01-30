import React, { useState } from "react";
import URLS from "../../../../../urls/urls";
import { Input, List } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

const MapNewsLetterUserGroup = () => {
  const [newsLetterUsers, setNewsLetterUsers] = useState([]);
  const [newsLetterGroups, setNewsLetterGroup] = useState([]);

  const [selectedNewsLetterUser, setSelectedNewsLetterUser] = useState({});
  const [selectedNewsLetterGroup, setSelectedNewsLetterGroup] = useState({});

  const fetchLikelyUsers = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `${
        URLS.BASE_URL
      }/api/newsLetter/newsLetterUsersLimited?emailLike=${e.target.value.trim()}`,
      {
        method: "get",
      }
    );
    let resultData = await response.json();
    setNewsLetterUsers(resultData.limitedUsers);
  };

  const fetchLikelyGroups = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `${
        URLS.BASE_URL
      }/api/newsLetter/newsLetterGroupsLimited?groupNameLike=${e.target.value.trim()}`,
      {
        method: "get",
      }
    );
    let resultData = await response.json();
    setNewsLetterGroup(resultData.limitedGroups);
  };

  const mapUserToGrop = async (e) => {
    e.preventDefault();
    if (
      selectedNewsLetterUser._id !== undefined &&
      selectedNewsLetterGroup._id !== undefined
    ) {
      const userGroupMap = {
        userId: selectedNewsLetterUser._id,
        groupId: selectedNewsLetterGroup._id,
      };
      // alert(JSON.stringify(userGroupMap));
      let response = await fetch(
        `${URLS.BASE_URL}/api/newsLetter/newsLetterUserGroupMap`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(userGroupMap),
        }
      );
      let data = await response.json();
      if (data.success === true) {
        toast.success(`User is successfully maped to the group`, {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
        });
      } else {
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
    } else {
      toast.error(`please select user and group`, {
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
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Services</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">NewsLetter</li>
              <li className="breadcrumb-item active">User Group Maping</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Map user to group</h5>
                  <hr className="border-2" />
                  <div className="row">
                    <div className="col-md-4">
                      <Input
                        variant="soft"
                        className="mt-2"
                        type="text"
                        placeholder="Enter User"
                        onChange={fetchLikelyUsers}
                      />
                    </div>
                    <div className="col-md-4">
                      <Input
                        variant="soft"
                        className="mt-2"
                        type="text"
                        placeholder="Enter Group"
                        onChange={fetchLikelyGroups}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      {selectedNewsLetterUser.email && (
                        <span className="btn btn-primary disabled mt-2">
                          {selectedNewsLetterUser.email}
                        </span>
                      )}
                      <List variant="outline" color="primary">
                        <ul>
                          {newsLetterUsers.map((item, index) => {
                            return (
                              <li
                                style={{ cursor: "pointer" }}
                                key={index}
                                onClick={(e) => {
                                  setSelectedNewsLetterUser(item);
                                }}
                              >
                                {item.email}
                              </li>
                            );
                          })}
                        </ul>
                      </List>
                    </div>
                    <div className="col-md-4">
                      {selectedNewsLetterGroup.name && (
                        <span className="btn btn-primary disabled mt-2">
                          {selectedNewsLetterGroup.name}
                        </span>
                      )}
                      <ul>
                        {newsLetterGroups.map((item, index) => {
                          return (
                            <li
                              style={{ cursor: "pointer" }}
                              key={index}
                              onClick={(e) => {
                                setSelectedNewsLetterGroup(item);
                              }}
                            >
                              {item.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        onClick={mapUserToGrop}
                        className="btn btn-primary"
                      >
                        Map User To Group
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </main>
    </>
  );
};

export default MapNewsLetterUserGroup;
