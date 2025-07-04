"use client";

import { Astronaut } from "@/components/models/Astronaut";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { useCursor } from "@/lib/useCursor";
import { useIsMobile } from "@/lib/useIsMobile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MaxWidthWrapper from "../MaxWidthWrapper";
import DialogBox from "../ui/DialogBox";

const DES = [
  "build robust web applications.",
  "craft scalable backend systems.",
];

const TITLE = ["Developer", "Problem Solver", "Tech Enthusiast"];

const Hero = () => {
  const isMoblie = useIsMobile();
  const [hovered, setHovered] = useState(false);
  const [massage, setMassage] = useState(false);
  useCursor(hovered);
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text p",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <MaxWidthWrapper className="relative lg:h-[100vh] w-[100vw]">
      <div className="h-[50vh] md:h-[100vh] w-[100vw] md:w-[50vw] z-10 flex flex-col px-8 justify-center gap-2 hero-text">
        <p className="text-4xl font-semibold tracking-tight">
          Myself Sayanta Nandi.
        </p>
        <p className="text-lg flex gap-2">
          I{" "}
          <span className="h-6 overflow-hidden">
            <span className="flex flex-col animate-scroll">
              {DES.concat(DES).map((text, idx) => (
                <span key={idx}>{text}</span>
              ))}
            </span>
          </span>
        </p>
        <p className="text-2xl h-6 overflow-hidden">
          <span className="flex flex-col animate-scroll3">
            {TITLE.concat(TITLE).map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </span>
        </p>
      </div>
      <DialogBox
        className={`absolute ${
          isMoblie ? "left-20 top-[100vh]" : "right-60 top-80"
        } ${massage ? "block" : "hidden"}`}
        title="Help me!!"
        desc="I got stuck in web of the internet."
      />
      <figure
        className={`absolute top-[50vh] md:top-0 inset-0`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense>
            <Float>
              <Astronaut
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => setMassage(true)}
                scale={hovered && 0.31}
                position={!isMoblie && [1.3, -1, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </MaxWidthWrapper>
  );
};
export default Hero;
