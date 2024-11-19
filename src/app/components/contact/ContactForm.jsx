"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";

const ContactForm = () => {
  const { content } = useLanguage();
  const contactLeft = content.contact_section[0].mainLeft || [];
  const contactForm = content.contact_section[1].formRight || [];
  return (
    <section className="bg-custom-curve-bg bg-cover bg-no-repeat overflow-hidden bg-[center_bottom_-100px] w-full h-auto p-3 md:p-10 rounded-bl-3xl rounded-br-3xl flex flex-col justify-center items-center xl:items-start xl:flex-row my-5 md:my-10">
      <div className="w-full xl:w-[50%] xl:pl-20 text-center xl:text-start mb-10 xl:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold w-full xl:w-[500px] mb-5 leading-[40px] md:leading-[50px]">
          {contactLeft.title}
        </h1>
        <p className="text-base sm:text-xl mb-3">{contactLeft.company}</p>
        <p className="text-base sm:text-xl">{contactLeft.address}</p>
      </div>
      <div className="mt-5 w-full lg:w-[80%] xl:w-[50%] h-full">
        <form action="">
          <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold mb-7">{contactForm.title}</h1>
          <div className="glassmorphism flex flex-col gap-4">
            {/* line1 */}
            <div className="flex gap-2 md:gap-7">
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="name" className="text-xl font-semibold">
                  {contactForm.name}
                </label>
                <input
                  type="text"
                  id="name" 
                   name="name"
                   autoComplete="name"
                  required
                  className="bg-transparent border-[1px] border-customYellow outline-0 rounded-md w-full h-[40px] p-2"
                  placeholder={contactForm.name}
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="email" className="text-xl font-semibold">
                  {contactForm.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  autoComplete="email"
                  required
                  className="bg-transparent border-[1px] border-customYellow outline-0 rounded-md w-full h-[40px] p-2"
                  placeholder={contactForm.email}
                />
              </div>
            </div>
            {/* company */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="company" className="text-xl font-semibold">
                {contactForm.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                required
                className="bg-transparent border-[1px] border-customYellow outline-0 rounded-md w-full h-[40px] p-2"
                placeholder={contactForm.email}
              />
            </div>
            {/* company */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="subject" className="text-xl font-semibold">
                {contactForm.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                autoComplete="off"
                required
                className="bg-transparent border-[1px] border-customYellow outline-0 rounded-md w-full h-[40px] p-2"
                placeholder={contactForm.subject}
              />
            </div>
            {/* message */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="message" className="text-xl font-semibold">
                {contactForm.message}
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                rows="3"
                className="bg-transparent border-[1px] border-customYellow outline-0 rounded-md w-full p-2"
                placeholder={contactForm.message}
              ></textarea>
            </div>
            <button type="submit" className="mt-3 bg-customYellow text-customWhite text-xl py-3 rounded-full w-[180px]">{contactForm.submit}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
