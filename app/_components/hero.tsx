"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useResizeObserver from "../_hooks/useResizeObserver";

export default function Hero() {
  useResizeObserver();

  const firstNameDefaultSize = [
    { letter: "A", width: "116px" },
    { letter: "n", width: "86px" },
    { letter: "d", width: "95px" },
    { letter: "r", width: "59px" },
    { letter: "e", width: "87px" },
    { letter: "w", width: "132px" },
  ];

  const lastNameDefaultSize = [
    { letter: "M", width: "130px" },
    { letter: "a", width: "95px" },
    { letter: "r", width: "59px" },
    { letter: "c", width: "88px" },
    { letter: "h", width: "86px" },
    { letter: "m", width: "133px" },
    { letter: "e", width: "89px" },
    { letter: "n", width: "86px" },
    { letter: "t", width: "60px" },
  ];

  const [firstNameArray, setFirstNameArray] = useState(firstNameDefaultSize);
  const [lastNameArray, setLastNameArray] = useState(lastNameDefaultSize);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const smallMediaQuery: MediaQueryList =
        window.matchMedia("(max-width: 640px)");
      const mediumMediaQuery: MediaQueryList =
        window.matchMedia("(max-width: 768px)");
      const largeMediaQuery: MediaQueryList = window.matchMedia(
        "(max-width: 1024px)"
      );

      const handleDeviceChange = (): void => {
        if (smallMediaQuery.matches) {
          // font size 3.75rem
          setFirstNameArray([
            { letter: "A", width: "45px" },
            { letter: "n", width: "33px" },
            { letter: "d", width: "37px" },
            { letter: "r", width: "23px" },
            { letter: "e", width: "34px" },
            { letter: "w", width: "50px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "49px" },
            { letter: "a", width: "36px" },
            { letter: "r", width: "23px" },
            { letter: "c", width: "34px" },
            { letter: "h", width: "33px" },
            { letter: "m", width: "50px" },
            { letter: "e", width: "34px" },
            { letter: "n", width: "33px" },
            { letter: "t", width: "24px" },
          ]);
        } else if (mediumMediaQuery.matches) {
          // font size 6rem
          setFirstNameArray([
            { letter: "A", width: "70px" },
            { letter: "n", width: "52px" },
            { letter: "d", width: "57px" },
            { letter: "r", width: "36px" },
            { letter: "e", width: "52px" },
            { letter: "w", width: "79px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "78px" },
            { letter: "a", width: "57px" },
            { letter: "r", width: "36px" },
            { letter: "c", width: "53px" },
            { letter: "h", width: "52px" },
            { letter: "m", width: "79px" },
            { letter: "e", width: "53px" },
            { letter: "n", width: "52px" },
            { letter: "t", width: "36px" },
          ]);
        } else if (largeMediaQuery.matches) {
          // font size 7.5rem
          setFirstNameArray([
            { letter: "A", width: "87px" },
            { letter: "n", width: "64px" },
            { letter: "d", width: "71px" },
            { letter: "r", width: "46px" },
            { letter: "e", width: "66px" },
            { letter: "w", width: "100px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "97px" },
            { letter: "a", width: "70px" },
            { letter: "r", width: "45px" },
            { letter: "c", width: "66px" },
            { letter: "h", width: "64px" },
            { letter: "m", width: "98px" },
            { letter: "e", width: "66px" },
            { letter: "n", width: "65px" },
            { letter: "t", width: "45px" },
          ]);
        } else {
          // font size 10rem
          setFirstNameArray([
            { letter: "A", width: "116px" },
            { letter: "n", width: "86px" },
            { letter: "d", width: "95px" },
            { letter: "r", width: "59px" },
            { letter: "e", width: "87px" },
            { letter: "w", width: "132px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "130px" },
            { letter: "a", width: "95px" },
            { letter: "r", width: "59px" },
            { letter: "c", width: "88px" },
            { letter: "h", width: "86px" },
            { letter: "m", width: "133px" },
            { letter: "e", width: "89px" },
            { letter: "n", width: "86px" },
            { letter: "t", width: "60px" },
          ]);
        }
      };

      handleDeviceChange();

      smallMediaQuery.addEventListener("change", handleDeviceChange);
      mediumMediaQuery.addEventListener("change", handleDeviceChange);
      largeMediaQuery.addEventListener("change", handleDeviceChange);

      return () => {
        smallMediaQuery.removeEventListener("change", handleDeviceChange);
        mediumMediaQuery.removeEventListener("change", handleDeviceChange);
        largeMediaQuery.removeEventListener("change", handleDeviceChange);
      };
    }
  }, []);

  function getRandomRotation(): number {
    return Math.floor(Math.random() * 20 - 10);
  }

  return (
    <section className="hero section flow">
      <div className="background">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="wrapper">
        <p className="hero__title--tag">Hi, my name is</p>
        <h1 className="hero__title">
          <span className="sr-only">Andrew Marchment</span>
          <motion.div>
            <motion.div className="name-block" animate="animated" aria-hidden>
              {firstNameArray.map((char, i) => {
                const randomRotation = getRandomRotation();
                return (
                  <motion.div
                    key={i}
                    style={{ width: char.width }}
                    // whileHover="hovered"
                    variants={{
                      initial: {
                        color: "var(--clr-high-contrast)",
                        rotate: 0,
                        fontWeight: 700,
                        scale: 0,
                      },
                      // hovered: {
                      //   scale: 1.3,
                      //   rotate: getRandomRotation(),
                      //   color: "var(--clr-brand-500)",
                      //   fontWeight: 200,
                      //   transition: {
                      //     duration: 0.01,
                      //   },
                      // },
                      animated: {
                        color: [
                          null,
                          "var(--clr-blue-500)",
                          "var(--clr-brand-500)",
                          "#ffffff",
                        ],
                        rotate: [0, randomRotation, randomRotation, 0],
                        fontWeight: [800, 200, 200, 800],
                        scale: [1, 1.3, 1.3, 1],
                        transition: {
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.1 * i,
                          repeat: Infinity,
                          repeatDelay: 5,
                        },
                      },
                    }}
                  >
                    {char.letter}
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              className="name-block"
              style={{ color: "var(--clr-brand-500)" }}
              animate="animated"
              aria-hidden
            >
              {lastNameArray.map((char, i) => {
                const randomRotation = getRandomRotation();
                return (
                  <motion.div
                    key={i}
                    style={{ width: char.width }}
                    variants={{
                      initial: {
                        color: "var(--clr-high-contrast)",
                        rotate: 0,
                        fontWeight: 700,
                        scale: 0,
                      },
                      animated: {
                        color: [
                          null,
                          "var(--clr-blue-500)",
                          "var(--clr-brand-500)",
                          "var(--clr-brand-500)",
                        ],
                        rotate: [0, randomRotation, randomRotation, 0],
                        fontWeight: [800, 200, 200, 800],
                        scale: [1, 1.3, 1.3, 1],
                        transition: {
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 1.4 + 0.1 * i,
                          repeat: Infinity,
                          repeatDelay: 5,
                        },
                      },
                    }}
                  >
                    {char.letter}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </h1>
      </div>
      <div className="wrapper" data-width="narrow">
        <p>
          A frontend developer bringing UI/UX visions to life by transforming
          static designs into interactive realities
        </p>
      </div>
      <a href="/#projects" className="button">
        Projects
      </a>
    </section>
  );
}
