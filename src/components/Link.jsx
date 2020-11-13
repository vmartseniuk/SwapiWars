/* eslint-disable react/prop-types */
import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, ...props }) => (
  <MaterialLink component={RouterLink} {...props}>
    {children}
  </MaterialLink>
);

const ExternalLink = ({ children, ...props }) => {
  return (
    <MaterialLink {...props} component="a" target="_blank">
      {children}
    </MaterialLink>
  );
};

export { Link, ExternalLink };
