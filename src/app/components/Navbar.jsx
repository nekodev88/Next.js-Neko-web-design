"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./ClientLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { language, setLanguage, content, loading } = useLanguage();
  const navMenu = content.navbar.menu || [];

  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");
  const [showToggle, setShowToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname); // ใช้ window.location.pathname
  }, []);

  const handleLinkClick = (path) => {
    setCurrentPath(path); // อัปเดต currentPath เมื่อคลิกลิงก์
  };

  const handleLogoClick = () => {
    handleLinkClick("/"); // เมื่อคลิกที่โลโก้จะอัปเดตเป็นหน้าแรก
    router.push("/"); // นำทางไปยังหน้าแรก
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setShowToggle(false); // ซ่อนเมนูเมื่อเลือกภาษา
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="flex fixed w-full justify-between items-center px-10 lg:px-20 py-2 bg-customWhite z-50">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="flex gap-4 items-center"
      >
        <div style={{ position: "relative", width: "60px", height: "60px" }}>
          <Image
            src="/logo/neko-logo.jpg"
            fill
            alt="logo"
            priority
            className="rounded-full object-contain"
            sizes="(max-width: 768px) 100vw, 60px"
          />
        </div>
        <h1 className="font-semibold text-2xl items-center hidden xl:block">
          Neko Software Engineering
        </h1>
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:gap-10 md:flex md:static md:w-auto md:bg-transparent md:p-0 p-5 bg-customWhite absolute top-16 left-0 w-full`}
        ref={menuRef}
      >
        <ul className="flex flex-col md:flex-row md:items-start items-center gap-5">
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className={`text-hover block ${
              currentPath === "/" ? "text-customYellow" : ""
            }`}
          >
            {navMenu.home}
          </Link>
          <Link
            href="/about"
            onClick={() => handleLinkClick("/about")}
            className={`text-hover block ${
              currentPath === "/about" ? "text-customYellow" : ""
            }`}
          >
            {navMenu.about}
          </Link>
          <Link
            href="/service"
            onClick={() => handleLinkClick("/service")}
            className={`text-hover block ${
              currentPath === "/service" ? "text-customYellow" : ""
            }`}
          >
            {navMenu.service}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => handleLinkClick("/portfolio")}
            className={`text-hover block ${
              currentPath === "/portfolio" ? "text-customYellow" : ""
            }`}
          >
            {navMenu.portfolio}
          </Link>
          <Link
            href="/contact"
            onClick={() => handleLinkClick("/contact")}
            className={`text-hover block ${
              currentPath === "/contact" ? "text-customYellow" : ""
            }`}
          >
            {navMenu.contact}
          </Link>
        </ul>

        <div
          className="flex justify-center items-center cursor-pointer relative gap-2 mt-5 md:mt-0"
          onClick={() => setShowToggle(!showToggle)}
          onMouseLeave={() => setShowToggle(false)}
        >
          <Image
            src={
              language === "th"
                ? "/icon/thai.svg"
                : language === "zh"
                ? "/icon/chinese.svg"
                : "/icon/english.svg"
            }
            alt={
              language === "th"
                ? "thai"
                : language === "zh"
                ? "Chinese"
                : "English"
            }
            width={25}
            height={25}
          />
          <h3 className="text-hover">
            {language === "th" ? "ไทย" : language === "zh" ? "中文" : "English"}
          </h3>
          <Image
            src="/icon/arrow-down.svg"
            alt="Toggle"
            width={20}
            height={20}
          />
          {showToggle && (
            <div className="absolute top-full left-0 bg-customWhite p-3 pt-5 rounded transition-all w-full md:w-[120px]">
              <div className="flex flex-col gap-2 ">
                {language !== "en" && (
                  <div
                    className="flex gap-2 justify-center md:justify-start"
                    onClick={() => toggleLanguage("en")}
                  >
                    <Image
                      src="/icon/english.svg"
                      alt="English"
                      width={25}
                      height={25}
                    />
                    <div className="cursor-pointer hover:text-customYellow duration-300">
                      English
                    </div>
                  </div>
                )}
                {language !== "th" && (
                  <div
                    className="flex gap-2 justify-center md:justify-start"
                    onClick={() => toggleLanguage("th")}
                  >
                    <Image
                      src="/icon/thai.svg"
                      alt="ไทย"
                      width={25}
                      height={25}
                    />
                    <div className="cursor-pointer  hover:text-customYellow duration-300">
                      ไทย
                    </div>
                  </div>
                )}
                {language !== "zh" && (
                  <div
                    className="flex gap-2 justify-center md:justify-start"
                    onClick={() => toggleLanguage("zh")}
                  >
                    <Image
                      src="/icon/chinese.svg"
                      alt="中文"
                      width={25}
                      height={25}
                    />
                    <div className="cursor-pointer  hover:text-customYellow duration-300">
                      中文
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
