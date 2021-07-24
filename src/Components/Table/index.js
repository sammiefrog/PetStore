import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    margin: 'auto',
    minWidth: 450,
    maxWidth: 700
  },
});


export default function BasicTable(props) {
  const classes = useStyles();
  
  let petTable;

  switch (props.petStatus) {
    case "available":
      petTable = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pet Name</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Mark As Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.pets.map((pet, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={`https://placedog.net/50/50?id=${i + 1}`}
                    alt="placeholder dog"
                  />
                </TableCell>
                <TableCell align="right">{pet.status}</TableCell>
                <TableCell align="right">button here</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
      break;

    case "pending":
      petTable = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pet Name</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.pets.map((pet, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={`https://placedog.net/50/50?id=${i + 1}`}
                    alt="placeholder dog"
                  />
                </TableCell>
                <TableCell align="right">{pet.status}</TableCell>
                <TableCell align="right">{pet.category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
      break;

    case "sold":
      petTable = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pet Name</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.pets.map((pet, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {pet.name}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={`https://placedog.net/50/50?id=${i + 1}`}
                    alt="placeholder dog"
                  />
                </TableCell>
                <TableCell align="right">{pet.status}</TableCell>
                <TableCell align="right">{pet.category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
      break;

    default:
      <></>;
  }

  return (
    <TableContainer component={Paper}>
      {petTable}
    </TableContainer>
  );
}
