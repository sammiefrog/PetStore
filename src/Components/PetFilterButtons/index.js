import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        Available
      </Button>
      <Button variant="contained" color="primary">
        Sold
      </Button>
      <Button variant="contained" color="secondary">
        Pending
      </Button>
    </div>
  );
}
