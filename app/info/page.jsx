// "use client";
// import { useState, useEffect } from "react";
import css from "../ui/info.module.css";
// import { usePathname } from "next/navigation";
// import { Canvas } from "@react-three/fiber";
// import { InfoModel } from "../components/Info-Model";
// import { Controls } from "../components/OrbitControlsInfo";

export const metadata = {
  themeColor: "#ed7ba1"
};

export default function Page() {
  // const pathname = usePathname();

  // useEffect(() => {
  //   document.body.style.backgroundColor = pathname.includes("info")
  //     ? "#ed7ba1"
  //     : "#395fff";

  //   return () => {
  //     document.body.style.backgroundColor = "#395fff"; // reset on unmount
  //   };
  // }, [pathname]);

  return (
    <div className={css.info}>
      {/* <div className={css.sceneleft}>
        <Canvas
          camera={{
            position: [-1, 0, 6],
            zoom: 15,
          }}
        >
          <ambientLight color={"white"} intensity={0.6} />
          <directionalLight position={[0, 1, 1]} intensity={4} />
          <InfoModel />
          <Controls />
        </Canvas>
      </div>

      <div className={css.sceneright}>
        <Canvas
          camera={{
            position: [8, -5, 4],
            zoom: 20,
          }}
        >
          <ambientLight color={"white"} intensity={0.6} />
          <directionalLight position={[0, 1, 1]} intensity={4} />
          <InfoModel position={[0, 0, 0]} />
          <Controls />
        </Canvas>
      </div> */}

      <section className={css.infoContainer}>
        <div className={css.bioContainer}>
          <p className={css.bioText}>
            Welcome to Studio Sunne. We create playful, interactive websites designed to stick with you. Founded by Abi - a full-stack software engineer, graphic designer, and co-founder of a design brand with clients including Vogue, Primark, and Clarks.<br/>Have an idea? I'd love to bring it to life.
          </p>
        </div>
        <div className={css.clientsContainer}>
          <div className={css.clientsList}>
            <p>Select Clients:</p>
            <p>Arielle Free</p>
            <p>Juicy Yoga</p>
            <p>Brainchild Festival</p>
            <p>Everpress</p>
            <p>Femme Culture</p>
          </div>
        </div>
        <div className={css.servicesContainer}>
          <div className={css.servicesList}>
            <p>Services:</p>
            <p>Web Design</p>
            <p>Web Development</p>
            <p>Creative Direction</p>
            <p>Branding</p>
            <p>Graphic Design</p>
            <p>Animation</p>
          </div>
        </div>
      </section>
    </div>
  );
}
