import {
  INCREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_SESSION,
  DECREMENT_BREAK,
  RESET_SETTINGS,
  PLAY,
  PAUSE,
  DECREMENT_SESSION_SS,
  ON_SETTINGS,
} from "./settingsTypes";

export const incrementSession = () => {
  return {
    type: INCREMENT_SESSION,
  };
};

export const incrementBreak = () => {
  return {
    type: INCREMENT_BREAK,
  };
};

export const DecrementSession = () => {
  return {
    type: DECREMENT_SESSION,
  };
};

export const DecrementBreak = () => {
  return {
    type: DECREMENT_BREAK,
  };
};

export const resetSettings = () => {
  return {
    type: RESET_SETTINGS,
  };
};

export const decrementSessionSS = () => {
  return {
    action: DECREMENT_SESSION_SS,
  };
};

export const decrementBreakSS = () => {
  return {
    action: DECREMENT_BREAK_SS,
  };
};

export const play = () => {
  return {
    action: PLAY,
  };
};
export const onSettings = () => {
  return { action: ON_SETTINGS };
};
