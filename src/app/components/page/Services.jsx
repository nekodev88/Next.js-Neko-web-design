"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useLanguage } from "../ClientLayout";
import Link from "next/link";

export function Services() {
  const { content } = useLanguage();
  const pageService1 = content.page_section[2].service[0] || [];
  const pageServices = content.page_section[2].service || [];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full my-5">
      <WobbleCard className="col-span-1 h-full max-h-[200px]">
        <div className="max-w-xl relative">
          <span className="text-customYellow">{pageService1.spanContent}</span>
          <h2 className="relative text-left text-balance text-2xl font-semibold text-black mt-3">
            {pageService1.title}
          </h2>
          <Link href="/contact">
            <button className="bg-customYellow1 py-2 px-5 rounded-full text-base my-4 text-black cursor-pointer">
              {pageService1.buttonLabel}
            </button>
          </Link>
        </div>
      </WobbleCard>

      {pageServices.slice(1, 4).map((item, index) => {
        return (
          <WobbleCard
            key={index}
            className="max-h-[200px] bg-customGray overflow-hidden relative"
          >
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl font-semibold tracking-[-0.015em] text-black">
                {item.title}
              </h2>
            </div>
          </WobbleCard>
        );
      })}
    </section>
  );
}
