import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  links: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.links}>
          <Link>Welcome</Link>
          <Link to="About-us" smooth={true} duration={1000}>
            About Us
          </Link>

          <Link to="Menu" smooth={true} duration={1000}>
            Menu
          </Link>
          <Link to="Gallery" smooth={true} duration={1000}>
            Gallery
          </Link>
          <Link>News</Link>
          <Link>Find Us</Link>
          <Link>Reservation</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
