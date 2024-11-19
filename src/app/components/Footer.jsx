"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./ClientLayout";

const Footer = () => {
  const { content } = useLanguage();
  const footerMainLeft = content.footer[0].mainLeft || [];
  const footerService = content.footer[1].service[0].title || []; //title
  const footerServices = content.footer[1].service[1].services || []; //title
  const footerContact = content.footer[2].contact || [];
  return (
    <div className="w-full h-auto bg-[url('/picture/bg-footer.svg')] bg-cover bg-center flex flex-col">
      <div className="p-10 lg:p-20 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 lg:grid-cols-4 w-full row-span-1 gap-10 justify-center items-center md:justify-start md:items-center">
        <div className="row-span-1 md:col-span-1 lg:col-span-2 h-full flex flex-col justify-center items-center md:justify-start md:items-start max-w-sm">
          <Image
            src="/logo/nego-logo2.jpg"
            width={80}
            height={80}
            alt="logo"
            priority
            className="rounded-full"
          />
          <p className="mt-5 text-center md:text-start">{footerMainLeft.des}</p>
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
            <Image src="/icon/mail.svg" width={25} height={25} alt="Email" />
            <p>{footerContact.email}</p>
          </div>
          <div className="flex gap-3 items-center text-hover-gray">
            <Image src="/icon/phone.svg" width={25} height={25} alt="Phone" />
            <p>{footerContact.phone}</p>
          </div>
          <div className="flex gap-3 items-center text-hover-gray">
            <Image
              src="/icon/address.svg"
              width={25}
              height={25}
              alt="Address"
            />
            <p>{footerContact.address}</p>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer relative">
            <Image
              src="/icon/facebook.svg"
              width={35}
              height={35}
              alt="Facebook"
              className=""
            />
            <div style={{ position: "relative", width: "35px", height: "35px" }}>
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
