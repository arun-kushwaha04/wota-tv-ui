import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import socket from "../../SocketConfig";
import { Green, Blue, LightestGrey, HeadingText,Red } from "../../Styles/styles";
// import {data} from './data';

const formatTime = (time) => {
  const hours = parseInt(time/3600)
  const minutes = parseInt((time%3600)/60)
  if(hours <= 9 && minutes <= 9) return `0${hours}:0${minutes}`
  if(hours <= 9) return `0${hours}:${minutes}`
  if(minutes <= 9 ) return `${hours}:0${minutes}`
  return `${hours}:${minutes}`
}

export default function TableComponent() {

  const [data, setData] = useState(null);
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    const data = {
      clientId: "KJNDKJ234",
    };

    socket.emit("initial-connection-dashboard", data);
    socket.on(
      "running-shift-data",
      (data) => {
        data.runningShift.employees.sort((emp1,emp2) => emp1.points>emp2.points)
        console.log(data)
        setData(data);
      },
      [socket]
    );
    socket.on("dashboard-update", (res) => {
      res.runningShift.employees.sort((emp1,emp2) => emp1.points>emp2.points)
      console.log(res)
      setData(res);
    });
  }, [newData]);

  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "0",padding:"0 8rem" }}>
      {data.runningShift.employees ? (
        <Table sx={{ width: "100%" }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow
              sx={{
                th: { textAlign: "center" },
                background: "var(--black)",
                color: "white",
              }}>
              <TableCell>StationId</TableCell>
              <TableCell>WorkerID/Name</TableCell>
              <TableCell>Active&nbsp;Hrs</TableCell>
              <TableCell>Away&nbsp;Hrs</TableCell>
              <TableCell>Idel&nbsp;Hrs</TableCell>
              <TableCell>Total&nbsp;Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.runningShift.employees.map((row,idx) => {
              // row.activeTime = moment({}).seconds(row.activeTime).format("mm:ss")
              let background = idx < 3 ? "var(--light-green)" : "var(--grey-light)"
              return (
                <TableRow
                  key={row._id}
                  sx={{
                    "td, th": {
                      border: 0,
                    },
                    td: { textAlign: "center" },
                    background: background,
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                  }}>
                  <TableCell>{row.stationId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Green>
                      {/* {moment.utc(row.activeTime * 1000).format("mm:ss")}m */}
                      {formatTime(row.activeTime)}hrs
                    </Green>
                  </TableCell>
                  <TableCell>
                    <Red>
                      {/* {moment.utc(row.awayTime * 1000).format("mm:ss")}m */}
                      {formatTime(row.awayTime)}hrs
                    </Red>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>
                      {/* {moment.utc(row.idealTime * 1000).format("mm:ss")}m */}
                      {row.idealTime ? `${formatTime(row.idealTime)}hrs `: '--'}
                    </LightestGrey>
                  </TableCell>                  
                  <TableCell>
                    <Blue>{row.points ? row.points.toFixed(0):'--'}</Blue>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <HeadingText> No Data Available </HeadingText>
      )}
    </TableContainer>
  );
}
