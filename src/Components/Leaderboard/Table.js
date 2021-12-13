import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import moment from "moment";
import { Green, Blue, LightestGrey, HeadingText,Red } from "../../Styles/styles";
import {data} from './data';

export default function TableComponent() {
  console.log("rendering the component"); 
  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "0",padding:"0 8rem" }}>
      {data ? (
        <Table sx={{ width: "100%" }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow
              sx={{
                th: { textAlign: "center" },
                background: "var(--black)",
                color: "white",
              }}>
              <TableCell>StationID</TableCell>
              <TableCell>WorkerID/Name</TableCell>
              <TableCell>Active&nbsp;Mins</TableCell>
              <TableCell>Away&nbsp;Mins</TableCell>
              <TableCell>Ideal&nbsp;Mins</TableCell>
              <TableCell>Kilopicks&nbsp;Produced</TableCell>
              <TableCell>Total&nbsp;Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.runningShift.employees.map((row,idx) => {
              // row.activeTime = moment({}).seconds(row.activeTime).format("mm:ss")
              let background = idx < 3 ? "var(--light-green)" : "var(--grey-light)"
              return (
                <TableRow
                  key={row.stationID}
                  sx={{
                    "td, th": {
                      border: 0,
                    },
                    td: { textAlign: "center" },
                    background: background,
                    marginBottom: "0.5rem",
                    marginTop: "0.5rem",
                  }}>
                  <TableCell>{row.stationID}</TableCell>
                  <TableCell>{row.workerName}</TableCell>
                  <TableCell>
                    <Green>
                      {/* {moment.utc(row.activeTime * 1000).format("mm:ss")}m */}
                      {row.activeTime}m
                    </Green>
                  </TableCell>
                  <TableCell>
                    <Red>
                      {/* {moment.utc(row.awayTime * 1000).format("mm:ss")}m */}
                      {row.awayTime}m
                    </Red>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>
                      {/* {moment.utc(row.idealTime * 1000).format("mm:ss")}m */}
                      {row.idealTime}m
                    </LightestGrey>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>{row.kiloPicksProduced}</LightestGrey>
                  </TableCell>
                  <TableCell>
                    <Blue>{row.totalPoints}</Blue>
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
