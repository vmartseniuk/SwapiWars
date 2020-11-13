/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  realiseDate: {
    ...theme.typography.tiny,
    color: "#DBFF00",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 0 20px",
    },
  },
}));
const ReleaseDate = (props) => {
  const classes = useStyles();
  const { children } = props;

  return <div className={classes.realiseDate}>Release date:{children}</div>;
};

export default memo(ReleaseDate);
