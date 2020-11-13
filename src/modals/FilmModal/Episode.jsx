/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from "react";

import { makeStyles, Typography } from "@material-ui/core";
import convertToRoman from "utils/toRoman";

const useStyles = makeStyles((theme) => ({
  episode: {
    fontSize: 16,
    lineHeight: "24px",
    color: "#726A6A",
    letterSpacing: "0.27em",
  },
}));
const Episode = (props) => {
  const classes = useStyles();
  const { children } = props;
  return <Typography className={classes.episode}>{convertToRoman(children)} episode</Typography>;
};

export default memo(Episode);
