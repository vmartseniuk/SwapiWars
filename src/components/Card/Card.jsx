import React, { useState } from "react";
/* eslint-disable react/prop-types */
import Flippy from "react-flippy";
import FilmModal from "modals/FilmModal/FilmModal";

import Front from "./Front";
import Back from "./Back";

const style = { width: "320px", height: "400px", margin: "0 auto" };

const Card = (props) => {
  const { info } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const matches = window.innerWidth < 600;
  return (
    <>
      <Flippy flipOnHover={!matches} flipOnClick={matches} flipDirection="horizontal" style={style}>
        <Front {...info} />
        <Back {...info} onClick={handleOpen} />
      </Flippy>
      {open && <FilmModal {...info} open={open} onClose={handleClose} />}
    </>
  );
};
export default Card;
