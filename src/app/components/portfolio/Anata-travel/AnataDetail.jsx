"use client";

import React from "react";
import { useLanguage } from "../../ClientLayout";
import ScrollAnimation from "../../ScrollAnimation";

const AnataDetail = () => {
  const { content } = useLanguage();
  const portfolioAnataTitle =
    content.portfolio_section[2].portfolio[0].detail[0] || [];
  const portfolioAnataHighlight =
    content.portfolio_section[2].portfolio[0].detail[1] || [];
  const portfolioAnataTarget =
    content.portfolio_section[2].portfolio[0].detail[2] || [];
  const portfolioAnataOpening =
    content.portfolio_section[2].portfolio[0].detail[3] || [];
  const portfolioAnataFollowing =
    content.portfolio_section[2].portfolio[0].detail[4] || [];

  return (
    <div className="mt-96 flex flex-col gap-20 justify-center items-center w-full h-auto">
      <ScrollAnimation className="flex flex-col justify-center items-center w-full sm:w-2/3 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
          {portfolioAnataTitle.about_title}
        </h1>
        <p className="text-customGray1 px-2 sm:px-0">
          {portfolioAnataTitle.about_des}
        </p>
      </ScrollAnimation>

      <div className="flex flex-col gap-5 justify-center items-center">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
            {portfolioAnataHighlight.highlight_title}
          </h1>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioAnataHighlight.highlight_topics.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col gap-3 text-center glassmorphism-blur"
              >
                <h2 className="text-customBrown font-semibold text-xl">
                  {item.topic}
                </h2>
                <p className="text-customGray1">{item.des}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-3">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
            {portfolioAnataTarget.target_title}
          </h1>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full rounded-xl relative overflow-hidden h-80 md:h-40 lg:h-32">
          {portfolioAnataTarget.target_des.map((item, index) => {
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
                  <p className="text-customWhite font-semibold text-xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                    {item.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-customYellow">
          {portfolioAnataOpening.opening_title}
        </h1>
        <span className="text-customYellow hidden lg:block">|</span>
        <span className="text-customYellow block lg:hidden">ㄧ</span>
        <p className="text-xl text-customGray1">
          {portfolioAnataOpening.opening_des}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 mt-20 mb-7">
        <h1 className="text-customYellow text-xl font-semibold">
          {portfolioAnataFollowing.following_title}
        </h1>
        {portfolioAnataFollowing.following_des.map((item, index) => {
          return (
            <p className="text-center" key={index}>{item.des}</p>
          )
        })}
      </div>
    </div>
  );
};

export default AnataDetail;
