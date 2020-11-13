/* eslint-disable react/prop-types */
import React from "react";
import { InputBase, makeStyles } from "@material-ui/core";
import colors from "config/assets";
import SearchIcon from "media/icon/Search";

const useStyle = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    marginRight: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: 0,
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: colors.gray,
    justifyContent: "center",
    fontSize: 20,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    padding: "8px 8px 8px 0",
    color: colors.gray,
    border: "1px solid",
    borderRadius: "4px",
    borderColor: "transparent",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "5ch",
    "&:focus": {
      width: "25ch",
      borderColor: colors.gray,
    },

    [theme.breakpoints.up("sm")]: {
      margin: 0,
      width: "10ch",
      "&:focus": {
        width: "30ch",
        borderColor: colors.gray,
      },
    },
  },
}));

const Search = (props) => {
  const { handleSearch, value, placeholder } = props;
  const classes = useStyle();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color={colors.gray} />
      </div>
      <InputBase
        placeholder={`Search by ${placeholder}`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
        value={value}
      />
    </div>
  );
};

export default Search;
