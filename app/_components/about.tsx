"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./section-heading";
import LinkButton from "./link-button";
import AboutImage from "./about-image";
import Skills from "./skills";

export default function About() {
  const line = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end 10%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="about" className="section flow">
      <div className="wrapper" data-width="medium">
        <SectionHeading headingText={"About me"} />
        <motion.div
          className="equal-columns"
          data-gap="large"
          data-alignment="centered"
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
        >
          <motion.div
            className="flow"
            ref={targetRef}
            style={{ opacity }}
            variants={{
              initial: { y: "200px", opacity: 0 },
              inView: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
              },
            }}
          >
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
          </motion.div>
          <AboutImage />
        </motion.div>
      </div>
      <Skills />
    </section>
  );
}
