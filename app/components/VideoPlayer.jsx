import { useState, lazy, Suspense, useEffect } from "react";
import React from "react";
const ReactPlayer = lazy(() => import("react-player"));
import css from "../ui/work.module.css";

const VideoPlayer = (props) => {
  //video path
  const { videosrc } = props;
  const [ready, setReady] = useState(false);
  const [playerShouldPlay, setPlayerShouldPlay] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 801
  );

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    // console.log("ready?", ready);
  }, [ready]);

  return (
    <Suspense fallback={<div className={css.workCardText}>loading...</div>}>
      {hasWindow && (
        <div className={css.reactplayerWrapper}>
          <ReactPlayer
            onMouseEnter={() => {
              setPlayerShouldPlay(true);
            }}
            onMouseLeave={() => {
              setPlayerShouldPlay(false);
            }}
            height="100%"
            width="100%"
            playsinline={true}
            className={css.reactplayer}
            controls={false}
            muted={true}
            loop={true}
            onReady={() => {
              setPlayerShouldPlay(true);
              setReady(true);
            }}
            playing={playerShouldPlay}
            onError={(e) => {
              setPlayerShouldPlay(false);
            }}
            url={videosrc}
            light={false}
          />

          <source src={videosrc} type="video/mp4" />
        </div>
      )}
    </Suspense>
  );
};

export default VideoPlayer;
