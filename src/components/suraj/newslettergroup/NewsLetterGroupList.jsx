import React, { useEffect, useState } from "react";
import CustomModal from "../popup/CustomModal";
import CreateNewsLetterGroup from "./createNewsLetterGroup";

const NewsLetterGroupList = () => {
  const [nlGroups, setNlGroups] = useState([]);

  const fetchGroupList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/newsLetter/newsLetterGroup`,
        {
          method: "get",
        }
      );
      const resData = await response.json();
      if (resData.success === true) {
        setNlGroups(resData.newsLetterGroups);
      } else {
        alert(resData.errormessage);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchGroupList();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const successGroupAdd = (name) => {
    alert(`Group ${name} has beeen added successfully`);
    fetchGroupList();
  };
  return (
    <>
      <h3>NewsLetterGroupList</h3>
      <button onClick={() => setModalOpen(true)}>Create New Group</button>
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentComponent={
          <CreateNewsLetterGroup finishGroupAdding={successGroupAdd} />
        }
      ></CustomModal>
      <table>
        <thead>
          <tr>
            <th>S.N</th> <th>ID</th> <th>Group Name</th>
          </tr>
        </thead>
        <tbody>
          {nlGroups.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default NewsLetterGroupList;
