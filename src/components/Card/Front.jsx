import React, { memo } from "react";
/* eslint-disable react/prop-types */
import { FrontSide } from "react-flippy";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import convertToRoman from "utils/toRoman";
import Trooper from "media/image/trooper.png";
import DarthVader from "media/image/darth-vader.png";
import Yoda from "media/image/yoda.png";
import BobaFett from "media/image/boba-fett.png";
import Amidala from "media/image/amidala.png";

const randomBg = () => {
  const random = Math.floor(Math.random() * 5) + 0;
  const bigSize = [Trooper, DarthVader, Yoda, BobaFett, Amidala];
  return bigSize[random];
};

const useStyles = makeStyles((theme) => ({
  front: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  container: {
    height: "inherit",
  },
  background: ({ img }) => ({
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // background: colors.cardLabelBg,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${img})`,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    borderRadius: "20px",
    width: "110px",
    height: "110px",
    [theme.breakpoints.up("md")]: {
      width: "130px",
      height: "130px",
    },
  }),
  background_episode: {
    fontSize: 25,
  },
  background_text: {
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
  title: {
    textAlign: "center",
    display: "inline",
    fontSize: "25px",
    zIndex: 3,
    marginTop: "40%",
  },
}));

const Front = (props) => {
  const { episode_id: episode, title } = props;
  const img = randomBg();
  const classes = useStyles({ img });
  return (
    <FrontSide className={classes.front}>
      <div className={classes.background}>
        <Typography variant="h5" className={classes.background_episode}>
          {convertToRoman(episode)}
        </Typography>
        <Typography variant="h5" className={classes.background_text}>
          episode
        </Typography>
      </div>
      <Typography className={classes.title}>{title}</Typography>
    </FrontSide>
  );
};

export default memo(Front);
