"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const Target = () => {
  const { content } = useLanguage();
  const aboutDetailGoal = content.about_section[5].detail[3] || [];

  return (
      <section className="flex flex-col items-center w-full gap-5 my-20">
        <ScrollAnimation>
          <h1 className="text-customYellow">
            OUR GOALS
          </h1>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full rounded-xl relative overflow-hidden h-96 md:h-48 lg:h-40">
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
                  <p className="text-customWhite font-semibold text-xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                    {item.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  );
};

export default Target;
