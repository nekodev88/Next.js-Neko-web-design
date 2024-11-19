"use client";

import React from 'react'
import { useLanguage } from '../ClientLayout'
import ScrollAnimation from '../ScrollAnimation';

const Hero = () => {
    const { content } = useLanguage();
    const pageHero = content.page_section[0].hero || [];
  return (
    <section className="relative flex items-center justify-start lg:justify-end p-10 md:p-20 h-[500px] md:h-[620px] w-full bg-[url('/picture/computer.jpg')] bg-cover bg-center object-cover rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
        <div className=" relative text-customWhite z-20 w-[600px]">
          <ScrollAnimation>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">{pageHero.title}</h1>
            <div className="w-28 h-[3px] bg-customYellow1 my-10"></div>
            <p>{pageHero.des}</p>
          </ScrollAnimation>
        </div>
    </section>
  )
}

export default Hero