"use client";

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import { CameraControlsImpl, CameraControls } from "@react-three/drei";

const { ACTION } = CameraControlsImpl;

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-[100vh]"
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <CameraControls
          mouseButtons={{
            left: ACTION.ROTATE,
            middle: ACTION.DOLLY,
            right: ACTION.TRUCK,
            wheel: ACTION.DOLLY,
          }}
          touches={{
            one: ACTION.TOUCH_ROTATE,
            two: ACTION.TOUCH_DOLLY_TRUCK,
            three: ACTION.TOUCH_DOLLY_TRUCK,
          }}
        />
        <Model />
      </Suspense>
    </Canvas>
  );
}
