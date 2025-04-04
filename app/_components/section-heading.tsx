"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type headingProps = {
  headingText: string;
};

export default function SectionHeading({ headingText }: headingProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 15%", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-heading"
        ref={targetRef}
        style={{ opacity }}
        variants={{
          initial: { y: "200px", opacity: 0 },
          inView: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
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
      </motion.h2>
    </motion.div>
  );
}
