import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { darkGrey, white } from "../../constant/colors";
import useStyles from './ScrollToTop.styles'

export default function ScrollToTop() {
  const classes = useStyles()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={classes.container}>
        <div onClick={scrollToTop}>
          <span className={classes.goUp}><FontAwesomeIcon icon={faAnglesUp} size={'2x'} color={darkGrey}/></span>
        </div>
    </div>
  );
}