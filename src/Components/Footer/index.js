import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    display: "flex",
    padding: 1,
    justifyContent: "flex-center",
    alignItems: "center",
    bottom: 0,
    margin: 10
    },
    typography: {
        margin: "auto",
    },
    links: {
        marginRight: 5,
        marginLeft: 5
    }
});

export default function Footer() {
    const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography
        variant="h6"
        component="h6"
        className={classes.typography}
        gutterBottom
      >
        Created by
        <Link
          className={classes.links}
          href="https://github.com/sammiefrog"
          target="_blank"
          rel="noopener"
        >
          Sammantha Sasenick
        </Link>
        using
        <Link
          className={classes.links}
          href="https://petstore.swagger.io/"
          target="_blank"
          rel="noopener"
        >
          Swagger PetStore API
        </Link>
      </Typography>
    </Box>
  );
}
