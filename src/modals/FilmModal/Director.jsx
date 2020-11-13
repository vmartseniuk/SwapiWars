/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from "react";
import { makeStyles, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  directorContainer: {
    display: "inline-flex",
  },
  directorIcon: {
    marginRight: 20,
  },
  directorInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  directorLabel: {
    ...theme.typography.tiny,
    color: "#726A6A",
    textTransform: "capitalize",
  },
}));

const Director = (props) => {
  const { children, src } = props;
  const classes = useStyles();

  return (
    <div className={classes.directorContainer}>
      <Avatar alt="Profile Picture" src={src} className={classes.directorIcon} />
      <div className={classes.directorInfo}>
        <Typography className={classes.directorName}>{children}</Typography>
        <Typography className={classes.directorLabel}>producer</Typography>
      </div>
    </div>
  );
};

export default memo(Director);
