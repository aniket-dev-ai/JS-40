import React, { useEffect, useState } from "react";

function CountDownTimer() {
  const [time, setTime] = useState(0); // Minutes countdown
  const [seconds, setSeconds] = useState(0); // Seconds countdown

  // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0 && seconds === 0) {
        clearInterval(interval); // Timer ends
      } else if (seconds === 0) {
        setTime((prevTime) => prevTime - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [time, seconds]);

  // Set Timer Function
  const setTimer = (minutes) => {
    setTime(minutes);
    setSeconds(0);
  };

  return (
    <div>
      {/* Background Image */}
      <div>
        <img
          className="h-screen w-full -z-10 fixed"
          src="https://images.unsplash.com/photo-1590830689526-605de59d8757?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Timer Controls */}
      <div className="flex h-[10vh] items-center justify-center gap-10 p-10">
        <button
          onClick={() => setTimer(5)}
          className="border p-5 bg-white backdrop-blur-md bg-opacity-20 rounded-lg text-xl font-semibold text-green-900 shadow-xl"
        >
          Work 5
        </button>
        <button
          onClick={() => setTimer(15)}
          className="border p-5 bg-white backdrop-blur-md bg-opacity-20 rounded-lg text-xl font-semibold text-green-900 shadow-xl"
        >
          Quick 15
        </button>
        <button
          onClick={() => setTimer(20)}
          className="border p-5 bg-white backdrop-blur-md bg-opacity-20 rounded-lg text-xl font-semibold text-green-900 shadow-xl"
        >
          Snack 20
        </button>
        <button
          onClick={() => setTimer(30)}
          className="border p-5 bg-white backdrop-blur-md bg-opacity-20 rounded-lg text-xl font-semibold text-green-900 shadow-xl"
        >
          LUNCH BREAK
        </button>
        <div className="bg-white p-5 rounded-xl">
          <input
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="border p-2 rounded"
            type="number"
            placeholder="Enter Minutes"
          />
        </div>
      </div>

      {/* Timer Display */}
      <div className="flex h-[30vh] mt-28 items-center justify-center gap-10 font-bold p-10 text-9xl text-white">
        <h1>{String(time).padStart(2, "0")}</h1>:<h1>{String(seconds).padStart(2, "0")}</h1>
      </div>

      {/* Countdown End Message */}
      <div className="flex h-[30vh] pt-2 items-center justify-center gap-10 font-bold p-10 text-4xl text-white">
        <h1>Get Back In</h1>
        <h1>
          {new Date().getHours()}:{String(new Date().getMinutes() + time).padStart(2, "0")}
        </h1>
      </div>
    </div>
  );
}

export default CountDownTimer;
