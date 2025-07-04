"use client";

import { useEffect } from "react";

export function useCursor(hovered: boolean) {
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);
}
