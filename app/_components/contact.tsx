import { useRef } from "react";
import ContactForm from "./contact-form";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const line = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start start", "end 10%"],
    offset: ["end end", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="contact" className="section">
      <div className="wrapper flow" data-width="narrow">
        <SectionHeading headingText="Contact" />
        <motion.p
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
          Contact me by submitting the form below or connect with me on{" "}
          <span>
            <motion.a
              initial="initial"
              animate="initial"
              whileHover="animate"
              href="https://www.linkedin.com/in/andrew-marchment/"
              target="blank"
            >
              LinkedIn
              <motion.span variants={line}></motion.span>
            </motion.a>
          </span>
        </motion.p>
        <ContactForm />
      </div>
    </section>
  );
}
