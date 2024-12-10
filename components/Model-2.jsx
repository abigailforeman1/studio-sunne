"use client"
import React, { useEffect, useRef, useState } from 'react';
// import { useFrame } from 'react-three-fiber';
import { useFrame } from '@react-three/fiber'

import * as THREE from "three";
// import { Html } from "drei";
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Model = () => {
  /* Refs */
  const group = useRef();
  const actions = useRef();

  /* State */
  const [model, setModel] = useState(null);
  // const [animation, setAnimation] = useState(null);

  /* Mixer */
  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  /* load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('studio-sunne-icon.gltf', async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      console.log("nodes", nodes)
      // const animations = await gltf.parser.getDependencies("animation");
      // console.log("animations", animations)
      setModel(nodes[0]);
      // setAnimation(animations);
    });
  }, []);

  /* set animation */
  // useEffect(() => {
  //   if (animation) {
  //     actions.current = {
  //       idle: mixer.clipAction(animation[0], group.current),
  //     };
  //     actions.current.idle.play();
  //     return () => animation.forEach((clip) => mixer.uncacheClip(clip));
  //   }
  // }, [animation]);

  //* animation update
  // useFrame((_, delta) => mixer.update(delta));
  // //* rotation
  // useFrame(() => group.current.rotation.y += 0.01);

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )
      }
    </>
  )
};

export default Model