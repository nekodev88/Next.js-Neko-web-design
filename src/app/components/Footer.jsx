"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./ClientLayout";
import Link from "next/link";

const Footer = () => {
  const { content } = useLanguage();
  const footerMainLeft = content.footer[0].mainLeft || [];
  const footerService = content.footer[1].service[0].title || []; 
  const footerServices = content.footer[1].service[1].services || []; 
  const footerContact = content.footer[2].contact || [];
  const footerNav = content.footer[3].nav || [];
  return (
    <div className="w-full h-auto bg-[url('/picture/bg-footer.svg')] bg-cover bg-center flex flex-col">
      <div className="py-10 px-10 lg:py-20 grid grid-rows-4 md:grid-rows-none md:grid-cols-2 xl:grid-cols-4 w-full row-span-1 gap-10 justify-center items-center md:justify-start md:items-center">
        <div className="row-span-1 md:col-span-1 h-full flex flex-col justify-center items-center md:justify-start md:items-start max-w-sm">
          <Image
            src="/logo/neko-logo2.jpg"
            width={80}
            height={80}
            alt="logo"
            priority
            className="rounded-full"
          />
          <p className="mt-5 text-center md:text-start">{footerMainLeft.des}</p>
        </div>

        <div className="row-span-1 md:col-span-1 h-full leading-[40px] flex flex-col justify-center items-center md:justify-start md:items-start xl:pl-10">
          <h1 className="text-xl font-semibold mb-5">{footerNav.title}</h1>
          <div className="flex flex-col text-center md:text-start">
             <Link href="/about" className="text-hover-gray hover:underline">{footerNav.about}</Link>
             <Link href="/service" className="text-hover-gray hover:underline">{footerNav.service}</Link>
             <Link href="/portfolio" className="text-hover-gray hover:underline">{footerNav.portfolio}</Link>
             <Link href="/contact" className="text-hover-gray hover:underline">{footerNav.contact}</Link>
          </div>
        </div>

        <div className="row-span-1 md:col-span-1 h-full leading-[40px] flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-xl font-semibold mb-5">{footerService}</h1>
          {footerServices.map((item, index) => (
            <p key={index} className="text-hover-gray">
              {item.service}
            </p>
          ))}
        </div>

        <div className="row-span-1 md:col-span-1 h-full leading-[40px] flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-xl font-semibold mb-5">{footerContact.title}</h1>
          <div className="flex gap-3 items-center text-hover-gray">
            <Image src="/icon/mail.svg" width={20} height={20} alt="Email" />
            <p>{footerContact.email}</p>
          </div>
          <div className="flex gap-3 items-center text-hover-gray">
            <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
            <p>{footerContact.phone}</p>
          </div>
          <div className="flex gap-3 items-center text-hover-gray">
            <Image
              src="/icon/address.svg"
              width={20}
              height={20}
              alt="Address"
            />
            <p>{footerContact.address}</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <div
              style={{ position: "relative", width: "35px", height: "35px" }}
            >
              <Image src="/icon/facebook.svg" fill alt="Facebook" />
            </div>
            <div
              style={{ position: "relative", width: "35px", height: "35px" }}
            >
              <Image src="/icon/line.svg" fill alt="Line" />
            </div>
            <div
              style={{ position: "relative", width: "35px", height: "35px" }}
            >
              <Image src="/icon/instagrame.svg" fill alt="Instagram" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t-[1px] border-customWhite mx-10">
        <p className="text-center">
          Copyright © 2024 NEKO SOFTWARE ENGINEERING CO.,LTD.
        </p>
      </div>
    </div>
  );
};

export default Footer;
