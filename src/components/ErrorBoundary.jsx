/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import serverError from "media/image/500.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    maxWidth: "807px",
    margin: "138px auto 0",
    padding: "0 1.6rem",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
  },
}));

function ServerError() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img src={serverError} alt="server error" className={classes.image} />
    </div>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ServerError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
