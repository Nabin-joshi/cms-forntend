import { Button, Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  deleteBoardCommitteeMember,
  getAboutUs,
} from "../../../../services/aboutUsService";
import { toast } from "react-toastify";

const BoardCommitteeMembers = () => {
  const [members, setMembers] = useState([]);

  const delteBoardCommitteeMem = async (id) => {
    try {
      const response = await deleteBoardCommitteeMember(id);
      toast.success("deleted successfully", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
      fetchData();
    } catch (error) {
      toast.error(error.response.data.errormessage);
    }
  };
  async function fetchData() {
    const res = await getAboutUs("boardCommittees");
    const data = res.data.data;
    setMembers(data.boardCommittees);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h5>Members</h5>
      <Table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Image</th>
            <th>Name</th>
            <th>Name Nepali</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        overflow: "hidden",
                      }}
                      src={element.photo}
                      alt=""
                    />
                  </td>
                  <td>{element.name}</td>
                  <td>{element.nameNepali}</td>
                  <td>{element.gender}</td>
                  <td>{element.position}</td>
                  <td>{element.role}</td>

                  <td>
                    <Button
                      onClick={(e) => delteBoardCommitteeMem(element._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default BoardCommitteeMembers;
