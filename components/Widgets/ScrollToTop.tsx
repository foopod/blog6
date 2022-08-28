import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { darkGrey, white } from "../../constant/colors";
import useStyles from './ScrollToTop.styles'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles()

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: 
  return (
    <div className={classes.container}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <span className={classes.goUp}><FontAwesomeIcon icon={faAnglesUp} size={'2x'} color={darkGrey}/></span>
        </div>
      )}
    </div>
  );
}