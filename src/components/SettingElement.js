import React from "react";

const SettingElement = ({
  id,
  name,
  incrementId,
  decrementId,
  display,
  incrementDispatch,
  decrementDispatch,
  lengthId,
}) => {
  return (
    <div className="setting-element-container">
      <h2 id={id}>{name}</h2>
      <div className="setting-element-butons-container">
        <button id={decrementId} onClick={decrementDispatch} className="button">
          -
        </button>
        <div id={lengthId}>{display}</div>
        <button id={incrementId} onClick={incrementDispatch} className="button">
          +
        </button>
      </div>
    </div>
  );
};

export default SettingElement;
