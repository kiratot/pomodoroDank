import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DECREMENT_SESSION_SS,
  DECREMENT_BREAK_SS,
} from "../redux/settings/settingsTypes";
import { motion } from "framer-motion";

const ClockDisplay = ({ play }) => {
  const onSettings = useSelector((state) => state.settings.onSettings);
  const sessionMM = useSelector((state) => state.settings.sessionMM);
  const sessionSS = useSelector((state) => state.settings.sessionSS);
  const breakMM = useSelector((state) => state.settings.breakMM);
  const breakSS = useSelector((state) => state.settings.breakSS);
  const onSession = useSelector((state) => state.settings.onSession);
  const dispatch = useDispatch();

  // const hereWeGoAgainRef = useRef();
  const timeToString = (sec, min) => {
    if (sec < 10) {
      if (min < 10) {
        return `0${min}:0${sec}`;
      } else {
        return `${min}:0${sec}`;
      }
    } else {
      if (min < 10) {
        return `0${min}:${sec}`;
      } else {
        return `${min}:${sec}`;
      }
    }
  };

  const sessionString = timeToString(sessionSS, sessionMM);
  const breakString = timeToString(breakSS, breakMM);

  useEffect(() => {
    let intervalID = null;
    if (play) {
      intervalID = setInterval(() => {
        dispatch(
          onSession
            ? { type: DECREMENT_SESSION_SS }
            : { type: DECREMENT_BREAK_SS }
        );
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [play, onSession, dispatch]);

  return (
    <motion.div animate={{ opacity: onSettings ? 0 : 1 }}>
      <h2 id="timer-label">{onSession ? "Session" : "Break"}</h2>
      <h2 id="time-left">{onSession ? sessionString : breakString}</h2>
      {/* <audio ref={hereWeGoAgainRef}>
        <source src={hereWeGoAgain} type="audio/mp3" />
      </audio> */}
    </motion.div>
  );
};

export default ClockDisplay;
