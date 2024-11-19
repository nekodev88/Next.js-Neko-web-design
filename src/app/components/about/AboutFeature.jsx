"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";

const AboutFeature = () => {
  const { content } = useLanguage();
  const aboutFeatureTitle = content.about_section[1].service[0] || [];
  const aboutFeature =
    content.about_section[1].service[1].service_section || [];
  return (
    <div className="w-full h-3/6 mt-32 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-customYellow">
          {aboutFeatureTitle.title}
        </h1>
        <p className="text-center text-customGray1 mt-4">{aboutFeatureTitle.des}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
        {aboutFeature.map((feature, index) => (
          <div
            key={index}
            className={`group relative col-span-1 bg-transparent flex flex-col max-h-[250px] overflow-hidden rounded-xl`}
          >
            <img
              src={feature.we_pic}
              className={feature.css_class.image}
            />
            <div className={feature.css_class.overlay}>
              <h1 className={feature.css_class.title}>
                {feature.we_do}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeature;
