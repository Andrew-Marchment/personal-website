import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Footer() {
  const firstNameDefaultSize = [
    { letter: "A", width: "70px" },
    { letter: "n", width: "52px" },
    { letter: "d", width: "57px" },
    { letter: "r", width: "36px" },
    { letter: "e", width: "52px" },
    { letter: "w", width: "79px" },
    { letter: " ", width: "32px" },
  ];

  const lastNameDefaultSize = [
    { letter: "M", width: "78px" },
    { letter: "a", width: "57px" },
    { letter: "r", width: "36px" },
    { letter: "c", width: "53px" },
    { letter: "h", width: "52px" },
    { letter: "m", width: "79px" },
    { letter: "e", width: "53px" },
    { letter: "n", width: "52px" },
    { letter: "t", width: "36px" },
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
          // font size 3rem
          setFirstNameArray([
            { letter: "A", width: "36px" },
            { letter: "n", width: "27px" },
            { letter: "d", width: "30px" },
            { letter: "r", width: "20px" },
            { letter: "e", width: "27px" },
            { letter: "w", width: "40px" },
            { letter: " ", width: "16px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "40px" },
            { letter: "a", width: "30px" },
            { letter: "r", width: "20px" },
            { letter: "c", width: "27px" },
            { letter: "h", width: "27px" },
            { letter: "m", width: "41px" },
            { letter: "e", width: "27px" },
            { letter: "n", width: "27px" },
            { letter: "t", width: "20px" },
          ]);
        } else if (mediumMediaQuery.matches) {
          // font size 3.75rem
          setFirstNameArray([
            { letter: "A", width: "45px" },
            { letter: "n", width: "33px" },
            { letter: "d", width: "37px" },
            { letter: "r", width: "23px" },
            { letter: "e", width: "34px" },
            { letter: "w", width: "50px" },
            { letter: " ", width: "19px" },
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
        } else if (largeMediaQuery.matches) {
          // font size 5rem
          setFirstNameArray([
            { letter: "A", width: "60px" },
            { letter: "n", width: "44px" },
            { letter: "d", width: "49px" },
            { letter: "r", width: "32px" },
            { letter: "e", width: "45px" },
            { letter: "w", width: "68px" },
            { letter: " ", width: "24px" },
          ]);
          setLastNameArray([
            { letter: "M", width: "66px" },
            { letter: "a", width: "49px" },
            { letter: "r", width: "32px" },
            { letter: "c", width: "45px" },
            { letter: "h", width: "44px" },
            { letter: "m", width: "67px" },
            { letter: "e", width: "45px" },
            { letter: "n", width: "44px" },
            { letter: "t", width: "30px" },
          ]);
        } else {
          // font size 6rem
          setFirstNameArray([
            { letter: "A", width: "70px" },
            { letter: "n", width: "52px" },
            { letter: "d", width: "57px" },
            { letter: "r", width: "36px" },
            { letter: "e", width: "52px" },
            { letter: "w", width: "79px" },
            { letter: " ", width: "32px" },
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
    <footer className="footer">
      <motion.p
        className="footer__text"
        whileHover={{
          cursor: "default",
          letterSpacing: "0.5rem",
        }}
        transition={{ duration: 0.3 }}
      >
        Designed and built by
      </motion.p>
      <h3 className="footer__animated-name">
        <span className="sr-only">Andrew Marchment</span>
        <motion.div>
          <motion.div className="name-block" aria-hidden>
            {firstNameArray.map((char, i) => {
              const randomRotation = getRandomRotation();
              return (
                <motion.div
                  key={i}
                  className={char.letter === " " ? "space" : ""}
                  style={{ width: char.width }}
                  whileHover="hovered"
                  variants={{
                    initial: {
                      color: "var(--clr-high-contrast)",
                      rotate: 0,
                      fontWeight: 700,
                      scale: 0,
                    },
                    hovered: {
                      scale: 1.3,
                      rotate: randomRotation,
                      color: "var(--clr-brand-500)",
                      fontWeight: 200,
                      transition: {
                        duration: 0.01,
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
            aria-hidden
          >
            {lastNameArray.map((char, i) => {
              const randomRotation = getRandomRotation();
              return (
                <motion.div
                  key={i}
                  style={{ width: char.width }}
                  whileHover="hovered"
                  variants={{
                    initial: {
                      color: "var(--clr-high-contrast)",
                      rotate: 0,
                      fontWeight: 700,
                      scale: 0,
                    },
                    hovered: {
                      scale: 1.3,
                      rotate: randomRotation,
                      color: "var(--clr-blue-500)",
                      fontWeight: 200,
                      transition: {
                        duration: 0.01,
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
      </h3>
    </footer>
  );
}
