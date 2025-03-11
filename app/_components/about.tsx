"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import LinkButton from "./link-button";

export default function About() {
  const line = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  const ref = useRef<HTMLDivElement | null>(null);

  const ROTATION_RANGE = 10;
  const HALF_ROTATION_RANGE = 10 / 2;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="section">
      <div className="wrapper" data-width="medium">
        <SectionHeading headingText={"About me"} />
        <div
          className="equal-columns"
          data-gap="large"
          data-alignment="centered"
        >
          <div className="flow">
            <p>
              I&apos;m a frontend developer specializing in crafting responsive,
              pixel-perfect user interfaces. I especially love writing CSS and
              using tools like Motion to add animations and{" "}
              <motion.strong
                initial="initial"
                whileHover="hovered"
                style={{
                  cursor: "default",
                  display: "inline-block",
                }}
                aria-hidden
              >
                {"micro-interactions".split("").map((char, i) => {
                  return (
                    <motion.span
                      key={i}
                      style={{
                        display: "inline-block",
                      }}
                      initial={{
                        color: "#ffffff",
                      }}
                      variants={{
                        initial: {
                          color: [
                            null,
                            "var(--clr-blue-500)",
                            "var(--clr-brand-500)",
                          ],
                        },
                        hovered: {
                          color: [
                            null,
                            "var(--clr-blue-500)",
                            "var(--clr-brand-500)",
                          ],
                          transition: {
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.05 * i,
                            repeat: Infinity,
                          },
                        },
                      }}
                      className={char === " " ? "space" : ""}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.strong>{" "}
              <span className="sr-only">micro-interactions</span>
              that create delightful and engaging user experiences.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me competing in amateur
              esports tournaments, where I hone critical teamwork and
              communication skills. My constant struggle is coming up with team
              names, so I built a web app that utilizes AI to generate team
              names and matching logos. Check it out in my{" "}
              <span>
                <motion.a
                  href="/#projects"
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                >
                  projects
                  <motion.span variants={line}></motion.span>
                </motion.a>
              </span>{" "}
              section!
            </p>
            <p>
              I get excited about opportunities where I can bridge the gap
              between design and development to create visually appealing and
              functional user interfaces. If you&apos;re looking for a frontend
              developer who obsesses over the details while keeping sight of the
              big picture, I&apos;d love to chat about how I can help bring your
              vision to life.
            </p>
            <LinkButton href="#contact">Contact</LinkButton>
          </div>
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="img-container"
          >
            <Image
              src="/headshot.jpg"
              fill
              className="object-cover"
              alt="headshot"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
