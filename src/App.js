import React, { useEffect, useRef } from "react";
import "./App.scss";
import Settings from "./components/Settings";
import ClockDisplay from "./components/ClockDisplay";
import { useDispatch, useSelector } from "react-redux";
import { RESET_SETTINGS, PLAY } from "./redux/settings/settingsTypes";
import snoopDog from "./audio/snoopDog.mp3";
import HeaderFM from "./components/HeaderFM";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdReplay } from "react-icons/md";

import { motion } from "framer-motion";

function App() {
  const onSettings = useSelector((state) => state.settings.onSettings);
  const play = useSelector((state) => state.settings.play);
  const dispatch = useDispatch();
  const onSession = useSelector((state) => state.settings.onSession);
  const snoopDogRef = useRef();
  const handleReset = () => {
    dispatch({ type: RESET_SETTINGS });
    snoopDogRef.current.pause();
    snoopDogRef.current.currentTime = 0;
  };

  useEffect(() => {
    if (!onSession) {
      // hereWeGoAgainRef.current.pause();
      // hereWeGoAgainRef.current.currentTime = 0;
      snoopDogRef.current.play();
    } else {
      // if (play) hereWeGoAgainRef.current.play();
      snoopDogRef.current.pause();
      snoopDogRef.current.currentTime = 0;
    }
  }, [onSession]);
  return (
    <motion.div
      animate={{
        background: onSession
          ? ""
          : "linear-gradient(120deg, var(--nickel), var(--nickel))",
        type: "spring",
        transition: { duration: 1 },
      }}
      className="app-container"
    >
      <HeaderFM />
      <div className="App">
        <audio ref={snoopDogRef} id="beep">
          <source src={snoopDog} type="audio/mp3" />
        </audio>

        <div className="clock-container">
          <div className="session-container">
            <ClockDisplay play={play} />
            <Settings />

            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: onSettings ? 0 : 1,
                display: onSettings ? "none" : "flex",
              }}
              className="clock-buttons"
            >
              <motion.button
                initial={{
                  type: "spring",
                }}
                whileTap={{
                  scale: 1.1,
                  backgroundColor: "#f4a261",
                  type: "spring",
                }}
                id="start_stop"
                className="button"
                onClick={() => dispatch({ type: PLAY })}
              >
                {play ? (
                  <FaPause className="fa-pause" />
                ) : (
                  <FaPlay className="fa-play" />
                )}
              </motion.button>

              <motion.button
                initial={{
                  type: "spring",
                }}
                whileTap={{
                  scale: 1.1,
                  backgroundColor: "#f4a261",
                  type: "spring",
                }}
                onClick={handleReset}
                id="reset"
                className="button"
              >
                <MdReplay className="md-reset" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
