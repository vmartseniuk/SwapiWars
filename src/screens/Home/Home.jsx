import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Background from "media/image/background.jpg";
import { fetchFilms } from "store/films";
import Content from "./components/Content";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Background})`,
    paddingTop: "70px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchEvents = useCallback(async () => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    fetchEvents();
    return () => {
      fetchEvents();
    };
  }, [fetchEvents]);

  return (
    <div className={classes.root}>
      <Content />
    </div>
  );
};

export default Home;
