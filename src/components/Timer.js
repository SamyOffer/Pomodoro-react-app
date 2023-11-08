import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import SettingsContext from "./SettingsContext";
import { useContext, useState, useEffect, useRef, useCallback } from "react";

const red = "#f54e4e";
const green = "#0f0";

const Timer = () => {
  const context = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [mode, setMode] = useState("work");
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const initTimer = useCallback(() => {
    setSecondsLeft(context.worksTime * 60);
  }, [context]);

  const switchMode = useCallback(() => {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    setMode(nextMode);
    modeRef.current = nextMode;
    const nextTime = (nextMode === "work" ? context.worksTime : context.breaksTime) * 60;
    setSecondsLeft(nextTime);
    secondsLeftRef.current = nextTime;
  }, [context]);

  const tick = useCallback(() => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }, []);

  useEffect(() => {
    initTimer();
    switchMode();
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [context, initTimer, switchMode, tick]);

  const totalSeconds = mode === "work" ? context.worksTime * 60 : context.breaksTime * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let secondes = secondsLeft % 60;
  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + secondes}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? green : red,
          trailColor: "#fff" ,
        })}
      />
      <div>
        {/* div Play/Pause Button  */}
        {isPaused ? 
        <PlayButton onClick={ () =>  { setIsPaused(false); isPausedRef.current = false; }} /> : 
        <PauseButton onClick={ () =>  { setIsPaused(true); isPausedRef.current = true; }} />}
      </div>
      <div>
        <SettingsButton onClick={() => context.setShowSettings(true)} />
      </div>
    </div>
  );
};

export default Timer;
