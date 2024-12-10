"use client";
import css from "../ui/home.module.css";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/Model";
import LightBulb from "../components/Lights";
import OrbitControls from "../components/OrbitControls";

// import Lights from "../components/Lights";

export default function Page() {
  return (
    <>
      <div className={css.scene}>
        <Canvas
          shadows
          // className={css.canvas}
          camera={{
            position: [-1, 0, 5],
          }}
        >
          <ambientLight color={"white"} intensity={0.8} />
          <directionalLight position={[0, 1, 0]} intensity={1} />
          {/* <spotLight intensity={0.5} position={[90, 100, 50]} castShadow /> */}
          <LightBulb position={[0, 3, 0]} />
          {/* <Box rotateX={3} rotateY={0.2} /> */}
          {/* <Floor position={[0, -1, 0]} /> */}

          <Model />
          <OrbitControls />
        </Canvas>
      </div>

      {/* <Canvas> */}
      {/* <Lights /> */}
      {/* <Model /> */}
      {/* </Canvas> */}
    </>
  );
}
