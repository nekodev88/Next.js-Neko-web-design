"use client";

import { motion } from "framer-motion";

const logos = [
  "/logo/brand-01.png",
  "/logo/brand-04.png",
  "/logo/brand-05.png",
  "/logo/brand-06.png",
  "/logo/brand-01.png",
  "/logo/brand-04.png",
  "/logo/brand-05.png",
  "/logo/brand-06.png",
];

const LogoSlide = () => {
  return (
    <section className="w-full h-24 my-5 overflow-hidden flex justify-start items-center lg:gap-16 xl:gap-20">
      <motion.div
        className="flex flex-shrink-0 justify-between items-center w-full"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {logos.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              className="w-20 h-auto mr-20 md:mr-40 lg:mr-0 lg:gap-20"
            />
          );
        })}
      </motion.div>
      <motion.div
        className="hidden lg:flex lg:flex-row flex-shrink-0 justify-between items-center w-full "
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {logos.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt={`Logo ${index + 1}`}
              className="w-20 h-auto gap-20"
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default LogoSlide;
