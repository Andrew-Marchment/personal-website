"use client";

import { motion } from "motion/react";

type props = {
  headingText: string;
};

export default function SectionHeading({ headingText }: props) {
  return (
    <h2 className="section-heading">
      {headingText.split("").map((char, i) => {
        return (
          <motion.div
            key={i}
            initial={{
              color: "#ffffff",
            }}
            whileInView={{
              color: [
                null,
                "var(--clr-blue-500)",
                "var(--clr-brand-500)",
                "#ffffff",
              ],
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.05 * i,
              },
            }}
            className={char === " " ? "space" : ""}
          >
            {char}
          </motion.div>
        );
      })}
    </h2>
  );
}
