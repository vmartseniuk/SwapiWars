/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles, Modal, Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import colors from "config/assets";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: colors.cardLabelBg,
    borderRadius: "20px",
    position: "relative",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "5rem 3.2rem 3.2rem",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      padding: "1.8rem 1.2rem 2.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5%",
      overflow: "auto",
      boxSizing: "border-box",
      maxWidth: "none",
    },
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: ".5rem",
    borderRadius: "25px",
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
    },
  },
}));

const CustomModal = (props) => {
  const { open, onClose, children } = props;
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Fade in={open}>
        <div className={classes.container}>
          <Button type="button" className={classes.close} onClick={onClose}>
            <CloseIcon />
          </Button>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
