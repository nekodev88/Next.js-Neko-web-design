"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import Image from "next/image";

const ContactForm = () => {
  const { content } = useLanguage();
  const contactLeft = content.contact_section[0].mainLeft || [];
  const contactForm = content.contact_section[1].formRight || [];
  return (
    <section className="bg-custom-curve-bg bg-cover bg-no-repeat overflow-hidden bg-[center_bottom_-100px] w-full h-auto p-3 md:p-10 rounded-bl-3xl rounded-br-3xl flex flex-col justify-center items-center xl:items-start xl:flex-row my-5 md:my-10 gap-5 sm:gap-10">
      <div className="w-full xl:w-[50%] text-center xl:text-start mb-10 xl:mb-0 flex flex-col gap-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold w-full xl:w-[500px] leading-[40px] md:leading-[50px]">
            {contactLeft.title}
          </h1>
          <p className="text-base sm:text-xl my-5">{contactLeft.company}</p>
          <div className="flex flex-col gap-3 items-center xl:items-start">
            <div className="flex gap-3 items-center text-hover-gray">
              <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
              <p className="text-base sm:text-xl">{contactLeft.tel}</p>
            </div>
            <div className="flex gap-3 items-center text-hover-gray">
              <Image src="/icon/mail.svg" width={20} height={20} alt="Email" />
              <p className="text-base sm:text-xl">{contactLeft.email}</p>
            </div>
            <div className="flex gap-3 items-start text-hover-gray">
              <Image
                src="/icon/address.svg"
                width={20}
                height={20}
                alt="Address"
              />
              <p className="text-base sm:text-xl">{contactLeft.address}</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.4286273844273!2d98.95835273406674!3d18.767156933267927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3100692e39d5%3A0x2552faf055322ca9!2sNeko%20Software%20Engineering!5e0!3m2!1sth!2sth!4v1733987227268!5m2!1sth!2sth"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '20px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-full lg:w-[80%] xl:w-[50%] h-full">
        <form action="">
          <h1 className="text-center md:text-start text-2xl md:text-4xl font-bold mb-7">
            {contactForm.title}
          </h1>
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
              <div className="flex-col w-full gap-2 hidden md:block">
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
            <div className="flex flex-col w-full gap-2 md:hidden">
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
            <button
              type="submit"
              className="mt-3 bg-customYellow text-customWhite text-xl py-3 rounded-full w-[180px]"
            >
              {contactForm.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
