import React, { useEffect, useState } from "react";

let id = null;

export default function Timer() {
  const [_, setStartTime] = useState(() => new Date());
  const [timePassed, setTimePassed] = useState(0);

  const parseTime = () => {
    const passedTime = Math.floor(timePassed / 1000);

    let min = Math.floor(passedTime / 60);
    min = min < 10 ? `0${min}` : min;

    let sec = passedTime % 60;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${min}:${sec}`;
  };

  const start = () => {
    setStartTime(new Date(Date.now() - timePassed));
    id = setInterval(() => {
      setStartTime((startTime) => {
        setTimePassed(Date.now() - startTime.getTime());
        return startTime;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(id);
    id = null;
  };

  const reset = () => {
    stop();
    setTimePassed(0);
  };

  useEffect(() => {
    // start();
    return reset;
  }, []);

  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <h1 className="mb-8 text-5xl font-semibold">Timer: {parseTime()}</h1>

      <div className="space-x-4">
        <button
          onClick={start}
          className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
