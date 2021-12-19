import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import socket from "../../SocketConfig";
import { Green, Blue, LightestGrey, HeadingText } from "../../Styles/styles";

const formatTime = (time) => {
  const hours = parseInt(time/3600)
  const minutes = parseInt((time%3600)/60)
  if(hours <= 9 && minutes <= 9) return `0${hours}:0${minutes}`
  if(hours <= 9) return `0${hours}:${minutes}`
  if(minutes <= 9 ) return `${hours}:0${minutes}`
  return `${hours}:${minutes}`
}

export default function TableComponent() {
  console.log("rendering the component");
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    const data = {
      clientId: "KJNDKJ234",
    };

    socket.on(
      "running-shift-data",
      (data) => {
        console.log(data);
        setData(data);
      },
      [socket]
    );

    // socket.emit('test-conn', "hello");
    // socket.emit('report-live-status', data);
    socket.emit("initial-connection-dashboard", data);

    socket.on("dashboard-update", (res) => {
      console.log(res);
      setData(res);
    });

    // socket.on("dashboard-update", (res) => {
    //   console.log(res);
    //   setNewData(res);
    //   setData((prevState) => {
    //     const temp = prevState;
    //     if (temp && newData) {
    //       temp.runningShift.employees.forEach((element) => {
    //         if (element["_id"] === newData.employeeId) {
    //           console.log("element", element);
    //           if (newData.detected) element.activeTime += 10;
    //           else element.awayTime += 10;
    //         }
    //       });
    //     }
    //     console.log(temp, prevState);
    //     return temp;
    //   });
    // });
  }, [newData]);

  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "0" }}>
      {data.runningShift.employees ? (
        <Table sx={{ width: "100%" }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow
              sx={{
                th: { textAlign: "center" },
                background: "var(--blue-light)",
                color: "var(--grey)",
              }}>
              <TableCell>Zone</TableCell>
              <TableCell>WorkerID/Name</TableCell>
              <TableCell>Active&nbsp;Hrs</TableCell>
              <TableCell>Away&nbsp;Hrs</TableCell>
              <TableCell>Idle&nbsp;Hrs</TableCell>
              <TableCell>Total&nbsp;Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.runningShift.employees.map((row) => {
              // row.activeTime = moment({}).seconds(row.activeTime).format("mm:ss")
              return (
                <TableRow
                  key={row._id}
                  sx={{
                    "td, th": {
                      border: 0,
                    },
                    td: { textAlign: "center" },
                    background: "var(--grey-light)",
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                  }}>
                  <TableCell>{row.zoneName}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Green>
                      {/* {moment.utc(row.activeTime * 1000).format("mm:ss")}m */}
                      {formatTime(row.activeTime)}hrs
                    </Green>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>
                      {/* {moment.utc(row.awayTime * 1000).format("mm:ss")}m */}
                      {formatTime(row.awayTime)}hrs
                    </LightestGrey>
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
