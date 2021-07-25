import React, { useState } from "react";
//material ui styles and components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from '@material-ui/core/Typography';
//custom components
import ShopButton from "../ShopButton";
//api
import { updatePetStatus, findPetToUpdate } from "../../utils/API";


const useStyles = makeStyles({
  table: {
    margin: 'auto',
    minWidth: 450,
    maxWidth: 900
  },
  typography: {
    textAlign: "center",
    margin: 25
  }
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function BasicTable(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")

  //instantiating petTable to be assigned later based on selected status
  let petTable;

  const markAsSold = async (event) => {
    try {
      //targeting the pets' id
      const petId = event.currentTarget.dataset.id;
      //finding the pet by ID
      const petToUpdate = await findPetToUpdate(petId);
      console.log(petToUpdate)
      //updating pets status to sold
      petToUpdate.status = "sold";
      //using a PUT request to update pet
      const updatedPet = await updatePetStatus(petToUpdate);
      console.log(updatedPet);
      //setting message for alert & opening alert
      setMessage(`${updatedPet.name} has been sold!`);
      setOpen(true);

    } catch (error) {
      console.log(error);
    }
    
  };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    };

  //displaying the table differently based on selected pet status
  switch (props.petStatus) {
    case "available":
      petTable = (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID#</TableCell>
              <TableCell>Pet Name</TableCell>
              <TableCell align="right">Photo</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Mark As Sold</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.pets.map((pet, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" data-id={pet.id}>
                  {pet.id}
                </TableCell>
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
                <TableCell align="right"><ShopButton id={pet.id} markAsSold={markAsSold}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
      break;

    case "pending":
      //if no pets are pending, display a message instead of the table
      props.pets.length === 0
        ? (petTable = (
          <Typography className={classes.typography} variant="h4" component="h2" gutterBottom>
              No pending pets at this time!
            </Typography>
          ))
        : (petTable = (
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
                      {pet?.name}
                    </TableCell>
                    <TableCell align="right">
                      <img
                        src={`https://placedog.net/50/50?id=${i + 1}`}
                        alt="placeholder dog"
                      />
                    </TableCell>
                    <TableCell align="right">{pet?.status}</TableCell>
                    <TableCell align="right">{pet?.category?.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ));
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
                  {pet?.name}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={`https://placedog.net/50/50?id=${i + 1}`}
                    alt="placeholder dog"
                  />
                </TableCell>
                <TableCell align="right">{pet?.status}</TableCell>
                <TableCell align="right">{pet?.category?.name}</TableCell>
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </TableContainer>
  );
}
