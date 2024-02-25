import React, { useState, useEffect } from "react";

const StopwatchApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={isRunning ? stopStopwatch : startStopwatch}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default StopwatchApp;
