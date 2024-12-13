"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { useLanguage } from "../ClientLayout";
import Link from "next/link";

const PortfolioHero = () => {
  const {content} = useLanguage()
  const portfolioHero = content.portfolio_section[1].hero || [];
  const images = [
    "/picture/about-us/4.jpg",
    "/picture/about-us/5.jpg",
    "/picture/about-us/3.jpg",
  ];
  return (
    <ImagesSlider className="h-[20rem] w-full absolute inset-0 mt-20" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.div className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-4">
          <p className="text-2xl font-medium text-customYellow1">Portfolio</p>
          <h1 className="my-5">{portfolioHero.title}</h1>
        </motion.div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/contact">Context now →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}

export default PortfolioHero