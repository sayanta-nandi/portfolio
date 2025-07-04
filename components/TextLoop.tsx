"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextLoop() {
  const textsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = textsRef.current?.children;
    if (!targets || targets.length < 2) return;

    const tl = gsap.timeline({ repeat: -1 });

    Array.from(targets).forEach((el, i) => {
      tl.fromTo(
        el,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      ).to(
        el,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          delay: 1.4,
        },
        "+=0.4"
      ); // short pause after text is shown
    });
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Hi, I'm Sayanta</h1>
      <div className="relative h-10 mt-2 overflow-hidden text-lg font-medium">
        <div ref={textsRef} className="absolute w-full">
          <div className="text-center"> &lt; Full Stack Developer /&gt; </div>
          <div className="text-center"> &lt; Problem Solver /&gt; </div>
        </div>
      </div>
    </div>
  );
}
