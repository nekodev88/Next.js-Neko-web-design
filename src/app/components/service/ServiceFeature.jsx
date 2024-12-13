"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const ServiceFeature = () => {
  const { content } = useLanguage();
  const serviceFeature = content.service_section[1].feature || []; //title
  const serviceFeatureSection =
    content.service_section[1].feature[1].feature_section || []; //feature section

  return (
    <section className="w-full h-auto mt-96 mb-20 flex flex-col justify-between items-center">
      <ScrollAnimation className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-customYellow">
          {serviceFeature[0].title}
        </h1>
        {/* <p className="text-customGray1 mt-4 text-center">{serviceFeature[0].des}</p> */}
      </ScrollAnimation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
        {serviceFeatureSection.map((item, index) => (
          <div key={index} className="group relative col-span-1 bg-transparent flex flex-col max-h-[300px]  overflow-hidden rounded-3xl">
            <img
              src={item.pic}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 duration-300 rounded-3xl"
            />
            <div className="absolute bottom-0 p-5 w-full duration-300 bg-gradient-to-t from-customBrown/75 to-transparent">
              <h1 className="text-customYellow1 text-3xl font-semibold">
                {item.des}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeature;
