import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  DECREMENT_SESSION_SS,
  DECREMENT_BREAK_SS,
  RESET_SETTINGS,
  PLAY,
  PAUSE,
  ON_SETTINGS,
} from "./settingsTypes";

const initialState = {
  sessionReducer: 0,
  breakReducer: 0,
  play: false,
  onBreak: false,
  onSession: true,
  sessionLength: 25,
  breakLength: 5,
  sessionSS: 0,
  sessionMM: 25,
  breakSS: 0,
  breakMM: 5,
  style: { transform: "translate(0,0)" },
  onSettings: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return state.sessionLength < 60 && state.sessionMM < 60
        ? {
            ...state,
            sessionLength: state.sessionLength + 1,
            sessionMM: state.sessionMM + 1,
          }
        : state;
    case INCREMENT_BREAK:
      return state.breakLength < 60 && state.breakMM < 60
        ? {
            ...state,
            breakLength: state.breakLength + 1,
            breakMM: state.breakMM + 1,
          }
        : state;
    case DECREMENT_SESSION:
      return state.sessionLength > 1 && state.sessionMM > 1
        ? {
            ...state,
            sessionLength: state.sessionLength - 1,
            sessionMM: state.sessionMM - 1,
          }
        : state;
    case DECREMENT_BREAK:
      return state.breakLength > 1 && state.breakMM > 1
        ? {
            ...state,
            breakLength: state.breakLength - 1,
            breakMM: state.breakMM - 1,
          }
        : state;
    case DECREMENT_SESSION_SS:
      if (state.sessionSS <= 0) {
        if (state.sessionMM <= 0) {
          //the session reached 00:00, time for a break.
          return {
            ...state,
            sessionMM: state.sessionLength,
            onBreak: true,
            onSession: false,
          };
        } else {
          return { ...state, sessionSS: 59, sessionMM: state.sessionMM - 1 };
        }
      } else
        return {
          ...state,
          sessionSS: state.sessionSS - 1,
          sessionReducer: state.sessionReducer + 1,
        };
    case DECREMENT_BREAK_SS:
      if (state.breakSS <= 0) {
        if (state.breakMM <= 0) {
          //the break reached 00:00, time to get things done.
          return {
            ...state,
            breakMM: state.breakLength,
            onBreak: false,
            onSession: true,
          };
        } else {
          return { ...state, breakSS: 59, breakMM: state.breakMM - 1 };
        }
      } else
        return {
          ...state,
          breakSS: state.breakSS - 1,
          breakReducer: state.breakReducer + 1,
        };
    case PLAY:
      return {
        ...state,
        play: !state.play,
      };
    case ON_SETTINGS:
      return { ...state, onSettings: !state.onSettings };
    // return state.style.transform === "translate(0,-300%)"
    //   ? {
    //       ...state,
    //       style: { ...state.style, transform: "translate(0,0)" },
    //     }
    //   : {
    //       ...state,
    //       style: { ...state.style, transform: "translate(0,-300%)" },
    //     };
    case RESET_SETTINGS:
      return initialState;
    default:
      return state;
  }
};

export default settingsReducer;
