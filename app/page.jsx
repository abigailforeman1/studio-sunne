"use client";
import StudioSunneLogo from "./ui/studio-sunne-logo";
import css from "./ui/home.module.css";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";
import { Controls } from "./components/OrbitControls";

export default function Page() {
  const colours = [
    "#395FFF",
    "#663741",
    "#ed4005",
    "#ed7ba1",
    "#ECEAE8",
    "#546970",
    "#aaa943",
    "#faf99b",
  ];
  const textures = [
    "/texture1.png",
    "/texture2.png",
    "/texture3.png",
    "/texture4.png",
    "/texture5.png",
    "/texture7.png",
    "/texture8.png",
    "/texture9.png",
    "",
  ];
  const [chosenTexture, setChosenTexture] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 600
  );

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleButtonClick = () => {
    const bodyElement = document.getElementsByTagName("body");
    bodyElement[0].style.backgroundColor =
      colours[Math.floor(Math.random() * colours.length)];
    setChosenTexture(textures[Math.floor(Math.random() * textures.length)]);
  };

  return (
    <>
      {/* <div className={css.menu}> */}
      <div className={css.menuCenterContents}>
        <p className={css.copyright}>© Studio Sunne 2024</p>
      </div>
      <div className={css.menuLeftContents}>
        <div className={css.menuLeftContentsLogo}>
          <StudioSunneLogo />
        </div>
        <div className={css.menuLeftContentsInfo}>
          <p className={css.menuLeftContentsInfoText}>Creative Studio</p>

          <a
            className={css.menuLeftContentsInfoText}
            target="_blank"
            rel="noreferrer"
            href="mailto:hello.studio.sunne@gmail.com"
          >
            <p className={css.menuLeftContentsInfoText}>hello.studio.sunne@gmail.com</p>
          </a>

          <a
            className={css.menuLeftContentsInfoText}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/studiosunne/"
          >
            <p className={css.menuLeftContentsInfoText}>@studiosunne</p>
          </a>
        </div>
      </div>
      <div className={css.menuRightContents}>
        <button
          className={css.menuRightContentsRandomButton}
          onClick={handleButtonClick}
        >
          click me
        </button>

        <div className={css.menuRightContentsButtons}>
          {textures
            .filter((e) => e.length)
            .map((e) => (
              <button
                key={e}
                className={css.button}
                value={e}
                style={{ backgroundImage: `url(${e})` }}
                onClick={(e) => setChosenTexture(e.target.value)}
              ></button>
            ))}
        </div>

        <div className={css.menuRightContentsButtons}>
          {colours.map((e) => (
            <button
              key={e}
              className={css.button}
              value={e}
              style={{ backgroundColor: e }}
              onClick={(e) => {
                const bodyElement = document.getElementsByTagName("body");
                bodyElement[0].style.backgroundColor = e.target.value;
              }}
            ></button>
          ))}
        </div>
      </div>
      {/* </div> */}

      <div className={css.scene}>
        <Canvas
          camera={{
            position: [-1, 0, 6],
            zoom: windowWidth > 600 ? 10 : 8,
          }}
        >
          <ambientLight color={"white"} intensity={0.6} />
          <directionalLight position={[0, 1, 1]} intensity={4} />
          <Model chosenTexture={chosenTexture} />
          <Controls />
        </Canvas>
      </div>
    </>
  );
}
