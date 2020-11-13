import React from "react";
import RingLoader from "react-spinners/PuffLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import colors, { spinnerDesktopSize, spinnerMobileSize } from "config/assets";
import { css } from "@emotion/react";

const Spinner = (props) => {
  const override = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  const size = useMediaQuery((theme) => theme.breakpoints.up("sm")) ? spinnerDesktopSize : spinnerMobileSize;
  const color = colors.spinnerColor;

  return <RingLoader css={override} color={color} size={size} {...props} />;
};

export default Spinner;

export const CardSpinner = (props) => {
  const override = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  const color = colors.spinnerColor;

  return <PropagateLoader css={override} color={color} size={15} {...props} />;
};
