import React, { useEffect, useState } from "react";
import { getGetInTouch } from "../../../services/ContactUsService";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Table } from "@mui/joy";

const GetInTouches = () => {
  const [GetInTouches, setGetInTouch] = useState([]);

  const fetchGetInTouch = async () => {
    try {
      const res = await getGetInTouch();
      const setDatas = res.data.data;
      setGetInTouch(setDatas);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGetInTouch();
  });

  return (
    <>
      <main className="main">
        <div className="pagetitle">
          <h1>Slider</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Auth</a>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Get In Touches</li>
            </ol>
          </nav>
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "white" }}>
                <TableCell>S.N</TableCell>
                <TableCell align="">name</TableCell>
                <TableCell align="">email</TableCell>
                <TableCell align="">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GetInTouches.map((row, index) => (
                <TableRow
                  style={{ backgroundColor: "white" }}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="">{row.name}</TableCell>
                  <TableCell align="">{row.email}</TableCell>
                  <TableCell align="">{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <hr />
      </main>
    </>
  );
};

export default GetInTouches;
