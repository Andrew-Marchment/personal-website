import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroContent() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 20%", "end 10%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div className="flow" ref={targetRef} style={{ opacity }}>
      <div className="wrapper" data-width="narrow">
        <p>
          I&apos;m a frontend developer building responsive, pixel-perfect user
          interfaces for the web
        </p>
      </div>
      <a href="/#projects" className="hero-button">
        Projects
      </a>
    </motion.div>
  );
}
