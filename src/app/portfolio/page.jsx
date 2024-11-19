"use client";

import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioExploreMenu from "../components/portfolio/PortfolioExploreMenu";
import { useLanguage } from "../components/ClientLayout";
import Head from "next/head";

const Portfolio = () => {
  const { content } = useLanguage();
  const headComponent = content.head_meta_tag[3]?.portfolio || {}; //optional changing

  // ดึง keywords จาก JSON
  const keywordsArray =
    headComponent.keyword?.map((item) => item.keyword_content) || [];
  // รวมคำค้นหาเป็นสตริง
  const keywords = keywordsArray.join(", ");
  return (
    <>
      <Head>
        <title>{headComponent.title}</title>
        <meta name="description" content={headComponent.des_content} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={headComponent.author_content} />
        {/* <link rel="canonical" href="https://www.google.co.th" /> */}
      </Head>

      <PortfolioHero />
      <PortfolioExploreMenu />
    </>
  );
};

export default Portfolio;
