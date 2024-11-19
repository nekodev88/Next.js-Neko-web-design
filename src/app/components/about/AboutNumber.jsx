"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import { useState } from "react";
import { useEffect } from "react";
import { animate } from "framer-motion";

const AboutNumber = () => {
  const { content } = useLanguage();
  const aboutNumber = content.about_section[2].number || [];

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    animate(0, 20, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(val) {
        setValue1(val);
      },
    });
    animate(0, 300, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(val) {
        setValue2(val);
      },
    });
    animate(0, 10, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(val) {
        setValue3(val);
      },
    });
  }, [content]);

  return (
    <div className="w-full h-[200px] bg-customGray mt-10 md:mt-20 rounded-3xl flex flex-wrap justify-evenly items-center overflow-hidden gap-3 p-3">
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="text-4xl md:text-6xl font-bold text-customBrown">
          {value1.toFixed(0)}
        </span>
        <h3 className="text-sm md:text-base">{aboutNumber.year}</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="text-4xl md:text-6xl font-bold text-customBrown">
          {value2.toFixed(0)}
        </span>
        <h3 className="text-sm md:text-base">{aboutNumber.customer}</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="text-4xl md:text-6xl font-bold text-customBrown">
          {value3.toFixed(0)}
        </span>
        <h3 className="text-sm md:text-base">{aboutNumber.project}</h3>
      </div>
    </div>
  );
};

export default AboutNumber;
