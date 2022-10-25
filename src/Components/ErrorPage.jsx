import React, { useContext } from "react";
import { ThemeContext } from "../Context";

import WheelBlack from "./WheelBlack.svg";
import WheelWhite from "./WheelWhite.svg";

const ErrorPage = ({ darkMode }) => {
  const theme = useContext(ThemeContext);
  const color = darkMode ? theme.dark : theme.light;
  return (
    <div
      className={`flex justify-center flex-col md:flex-row items-center h-[calc(100vh_-_4rem)] text-4xl font-bold text-${color.foreground} bg-${color.background}`}
    >
      <div>You hit a</div>
      <div className={`mx-2`}>
        <span className={`flex justify-center items-center text-7xl`}>
          4
          {!darkMode ? (
            <img src={WheelBlack} alt="Wheel" />
          ) : (
            <img src={WheelWhite} alt="Wheel" />
          )}
          4
        </span>
      </div>
      <div>Page</div>
    </div>
  );
};

export default ErrorPage;
