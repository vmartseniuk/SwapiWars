import React, { useState, useMemo, memo } from "react";
import { useSelector } from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Spinner, Card, Search } from "components";
import { filmsSelector } from "store/selectors";
import { useDebounce } from "hooks";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "24px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "48px",
    },
  },
  container: {
    height: "inherit",
  },
}));

const Content = () => {
  const classes = useStyles();

  const { data, loading } = useSelector(filmsSelector);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 700);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchWords = debouncedSearch
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 0);

  const content = useMemo(() => {
    if (searchWords.length === 0) {
      return data;
    }
    return data.filter((item) => {
      const itemSearchString = `${item.title} ${item.episode_id}`.toLowerCase();
      return searchWords.some((word) => itemSearchString.includes(word));
    });
  }, [data, searchWords]);

  if (loading) {
    return <Spinner loading={loading} />;
  }
  return (
    <>
      <div className={classes.content}>
        <Search handleSearch={handleSearch} value={search} placeholder="episode" />
      </div>
      <Grid container justify="center" className={classes.container}>
        {content.map((info) => (
          <Grid item xs={12} sm={6} md={4} key={info.episode_id} className={classes.item}>
            <Card info={info} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default memo(Content);
