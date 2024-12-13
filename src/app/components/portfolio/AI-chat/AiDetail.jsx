"use client";

import React from 'react'
import { useLanguage } from '../../ClientLayout';
import ScrollAnimation from '../../ScrollAnimation';

const AiDetail = () => {
    const { content } = useLanguage();
    const portfolioAiTitle =
       content.portfolio_section[2].portfolio[1].detail[0] || [];
    const portfolioAiFeature =
       content.portfolio_section[2].portfolio[1].detail[1] || [];
  return (
    <div className="mt-96 flex flex-col gap-20 justify-center items-center w-full h-auto">
      <ScrollAnimation className="flex flex-col justify-center items-center w-full sm:w-2/3 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
          {portfolioAiTitle.about_title}
        </h1>
        <p className="text-customGray1 px-2 sm:px-0">
          {portfolioAiTitle.about_des}
        </p>
      </ScrollAnimation>

      <div className="flex flex-col gap-5 justify-center items-center mb-20">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
            {portfolioAiFeature.feature_title}
          </h1>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {portfolioAiFeature.feature_topics.map((item, index) => {
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
    </div>
  )
}

export default AiDetail