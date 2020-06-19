import React from "react";
import { motion } from "framer-motion";
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
        <motion.button
          initial={{
            type: "spring",
          }}
          whileTap={{
            scale: 1.1,
            backgroundColor: "#f4a261",
            type: "spring",
          }}
          id={decrementId}
          onClick={decrementDispatch}
          className="button"
        >
          -
        </motion.button>
        <div id={lengthId}>{display}</div>
        <motion.button
          initial={{
            type: "spring",
          }}
          whileTap={{
            scale: 1.1,
            backgroundColor: "#f4a261",
            type: "spring",
          }}
          id={incrementId}
          onClick={incrementDispatch}
          className="button"
        >
          +
        </motion.button>
      </div>
    </div>
  );
};

export default SettingElement;
