import React, { useEffect, useState } from "react";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hourDegrees = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteDegrees = time.getMinutes() * 6;
  const secondDegrees = time.getSeconds() * 6;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-80 h-80 bg-white rounded-full border-4 border-gray-800">
        {/* Clock Center */}
        <div className="absolute w-4 h-4 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Hour Hand */}
        <div
          className="absolute w-2 h-20 bg-gray-800 rounded-full top-[25%] left-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>

        {/* Minute Hand */}
        <div
          className="absolute w-1.5 h-28 bg-gray-600 rounded-full top-[13%] left-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        ></div>

        {/* Second Hand */}
        <div
          className="absolute w-1 h-32 bg-red-500 rounded-full top-[10%] left-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        ></div>

        {/* Hour Markings */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-6 bg-gray-800 top-[40%] left-1/2 transform origin-bottom"
            style={{ transform: `rotate(${i * 30}deg) translateY(-120px)` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AnalogClock;
