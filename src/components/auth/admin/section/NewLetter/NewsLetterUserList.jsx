import React, { useEffect, useState } from "react";
import CustomModal from "./popup/CustomModal";
import "./popup/customModal.css";
import CreateNewsLetterUser from "./createNewsLetterUser";
import URLS from "../../../../../urls/urls";
import { Button, Table } from "@mui/joy";
import { ToastContainer, toast } from "react-toastify";

const NewsLetterUserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUserList = async () => {
    try {
      let response = await fetch(
        `${URLS.BASE_URL}/api/newsLetter/newsLetterUser`,
        {
          method: "get",
        }
      );
      let userData = await response.json();

      if (userData.success === true) {
        setUsers(userData.newsLetterUsers);
      } else {
        toast.error(`${JSON.stringify(userData.errormessage)}`, {
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
    } catch (error) {
      toast.error(`Something went wrong`, {
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

  useEffect(() => {
    fetchUserList();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const userAddedMsg = (id) => {
    toast.success(`user has been added successfully with id  ${id} `, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
    setModalOpen(false);
    fetchUserList();
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
              <li className="breadcrumb-item active">NewsLetter Users</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card " style={{ height: "auto" }}>
                <div className="card-body">
                  <h5 className="card-title">NewsLetter User's List</h5>
                  <hr className="border-2" />

                  <Button
                    variant="solid"
                    color="primary"
                    onClick={() => setModalOpen(true)}
                  >
                    Create News NesLetter User
                  </Button>
                  <CustomModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    contentComponent={
                      <CreateNewsLetterUser userAddedFunc={userAddedMsg} />
                    }
                  ></CustomModal>
                  <Table variant="outline" color="primary">
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Groups</th>
                      </tr>
                    </thead>
                    <tbody style={{ height: "auto" }}>
                      {users.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
                              <td>{index}</td>
                              <td>{item._id}</td>
                              <td> {item.name}</td>
                              <td>{item.email}</td>
                              <td>
                                {item.groups.map((group, index) => {
                                  return (
                                    <span
                                      style={{
                                        height: "auto",
                                        width: "auto",
                                      }}
                                      key={index}
                                    >
                                      {group.name},{" "}
                                    </span>
                                  );
                                })}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </main>
    </>
  );
};

export default NewsLetterUserList;
