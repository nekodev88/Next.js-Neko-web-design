"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";
import AboutCarousel from "./AboutCarousel";

const AboutUs = () => {
  const { content } = useLanguage();
  const aboutDetailAbout = content.about_section[5].detail[0] || [];
  const aboutDetailVision = content.about_section[5].detail[1] || [];
  const aboutDetailMission = content.about_section[5].detail[2] || [];
  const aboutDetailGoal = content.about_section[5].detail[3] || [];

  return (
    <section className="w-full h-auto mt-96 mb-10 flex flex-col justify-between items-center gap-14 md:gap-28">
      {/* about neko */}
      <div className="flex flex-col justify-between items-center">
        <div className="pl-0 lg:pl-10 w-full flex flex-col justify-between items-center md:items-start">
          <ScrollAnimation>
            <span className="bg-customBrown text-customWhite py-1 px-2 rounded-sm text-center md:text-start">
              About Neko Software Engineering Co., Ltd.
            </span>
          </ScrollAnimation>
          <p className="text-black text-base sm:text-xl my-8 w-full lg:w-5/6 text-center md:text-start">
            {aboutDetailAbout.about}
          </p>
        </div>

        <div className="grid grid-rows md:grid-rows-none md:grid-cols-[60%_40%] gap-7 md:gap-0">
          <div className="pl-0 lg:pl-10 flex flex-col justify-center items-center md:items-start">
            <p className="text-customYellow text-xl">
              {aboutDetailVision.vition_title}
            </p>
            <h3 className="text-customBrown font-semibold text-xl md:text-2xl xl:text-4xl text-center mt-5 leading-[30px] xl:leading-[50px] lg:pr-10 ">
              {aboutDetailVision.vision_des}
            </h3>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-3/4 md:w-full">
            <AboutCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* mission */}
      <div className="flex flex-col md:gap-7 max-w-screen-xl">
        <ScrollAnimation className="flex justify-between items-center w-full gap-14">
          <img
            src="/picture/about-us/sticker1.png"
            alt=""
            className="w-48 object-cover hidden md:block"
          />
          <div className="flex flex-col">
            <p className="text-customYellow text-xl text-center md:text-start">
              {aboutDetailMission.mission_title}
            </p>
            <div className="grid grid-cols-1 mt-5 gap-5">
              {aboutDetailMission.mission_des.slice(0, 3).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="glassmorphism-blur flex gap-3 items-center"
                  >
                    <img
                      src="/icon/circle.png"
                      alt=""
                      className="w-5 object-cover"
                    />
                    <div>
                      <h3 className="text-customBrown text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-customGray1">{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="flex justify-between items-center w-full gap-14">
          <div className="grid grid-cols-1 mt-5 gap-5">
            {aboutDetailMission.mission_des.slice(3, 6).map((item, index) => {
              return (
                <div
                  key={index}
                  className="glassmorphism-blur flex gap-3 items-center"
                >
                  <img
                    src="/icon/circle.png"
                    alt=""
                    className="w-5 object-cover"
                  />
                  <div>
                    <h3 className="text-customBrown text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-customGray1">{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            src="/picture/about-us/sticker2.png"
            alt=""
            className="w-48 object-cover hidden md:block"
          />
        </ScrollAnimation>
      </div>

      {/* goals */}
      <div className="flex flex-col items-center w-full gap-3">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
            {aboutDetailGoal.goals_title}
          </h1>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full rounded-xl relative overflow-hidden h-80 md:h-40 lg:h-32">
          {aboutDetailGoal.goals_des.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-full h-full overflow-hidden group"
              >
                <img
                  src={item.pic}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 duration-300"
                />

                <div className="absolute inset-0 flex items-center justify-center text-center p-10">
                  <p
                    className="text-customWhite font-semibold text-xl"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                  >
                    {item.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
