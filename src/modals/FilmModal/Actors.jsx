/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { CardSpinner } from "components/Spinner";

const useStyles = makeStyles(() => ({
  actorsContainer: {
    width: "100%",
    position: "relative",
  },
  text: {
    textAlign: "left",
    width: "inherit",
    fontSize: "20px",
    paddingBottom: "10px",
  },
}));
const Characters = (props) => {
  const classes = useStyles();
  const { character, loading } = props;

  return (
    <div className={classes.actorsContainer}>
      <div className={classes.text}>Characters:</div>
      <CardSpinner loading={loading} />
      <Grid container>
        {character.map((item) => (
          <Grid item xs={3} key={item}>
            {item}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default memo(Characters);
