import React, { useEffect, useState } from "react";
import fbi from "D:/Coding/JS-40/my-project/src/Songs/fbi.mp3";
import gulp from "D:/Coding/JS-40/my-project/src/Songs/gulp.mp3";
import helicopter from "D:/Coding/JS-40/my-project/src/Songs/helicopter.mp3";
import indian from "D:/Coding/JS-40/my-project/src/Songs/indian.mp3";
import johnCena from "D:/Coding/JS-40/my-project/src/Songs/johnCena.mp3";
import censored from "D:/Coding/JS-40/my-project/src/Songs/porn.mp3";
import sad from "D:/Coding/JS-40/my-project/src/Songs/sad.mp3";
import skibidi from "D:/Coding/JS-40/my-project/src/Songs/skibidi.mp3";
import undertaker from "D:/Coding/JS-40/my-project/src/Songs/undertaker.mp3";

function Drumsticks() {
  const [activeKey, setActiveKey] = useState(null);
  const [audioInstance, setAudioInstance] = useState(null);

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    setActiveKey(key);

    const sounds = {
      A: fbi,
      S: gulp,
      D: helicopter,
      F: indian,
      G: johnCena,
      H: censored,
      J: sad,
      K: skibidi,
      L: undertaker,
    };

    // Stop the currently playing audio, if any
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }

    // Play the new audio if the key matches
    if (sounds[key]) {
      const newAudio = new Audio(sounds[key]);
      newAudio.play();
      setAudioInstance(newAudio);
    }

    // Reset activeKey after a delay
    setTimeout(() => {
      setActiveKey(null);
    }, 200);
  };

  const stopPlaying = () => {
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
      setAudioInstance(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [audioInstance]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[
          { key: "A", label: "fbi" },
          { key: "S", label: "gulp" },
          { key: "D", label: "helicopter" },
          { key: "F", label: "indian" },
          { key: "G", label: "johnCena" },
          { key: "H", label: "***" },
          { key: "J", label: "sad" },
          { key: "K", label: "skibidi" },
          { key: "L", label: "undertaker" },
        ].map(({ key, label }) => (
          <div
            key={key}
            className={`p-4 bg-gray-800 rounded-lg flex items-center justify-between ${
              activeKey === key ? "border-2 scale-110 border-blue-500" : ""
            }`}
          >
            <kbd
              data-key={key}
              className="bg-gray-700 text-white p-2 rounded"
            >
              {key}
            </kbd>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <button
        onClick={stopPlaying}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Stop Playing
      </button>
    </div>
  );
}

export default Drumsticks;
