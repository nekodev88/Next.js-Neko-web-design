"use client";

import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutFeature from '../components/about/AboutFeature'
import AboutNumber from '../components/about/AboutNumber'
import AboutStickyScroll from '../components/about/AboutStickyScroll'
import { useLanguage } from '../components/ClientLayout';
import Head from "next/head";

const About = () => {
  const { content } = useLanguage();
  const headComponent = content.head_meta_tag[1]?.about || {}; //optional changing

  // ดึง keywords จาก JSON
  const keywordsArray = headComponent.keyword?.map(item => item.keyword_content) || [];
  // รวมคำค้นหาเป็นสตริง
  const keywords = keywordsArray.join(', ');
  return (
    <>
    <Head>
        <title>{headComponent.title}</title>
        <meta
          name="description"
          content={headComponent.des_content}
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={headComponent.author_content} />
        {/* <link rel="canonical" href="https://www.google.co.th" /> */}
    </Head>

    <AboutHero />
    <AboutFeature />
    <AboutNumber />
    <AboutStickyScroll />
    </>
    
  )
}

export default About
