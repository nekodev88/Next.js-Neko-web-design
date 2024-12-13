"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const About = () => {
  const { content } = useLanguage();
  const pageAbout = content.page_section[1].about || [];
  return (
    <section className="bg-custom-curve-bg bg-cover bg-no-repeat overflow-hidden bg-[center_bottom_-100px] w-full h-[700px] md:h-[600px] lg:h-[450px] p-10 rounded-bl-3xl rounded-br-3xl flex flex-col lg:flex-row my-10">
      <div className="w-full h-[40%] md:h-[50%] lg:w-[45%] lg:h-full xl:pl-20 pt-5">
        <Image
          src="/logo/neko-logo2.jpg"
          width={80}
          height={80}
          alt="logo"
          priority
          className="rounded-full"
        />
        <h1 className="text-xl sx:text-2xl md:text-4xl font-bold w-full md:w-[500px] mt-5 leading-[40px] md:leading-[50px]">
          NEKO SOFTWARE ENGINEERING CO.,LTD.
        </h1>
      </div>
      <div className="w-full h-[60%] mt-5 md:h-[50%] lg:w-[55%] lg:h-full">
        <ScrollAnimation>
          <p className="text-customYellow mb-3 md:mb-5">ABOUT US</p>
          <h3 className="text-2xl font-semibold">{pageAbout.title}</h3>
          <p className="text-customGray1 mt-5">{pageAbout.des}</p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
