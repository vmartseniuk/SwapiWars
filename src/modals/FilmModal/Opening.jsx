/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  opening: {
    fontSize: 14,
    lineHeight: "18px",
    letterSpacing: "3px",
    textAlign: "justify",
    padding: "40px 0",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      lineHeight: "24px",
    },
  },
}));
const Opening = (props) => {
  const classes = useStyles();
  const { children } = props;
  return <Typography className={classes.opening}>{children}</Typography>;
};

export default memo(Opening);
