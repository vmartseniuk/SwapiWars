/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo, useEffect, useState, useCallback } from "react";
import * as Promise from "bluebird";
import { makeStyles, Typography } from "@material-ui/core";
import swapiModule from "utils/swapi";

import DirectorIcon from "media/image/director.jpg";
import Director from "./Director";
import Episode from "./Episode";
import Opening from "./Opening";
import Actors from "./Actors";

import ReleaseDate from "./ReleaseDate";
import Modal from "../Modal";

const FilmModal = (props) => {
  const { open, onClose, title, director, release_date: releaseDate, episode_id: episodeId, opening_crawl: opening, characters } = props;

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = useCallback(async () => {
    const promise = [];
    setLoading(true);
    for (const iterator of characters) {
      const arr = iterator.split("/");
      const id = arr[arr.length - 2];
      promise.push(swapiModule.getPerson(id));
    }
    const response = await Promise.all(promise);
    const temporary = [];

    for (const { data } of response) {
      temporary.push(data.name);
    }
    setCharacter(temporary);
    setLoading(false);
  }, [characters]);

  useEffect(() => {
    fetchCharacters();
    return () => {
      fetchCharacters();
    };
  }, [fetchCharacters]);

  if (!open) return null;

  return (
    // eslint-disable-next-line react/jsx-boolean-value
    <Modal open={open} onClose={onClose}>
      <MyContainer>
        <Typography variant="h4">{title}</Typography>
        <Director src={DirectorIcon}>{director}</Director>
      </MyContainer>

      <MyContainer>
        <Episode>{episodeId}</Episode>
        <ReleaseDate>{releaseDate}</ReleaseDate>
      </MyContainer>
      <Opening>{opening}</Opening>
      <Actors character={character} loading={loading} />
    </Modal>
  );
};

const useContainerStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "initial",
    },
  },
}));
const MyContainer = (props) => {
  const classes = useContainerStyles();
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
};

export default memo(FilmModal);
