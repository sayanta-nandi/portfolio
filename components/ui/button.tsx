"use client";

import { ReactNode } from "react";

const Button = ({
  onClick,
  children,
  className,
  variant = "default",
}: {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "default" | "ghost" | "outline";
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "default" && "bg-white hover:bg-white/80"
      } cursor-pointer text-black p-2 rounded  ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
