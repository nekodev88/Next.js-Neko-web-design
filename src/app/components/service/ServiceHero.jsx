"use client";

import React from 'react'
import Image from 'next/image';
import { useLanguage } from '../ClientLayout';
import ScrollAnimation from '../ScrollAnimation';

const ServiceHero = () => {

  const { content } = useLanguage();
  const serviceHero = content.service_section[0].hero || [];

  return (
    <section className="h-[40rem] w-full bg-[url('/picture/computer.jpg')] bg-cover bg-center object-cover rounded-3xl p-3">
      <div className="glassmorphism w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center">
        <ScrollAnimation className="w-full lg:w-[60%] text-shadow text-center lg:text-start">
          <h1 className="text-3xl sm:text-5xl font-bold text-customYellow mb-10 leading-[40px] sm:leading-[60px]">{serviceHero.title}</h1>
          <p className="text-base sm:text-xl font-medium text-customYellow1">{serviceHero.des}</p>
        </ScrollAnimation>
        <div className="w-[90%] sm:w-[60%] lg:w-[40%]">
          <img src={serviceHero.img} alt="computer" className="object-cover rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default ServiceHero