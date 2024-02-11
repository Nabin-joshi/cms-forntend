import React, { useEffect, useState } from "react";
import CustomModal from "../popup/CustomModal";
import CreateNewsLetterGroup from "./createNewsLetterGroup";
import URLS from "../../../../../../urls/urls";
import { ToastContainer, toast } from "react-toastify";

const NewsLetterGroupList = () => {
  const [nlGroups, setNlGroups] = useState([]);

  const fetchGroupList = async () => {
    try {
      const response = await fetch(
        `${URLS.BASE_URL}/api/newsLetter/newsLetterGroup`,
        {
          method: "get",
        }
      );
      const resData = await response.json();
      if (resData.success === true) {
        setNlGroups(resData.newsLetterGroups);
      } else {
        toast.error(`${resData.errormessage}`, {
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
    fetchGroupList();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const successGroupAdd = (name) => {
    toast.success(`Group ${name} has beeen added successfully`, {
      position: "top-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
    fetchGroupList();
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
              <li className="breadcrumb-item active">NewsLetter Groups</li>
            </ol>
          </nav>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">NewsLetter's Group List</h5>
                  <hr className="border-2" />

                  <button
                    className="btn btn-primary"
                    onClick={() => setModalOpen(true)}
                  >
                    Create New Group
                  </button>
                  <CustomModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    contentComponent={
                      <CreateNewsLetterGroup
                        finishGroupAdding={successGroupAdd}
                      />
                    }
                  ></CustomModal>
                  <table className="table table-striped">
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

export default NewsLetterGroupList;
