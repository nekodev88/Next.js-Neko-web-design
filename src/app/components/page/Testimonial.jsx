"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import Image from "next/image";

const Testimonial = () => {
  const { content } = useLanguage();
  const pageTestimonial = content.page_section[3].testimonial || [];
  return (
    <>
      <section className="w-full h-auto flex justify-center items-center p-3 md:p-10 flex-col">
        <h1 className="text-2xl sm:text-4xl font-bold my-14">
          {pageTestimonial.title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col glassmorphism flex-1 h-[300px] p-5">
            <div className="flex gap-5 items-center mb-5">
              <Image
                src="/picture/people/Jack.png"
                width={60}
                height={60}
                alt="Jack"
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">JACK</h3>
                <p className="font-semibold">bangkok.co.th</p>
              </div>
            </div>
            <p>{pageTestimonial.Jack_des}</p>
          </div>
          <div className="flex flex-col  glassmorphism  bg-customGray flex-1 h-[300px] p-5">
            <div className="flex gap-5 items-center mb-5">
              <Image
                src="/picture/people/cameron.png"
                width={60}
                height={60}
                alt="Cameron"
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">Cameron</h3>
                <p className="font-semibold">bangkok.co.th</p>
              </div>
            </div>
            <p>{pageTestimonial.Cameron_des}</p>
          </div>
          <div className="flex flex-col  glassmorphism  bg-customGray flex-1 h-[300px] p-5">
            <div className="flex gap-5 items-center mb-5">
              <Image
                src="/picture/people/gerard.png"
                width={60}
                height={60}
                alt="Gerard"
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">Gerard</h3>
                <p className="font-semibold">bangkok.co.th</p>
              </div>
            </div>
            <p>{pageTestimonial.Gerard_des}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
