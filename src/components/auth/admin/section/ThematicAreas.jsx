import React, { useEffect, useState } from "react";
import {
  deleteThematicArea,
  getAboutUs,
} from "../../../../services/aboutUsService";
import { toast } from "react-toastify";
import { Button, Table } from "@mui/material";

const ThematicAreas = () => {
  const [thematicAreas, setthematicAreas] = useState([]);

  const delteThematicArea = async (id) => {
    try {
      const response = await deleteThematicArea(id);
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
    const res = await getAboutUs();
    const data = res.data.data;
    setthematicAreas(data.ourThematicAreas);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {" "}
      <h5>Thematic Areas</h5>
      <Table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Name Nepali</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {thematicAreas &&
            thematicAreas.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.title}</td>
                  <td>{element.titleNepali}</td>
                  <td>
                    <Button onClick={(e) => delteThematicArea(element._id)}>
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

export default ThematicAreas;
