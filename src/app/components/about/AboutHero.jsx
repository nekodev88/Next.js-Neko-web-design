"use client";

import React from "react";
import Image from "next/image"; 
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const AboutHero = () => {
  const { content } = useLanguage();
  const aboutHero = content.about_section[0].hero || []; 
  return (
    // <section className="w-full h-[250px] relative">
    //     <img
    //       src="/picture/computer.jpg"
    //       className="bg-cover bg-center object-cover rounded-3xl w-full h-full brightness-75"
    //     />
    //     <ScrollAnimation className="absolute w-full sm:w-4/5 bg-customWhite top-16 sm:top-32 md:top-36 left-0 sm:left-[10%] flex flex-col justify-center items-center gap-3 glassmorphism">
    //       <p className="text-customYellow">{aboutHero.pre_title}</p>
    //       <h1 className="text-customBrown text-2xl lg:text-4xl font-bold text-shadow text-center">
    //         {aboutHero.title}
    //       </h1>
    //       <p className="text-customGray1 text-center">{aboutHero.des}</p>
    //     </ScrollAnimation>
    // </section>
    <section className="h-[20rem] w-full bg-[url('/picture/computer.jpg')] bg-cover bg-center object-cover absolute inset-0 mt-20">
      <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center inset-0 bg-black bg-opacity-50">
        <ScrollAnimation className="w-full lg:w-[60%] text-shadow text-center lg:text-end">
          <h1 className="text-3xl sm:text-5xl font-bold text-customYellow mb-10 leading-[40px] sm:leading-[60px]">About us</h1>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutHero;
