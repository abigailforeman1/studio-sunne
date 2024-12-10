"use client";
import StudioSunneLogo from "../app/ui/studio-sunne-logo";
import css from "./ui/home.module.css";
import React from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";
import OrbitControls from "./components/OrbitControls";

export default function Page() {
  return (
    <>
      <div className={css.leftMenu}>
        <div className={css.leftMenuContents}>
          <div className={css.leftMenuContentsLogo}>
            <StudioSunneLogo />
          </div>
          <div className={css.leftMenuContentsInfo}>
            <p className={css.leftMenuContentsInfoText}>Creative Studio</p>

            <a
              className={css.leftMenuContentsInfoText}
              target="_blank"
              rel="noreferrer"
              href="mailto:hello.studio.sunne@gmail.com"
            >
              <p className={css.leftMenuContentsInfoText}>
                Contact info@studiosunne.com
              </p>
            </a>

            <a
              className={css.leftMenuContentsInfoText}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/studiosunne/"
            >
              <p className={css.leftMenuContentsInfoText}>
                Follow @studiosunne
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className={css.scene}>
        <Canvas
          camera={{
            position: [-1, 0, 6],
            zoom: 10,
          }}
        >
          <ambientLight color={"white"} intensity={0.6} />
          <directionalLight position={[0, 1, 1]} intensity={4} />

          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
