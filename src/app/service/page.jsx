"use client";

import React from 'react'
import ServiceHero from '../components/service/ServiceHero'
import ServiceFeature from '../components/service/ServiceFeature'
import { useLanguage } from '../components/ClientLayout';
import Head from "next/head";

const Service = () => {
  const { content } = useLanguage();
  const headComponent = content.head_meta_tag[2]?.service || {}; //optional changing

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

    <ServiceHero />
    <ServiceFeature />
    </>
  )
}

export default Service