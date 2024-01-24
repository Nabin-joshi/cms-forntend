import React, { useState } from "react";

const MapNewsLetterUserGroup = () => {
  const [newsLetterUsers, setNewsLetterUsers] = useState([]);
  const [newsLetterGroups, setNewsLetterGroup] = useState([]);

  const [selectedNewsLetterUser, setSelectedNewsLetterUser] = useState({});
  const [selectedNewsLetterGroup, setSelectedNewsLetterGroup] = useState({});

  const fetchLikelyUsers = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://localhost:5000/api/newsLetter/newsLetterUsersLimited?emailLike=${e.target.value.trim()}`,
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
      `http://localhost:5000/api/newsLetter/newsLetterGroupsLimited?groupNameLike=${e.target.value.trim()}`,
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
        `http://localhost:5000/api/newsLetter/newsLetterUserGroupMap`,
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
        alert("User is successfully maped to the group");
      } else {
        alert(data.errormessage);
      }
    } else {
      alert("please select user and group");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Enter User"
            onChange={fetchLikelyUsers}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Enter Group"
            onChange={fetchLikelyGroups}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <span>{selectedNewsLetterUser.email}</span>
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
        </div>
        <div className="col-md-4">
          <span>{selectedNewsLetterGroup.name}</span>
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
          <button onClick={mapUserToGrop}>Map User To Group</button>
        </div>
      </div>
    </>
  );
};

export default MapNewsLetterUserGroup;
