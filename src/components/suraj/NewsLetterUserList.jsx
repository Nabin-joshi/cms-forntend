import React, { useEffect, useState } from "react";
import CustomModal from "./popup/CustomModal";
import "./popup/customModal.css";
import CreateNewsLetterUser from "./createNewsLetterUser";

const NewsLetterUserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUserList = async () => {
    try {
      let users = await fetch(
        `http://localhost:5000/api/newsLetter/newsLetterUser`,
        {
          method: "get",
        }
      );
      let userData = await users.json();
      if (userData.success === true) {
        setUsers(userData.newsLetterUsers);
      } else {
        alert(JSON.stringify(userData.errormessage));
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    alert("goting to fetch");
    fetchUserList();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const userAddedMsg = (id) => {
    alert("user has been added successfully with id " + id);
    setModalOpen(false);
    fetchUserList();
  };

  return (
    <>
      <h1>NewsLetterUserList</h1>
      <button onClick={() => setModalOpen(true)}>
        Create News NesLetter User
      </button>
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentComponent={<CreateNewsLetterUser userAddedFunc={userAddedMsg} />}
      ></CustomModal>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Groups</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item._id}</td>
                  <td> {item.name}</td>
                  <td>{item.email}</td>
                  {item.groups.map((group, index) => {
                    return <td>{group.name}, </td>;
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default NewsLetterUserList;
