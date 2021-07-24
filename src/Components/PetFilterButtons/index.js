import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    justifyContent: 'center'
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        data-status="available"
        onClick={() => props.handleSearch("available")}
      >
        Available
      </Button>
      <Button
        variant="contained"
        color="primary"
        data-status="sold"
        onClick={() => props.handleSearch("sold")}
      >
        Sold
      </Button>
      <Button
        variant="contained"
        color="secondary"
        data-status="pending"
        onClick={() => props.handleSearch("pending")}
      >
        Pending
      </Button>
    </div>
  );
}
