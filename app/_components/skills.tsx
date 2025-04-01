import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      path: "/html-logo.png",
      text: "HTML",
    },
    {
      path: "/javascript-logo.png",
      text: "JavaScript",
    },
    {
      path: "/css-logo.png",
      text: "CSS",
    },
    {
      path: "/react-logo.png",
      text: "React",
    },
    {
      path: "/typescript-logo.png",
      text: "TypeScript",
    },
    {
      path: "/nextjs-icon.png",
      text: "Next.js",
    },
    {
      path: "/tailwind-css-logo.png",
      text: "Tailwind CSS",
    },
    {
      path: "/git-logo.png",
      text: "Git",
    },
    {
      path: "/github-logo.png",
      text: "Github",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 20%", "end 10%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="wrapper skills" data-width="medium">
      <SectionHeading headingText="Skills" />
      <motion.ul
        ref={targetRef}
        className="flex-group"
        role="list"
        style={{ opacity }}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => {
          return (
            <motion.li
              key={i}
              className="skill-tag"
              variants={{
                initial: { y: "200px", opacity: 0 },
                inView: {
                  y: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1 * i,
              }}
            >
              <div className="logo-img-container">
                <Image
                  src={skill.path}
                  alt={`${skill.text} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <p>{skill.text}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
