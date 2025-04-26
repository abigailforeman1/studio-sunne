"use client";
import css from "./ui/home.module.css";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";
import { Controls } from "./components/OrbitControls";
import { useTheme } from "./ThemeContext";
import { useGLTF, useTexture } from "@react-three/drei";

useGLTF.preload("/studio-sunne-icon-transformed.glb");
useTexture.preload("/texture1.png");
useTexture.preload("/texture2.png");
useTexture.preload("/texture3.png");
useTexture.preload("/texture4.png");
useTexture.preload("/texture5.png");
useTexture.preload("/texture7.png");
useTexture.preload("/texture8.png");
useTexture.preload("/texture9.png");
useGLTF.preload("/info-icon-transformed.glb");

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
  const { setThemeColor } = useTheme();
  setThemeColor(document.body.style.backgroundColor.length ? document.body.style.backgroundColor : "#395fff");
  
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
    const newColor = colours[Math.floor(Math.random() * colours.length)];
    document.body.style.backgroundColor = newColor;
    setThemeColor(newColor);
    setChosenTexture(textures[Math.floor(Math.random() * textures.length)]);
  };

  return (
    <>
      <div className={css.menuContainer}>
        <div className={css.menuCenterContents}>
          <button
            className={css.menuCenterContentsRandomButton}
            onClick={handleButtonClick}
          >
            click me
          </button>

          <div className={css.menuCenterContentsButtons}>
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

          <div className={css.menuCenterContentsButtons}>
            {colours.map((e) => (
              <button
                key={e}
                className={css.button}
                value={e}
                style={{ backgroundColor: e }}
                onClick={(e) => {
                  const bodyElement = document.getElementsByTagName("body");
                  bodyElement[0].style.backgroundColor = e.target.value;
                  setThemeColor(e.target.value);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className={css.scene}>
        <Canvas
          id="canvas"
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
