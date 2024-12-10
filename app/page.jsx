"use client";
import css from "./ui/home.module.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./components/Model";
import OrbitControls from "./components/OrbitControls";

export default function Page() {
  return (
    <>
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
