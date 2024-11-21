"use client";

import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const PortfolioExploreMenu = () => { 
  const { content } = useLanguage();

  const portfolioTitle = content.portfolio_section[0].title || "";
  const portfolioContent = useMemo(
    () => content.portfolio_section[2].portfolio || [],
    [content.portfolio_section]
  );
  const portfolioOthers = content.portfolio_section[3].others || [];

  const [category, setCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(portfolioContent);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // ฟังก์ชันกรองข้อมูลตามหมวดหมู่ที่เลือก
    const filterData = () => {
      if (category === "All") {
        setFilteredData(portfolioContent);
      } else {
        setFilteredData(
          portfolioContent.filter((item) => item.category === category)
        );
      }
    };

    filterData();
  }, [category, portfolioContent]);

  const displayedData = showAll ? filteredData : filteredData.slice(0, 6);

  return (
    <section className="w-full h-auto flex justify-center items-center p-0 lg:p-10 flex-col">
      <ScrollAnimation className="flex flex-col justify-center items-center">
        <h3 className="text-customYellow mt-14 mb-5">PORTFOLIO</h3>
        <h1 className="text-2xl md:text-4xl font-bold mb-7 lg:mb-14 text-center">
          {portfolioTitle}
        </h1>
      </ScrollAnimation>
      <div className="w-full text-customYellow flex flex-col sm:flex-row justify-center items-center gap-5 lg:gap-10 mb-10">
        <div className="flex gap-5 lg:gap-10">
          <button
            onClick={() => setCategory("All")}
            className={`text-base lg:text-2xl font-semibold glassmorphism-small duration-300 ${
              category === "All" ? "border-2 border-customYellow" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("web_app")}
            className={`text-base lg:text-2xl font-semibold glassmorphism-small duration-300 ${
              category === "web_app" ? "border-2 border-customYellow" : ""
            }`}
          >
            Web App
          </button>
        </div>
        <div className="flex gap-5 lg:gap-10">
          <button
            onClick={() => setCategory("mobile_app")}
            className={`text-base lg:text-2xl font-semibold glassmorphism-small duration-300 ${
              category === "mobile_app" ? "border-2 border-customYellow" : ""
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setCategory("integration")}
            className={`text-base lg:text-2xl font-semibold glassmorphism-small duration-300 ${
              category === "integration" ? "border-2 border-customYellow" : ""
            }`}
          >
            Integration
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 xl:gap-10 w-full my-5">
        {displayedData.map((item) => {
          return (
            <div
              key={item.id}
              className="relative group col-span-1 min-h-[400px] rounded-3xl flex flex-col gap-3 overflow-hidden cursor-pointer"
            >
              <img
                src={item.pic}
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 duration-300"
              />
              <div className="absolute -bottom-0 p-5 w-full flex flex-col gap-3 duration-300 cursor-pointer bg-gradient-to-t from-customBrown/75 to-transparent">
                <h1 className="text-customYellow1 text-xl font-semibold">
                  {item.title}
                </h1>
                <p className="text-customWhite">{item.des}</p>
                <div className="flex gap-2 items-center duration-300 cursor-pointer hover:gap-5">
                  <h3 className="text-customYellow1 font-semibold hover:text-customWhite">
                    {portfolioOthers.live}
                  </h3>
                  <img src="/icon/right-arrow-white.svg" className="w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {category === "All" && !showAll && filteredData.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-2 md:mt-4 font-semibold text-customYellow glassmorphism-small duration-300 hover:border-2 hover:border-customYellow"
        >
          {portfolioOthers.readMore}
        </button>
      )}
    </section>
  );
};

export default PortfolioExploreMenu;
