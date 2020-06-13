import React from "react";
import SettingElement from "./SettingElement";
import { useSelector, useDispatch } from "react-redux";
import {
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
} from "../redux/settings/settingsTypes";

const Settings = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  return (
    <div className="settings-container">
      <SettingElement
        id="session-label"
        lengthId="session-length"
        name="Session Length"
        incrementId="session-increment"
        decrementId="session-decrement"
        display={settings.sessionLength}
        incrementDispatch={() => dispatch({ type: INCREMENT_SESSION })}
        decrementDispatch={() => dispatch({ type: DECREMENT_SESSION })}
      />
      <SettingElement
        id="break-label"
        lengthId="break-length"
        name="Break Length"
        incrementId="break-increment"
        decrementId="break-decrement"
        display={settings.breakLength}
        incrementDispatch={() => dispatch({ type: INCREMENT_BREAK })}
        decrementDispatch={() => dispatch({ type: DECREMENT_BREAK })}
      />
    </div>
  );
};

export default Settings;
