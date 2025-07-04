"use client";

import {
  Point,
  PointMaterial,
  Points,
  Sparkles,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PointLight } from "three";

const Background = () => {
  return (
    <Canvas>
      <Sparkles
        count={1000}
        scale={[100, 100, 100]}
        size={5}
        speed={0.5}
        color="white"
      />
    </Canvas>
  );
};
export default Background;
