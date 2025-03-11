"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import AnimatedHamburgerButton from "./animated-hamburger-button";
import Image from "next/image";

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
      if (latest > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  });

  const line = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
        scrolling: {
          backgroundColor: "var(--clr-gray-900-faded)",
          boxShadow: "0 10px 30px -10px var(--clr-gray-1000-faded)",
          backdropFilter: "blur(10px)",
        },
      }}
      animate={hidden ? "hidden" : scrolling ? "scrolling" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="site-header"
      data-width="wide"
    >
      <div className="wrapper">
        <div className="site-header__inner">
          <a href="/#">
            <Image src="/icon.png" alt="icon" width={36} height={36} />
          </a>
          <AnimatedHamburgerButton />
          <nav id="primary-nav" className="primary-navigation">
            <ul role="list">
              <li>
                <motion.a
                  href="/#about"
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                >
                  About
                  <motion.span
                    className="hover-line"
                    variants={line}
                  ></motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#projects"
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                >
                  Projects
                  <motion.span
                    className="hover-line"
                    variants={line}
                  ></motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/#contact"
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                >
                  Contact
                  <motion.span
                    className="hover-line"
                    variants={line}
                  ></motion.span>
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
