"use client";
import React, { useState, useRef, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillBackward,
} from "react-icons/ai";
import {BiFullscreen} from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import classes from "./VideoPlayer.module.scss";

const VideoPlayer = () => {
  const videoRef = useRef<any>({});
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    duration: 0,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [playerState.isPlaying, videoRef]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    const duration = videoRef.current.duration;
    setPlayerState({
      ...playerState,
      progress,
      duration,
    });
  };

  const handleVideoProgress = (value: any) => {
    const manualChange = Number(value);
    videoRef.current.currentTime =
      (videoRef.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event: any) => {
    const speed = Number(event.target.value);
    videoRef.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

// full screen video func
function openFullscreen(elem:any) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}


  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }

  useEffect(() => {
    playerState.isMuted
      ? (videoRef.current.muted = true)
      : (videoRef.current.muted = false);
  }, [playerState.isMuted, videoRef]);

  const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

  return (
    <div className={classes["container"]}>
      <div className={classes["video-wrapper"]}>
        <div className={classes["actions-fixed"]}>
          <button onClick={togglePlay}>
            {!playerState.isPlaying && <AiFillPlayCircle />}
          </button>
        </div>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          ref={videoRef}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
        />
        <div className={classes["controls"]}>
          <div className={classes["actions"]}>
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <AiFillPlayCircle />
              ) : (
                <AiFillPauseCircle />
              )}
            </button>
          </div>
          <Box sx={{ width: "350px", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={playerState.progress}
            />
          </Box>
          <select
            className={classes["velocity"]}
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className={classes["mute-btn"]} onClick={toggleMute}>
            {!playerState.isMuted ? (
              <BsFillVolumeDownFill />
            ) : (
              <BsFillVolumeMuteFill />
            )}
          </button>
          <button className={classes["full-btn"]} onClick={()=> openFullscreen(videoRef.current)}>
            <BiFullscreen/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
