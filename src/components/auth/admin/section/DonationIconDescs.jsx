import React, { useEffect, useState } from "react";
import { toastPosition } from "../../../../config/toastProp";
import {
  deleteDonationIconDesc,
  getDonationInfo,
} from "../../../../services/donationService";
import { ToastContainer, toast } from "react-toastify";
import { Button, Table } from "@mui/material";

const DonationIconDescs = () => {
  const [iconDescs, setIconDescs] = useState([]);

  const deleteIconDesc = async (id) => {
    try {
      const response = await deleteDonationIconDesc(id);
      fetchData();
      toast.success("deleted successfully", toastPosition);
    } catch (error) {
      toast.error(error.response.data.errormessage, toastPosition);
    }
  };

  async function fetchData() {
    const res = await getDonationInfo("iconDescs");
    const data = res.data.data;
    setIconDescs(data.iconDescs);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h5>Icon Description</h5>
      <Table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Icon</th>
            <th>Description</th>
            <th>Description Nepali</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {iconDescs &&
            iconDescs.map((element, index) => {
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
                      src={element.icon}
                      alt=""
                    />
                  </td>
                  <td>{element.description}</td>
                  <td>{element.descriptionNepali}</td>

                  <td>
                    <Button onClick={(e) => deleteIconDesc(element._id)}>
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

export default DonationIconDescs;
