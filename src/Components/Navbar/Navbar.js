import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button";








const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Button color="inherit">Welcome</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">News</Button>
          <Button color="inherit">Find Us</Button>
          <Button color="inherit">Reservation</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
