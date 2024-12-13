"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const Hero = () => {
  const { content } = useLanguage();
  const pageHero = content.page_section[0].hero || [];
  return (
    <section className="relative flex items-center justify-start lg:justify-end p-10 md:p-20 h-[500px] md:h-[620px] w-full bg-[url('/picture/computer.jpg')] bg-cover bg-center object-cover rounded-3xl">
      <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
      <ScrollAnimation className=" relative text-customWhite z-20 w-[650px] h-auto">
        <h1
          className="text-2xl md:text-5xl font-bold tracking-wide"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          {pageHero.title}
        </h1>
        <div className="w-28 h-[3px] bg-customYellow1 my-10"></div>
        <p
          className="text-base sm:text-xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          {pageHero.des}
        </p>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
