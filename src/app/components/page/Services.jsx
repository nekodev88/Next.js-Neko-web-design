"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useLanguage } from "../ClientLayout";
import Link from "next/link";

export function Services() {
  const { content } = useLanguage();
  const pageAbout = content.page_section[2].service || []; //blog
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full my-5">
      {pageAbout.map((item, index) => (
        <WobbleCard key={index} containerClassName={item.containerClassName}>
          <div className={item.divClassName}>
            {item.spanContent && (
              <span className={item.spanClassName}>{item.spanContent}</span>
            )}

            {item.image && <img className={item.imageClassName} />}

            <h2 className={item.h2ClassName}>{item.title}</h2>

            <p className={item.pClassName}>{item.des}</p>

            {item.isService && (
              <Link href="/contact">
                <button className="bg-customYellow1 py-2 px-5 rounded-full text-base my-4 text-black cursor-pointer">
                  {item.buttonLabel}
                </button>
              </Link>
            )}
          </div>
        </WobbleCard>
      ))}
    </section>
  );
}
