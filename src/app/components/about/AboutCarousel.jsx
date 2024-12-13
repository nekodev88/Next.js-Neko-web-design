"use client";

import { Carousel } from "@material-tailwind/react";

export default function AboutCarousel() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true}  
      autoplayInterval={3000} 
      loop={true}
    >
      <img
        src="/picture/about-us/neko2.jpeg"
        alt="neko 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/picture/about-us/neko3.jpeg"
        alt="neko 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/picture/about-us/neko4.jpeg"
        alt="neko 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/picture/about-us/neko1.jpeg"
        alt="neko 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
