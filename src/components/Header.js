import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ON_SETTINGS } from "../redux/settings/settingsTypes";
import { AiFillGithub, AiOutlineFieldTime } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";

const Header = () => {
  const onSession = useSelector((state) => state.settings.onSession);
  const sessionMM = useSelector((state) => state.settings.sessionMM);
  const breakMM = useSelector((state) => state.settings.breakMM);
  const breakLength = useSelector((state) => state.settings.breakLength);
  const sessionLength = useSelector((state) => state.settings.sessionLength);
  const [widthRef, { width }] = useMeasure();
  const props = useSpring({
    from: { width: 0 },
    width: width,
  });
  const dispatch = useDispatch();
  return (
    <header>
      <div ref={widthRef} className="header-container">
        <h2>PomodoroDank</h2>
        <nav>
          <ul>
            <li>
              <AiFillGithub /> <span>GitHub</span>
            </li>
            <li onClick={() => dispatch({ type: ON_SETTINGS })}>
              {" "}
              <AiOutlineFieldTime /> <span>Settings</span>
            </li>
          </ul>
        </nav>
        <animated.div
          className="progress-bar"
          style={{
            ...props,
            width: props.width.interpolate((width) =>
              onSession
                ? Math.floor((sessionMM / sessionLength) * width)
                : Math.floor((breakMM / breakLength) * width)
            ),
          }}
        />
        <div className="fill-progress-bar"></div>
      </div>
    </header>
  );
};

export default Header;
