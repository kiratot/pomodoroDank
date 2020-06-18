import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ON_SETTINGS } from "../redux/settings/settingsTypes";
import { AiFillGithub, AiOutlineFieldTime } from "react-icons/ai";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
const Header = () => {
  const onSession = useSelector((state) => state.settings.onSession);
  const sessionMM = useSelector((state) => state.settings.sessionMM);
  const breakMM = useSelector((state) => state.settings.breakMM);
  const breakLength = useSelector((state) => state.settings.breakLength);
  const sessionLength = useSelector((state) => state.settings.sessionLength);
  const onSettings = useSelector((state) => state.settings.onSettings);
  const [widthRef, { width }] = useMeasure();
  const dispatch = useDispatch();
  return (
    <header>
      <div ref={widthRef} className="header-container">
        <h2>PomodoroDank</h2>
        <nav>
          <ul>
            <a href="https://github.com/kiratot/pomodoroDank">
              <li>
                {" "}
                <AiFillGithub /> <span>GitHub</span>{" "}
              </li>
            </a>

            <motion.li
              initial={{ boxShadow: "0px 0px 0px black" }}
              animate={{
                boxShadow: onSettings
                  ? "0px -1px 10px black inset"
                  : "0px 0px 5px black",
              }}
              onClick={() => dispatch({ type: ON_SETTINGS })}
            >
              {" "}
              <AiOutlineFieldTime /> <span>Settings</span>
            </motion.li>
          </ul>
        </nav>
        <motion.div
          className="progress-bar"
          initial={{ width: "100%" }}
          animate={{
            width: onSession
              ? Math.floor((sessionMM / sessionLength) * width)
              : Math.floor((breakMM / breakLength) * width),
            backgroundColor: onSession
              ? `rgba(${Math.floor(
                  (sessionMM / sessionLength) * 256
                )}, 157, 143, 0.5)`
              : `rgba(${Math.floor(
                  (breakMM / breakLength) * 256
                )}, 157, 143, 0.5)`,
            type: "spring",
            transition: { duration: 1 },
          }}
        />
        <div className="fill-progress-bar"></div>
      </div>
    </header>
  );
};

export default Header;
