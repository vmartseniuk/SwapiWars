import React, { memo } from "react";
/* eslint-disable react/prop-types */
import { BackSide } from "react-flippy";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
/* @core */
import colors from "config/assets";
import convertToRoman from "utils/toRoman";

const useStyles = makeStyles(() => ({
  front: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202020",
    borderRadius: 20,
    boxShadow: `0 3px 20px -8px rgba(${colors.whiteRGB}, 0.42), 0 4px 5px 0px rgba(${colors.whiteRGB}, 0.12), 0 3px 1px -5px rgba(${colors.whiteRGB}, 0.2)`,
  },
  title: {
    fontSize: "16px",
    textAlign: "center",
    letterSpacing: "5px",
    textTransform: "uppercase",
  },
  opening: {
    padding: "15px 0",
    fontSize: "14px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  button: {
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "2px",
    textTransform: "none",
    background: "#272727",
  },
}));

const Back = (props) => {
  const { opening_crawl: opening, episode_id: episode, onClick } = props;
  const classes = useStyles();

  return (
    <BackSide className={classes.front}>
      <Typography className={classes.title}>
        {convertToRoman(episode)}
        &nbsp; episode
      </Typography>

      <Typography className={classes.opening}>{opening}</Typography>
      <Button className={classes.button} variant="outlined" size="large" onClick={onClick}>
        show more
      </Button>
    </BackSide>
  );
};
export default memo(Back);
