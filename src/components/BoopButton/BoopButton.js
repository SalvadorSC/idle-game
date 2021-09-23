import React, { useContext } from "react";
import useSound from "use-sound";
import boopSfx from "../../assets/music.mp3";
import "./BoopButton.css";
import MiscContext from "../../context/MiscContext";
const BoopButton = () => {
  const { isPlaying, setIsPlaying, volume, setVolume } = useContext(
    MiscContext
  );
  const [play, { stop }] = useSound(boopSfx, { volume: volume });

  const handleChange = (volume) => {
    setVolume(volume);
    if (volume === 0) {
      setIsPlaying(false);
      stop();
    } else if (volume === 0 && isPlaying) {
      setIsPlaying(false);
      stop();
    } else if (volume > 0 && !isPlaying) {
      play();
      setIsPlaying(true);
    } else return;
  };
  return (
    <>
      <div className="music-div">
        <input
          className="input-music"
          min="0"
          max="0.03"
          step="0.001"
          id="volume"
          defaultValue={volume}
          htmlFor="volume"
          onChange={() => {
            handleChange(Number(document.querySelector("#volume").value));
          }}
          type="range"
        />
      </div>
    </>
  );
};
export default BoopButton;
