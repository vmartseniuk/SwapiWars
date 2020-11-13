import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Darth from "media/icon/Darth";

const useStyle = makeStyles(() => ({
  footer: {
    textAlign: "center",
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: 40,
    stroke: "white",
    margin: "0 10px 0 8px",
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <div>Come to the dark side, we have cookies</div>
      <Darth className={classes.icon} />
    </div>
  );
};

export default Footer;
