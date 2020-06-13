import React, { useEffect, useRef } from "react";
import "./App.scss";
import Settings from "./components/Settings";
import ClockDisplay from "./components/ClockDisplay";
import { useDispatch, useSelector } from "react-redux";
import { RESET_SETTINGS, PLAY, PAUSE } from "./redux/settings/settingsTypes";
import snoopDog from "./audio/snoopDog.mp3";

function App() {
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
    <div className="App">
      <audio ref={snoopDogRef} id="beep">
        <source src={snoopDog} type="audio/mp3" />
      </audio>
      <div className="clock-container">
        <div className="session-container">
          <ClockDisplay play={play} />
          <div className="clock-buttons">
            <button
              id="start_stop"
              className="button"
              onClick={() => dispatch({ type: PLAY })}
            >
              {play ? "pause" : "play"}
            </button>

            <button onClick={handleReset} id="reset" className="button">
              reset
            </button>
          </div>
        </div>
        <Settings />
      </div>
    </div>
  );
}

export default App;
