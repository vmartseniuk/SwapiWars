import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// @core
import colors from "config/assets";
import DeathStar from "media/icon/DeathStar";
import { swapiUrl } from "config/constants";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  button: {
    color: colors.white,
  },
  logoIcon: {
    fontSize: "30px !important",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <Button component="a" href={swapiUrl} underline="none" target="_blank" className={classes.button} startIcon={<DeathStar className={classes.logoIcon} stroke={colors.white} />}>
          Swapi wars
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
