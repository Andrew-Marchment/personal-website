"use client";

import { motion } from "framer-motion";
import React from "react";

type submitButtonProps = {
  children: string;
  isLoading: boolean;
};

export default function SubmitButton({
  children,
  isLoading,
}: submitButtonProps) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.button
      initial="initial"
      whileHover={isLoading ? "" : "hovered"}
      className="button"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <div aria-hidden>
            {children.split("").map((char, i) => (
              <motion.span
                className={char === " " ? "space" : ""}
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-200%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                style={{ display: "inline-block" }}
                key={i}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div style={{ position: "absolute" }} aria-hidden>
            {children.split("").map((char, i) => (
              <motion.span
                className={char === " " ? "space" : ""}
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                style={{ display: "inline-block" }}
                key={i}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <span className="sr-only">{children}</span>
        </>
      )}
    </motion.button>
  );
}
