"use client";

import React from 'react'
import ServiceHero from '../components/service/ServiceHero'
import ServiceFeature from '../components/service/ServiceFeature'
import { useLanguage } from '../components/ClientLayout';

const Service = () => {
  const { content } = useLanguage();
  const headComponent = content.head_meta_tag[2].service || []; 

  return (
    <>
    <head>
        <title>{headComponent.title}</title>
        <meta name="description" content={headComponent.des_content}  />
        {/* Open Graph Meta Tags สำหรับการแชร์ในโซเชียลมีเดีย */}
        <meta property="og:title" content={headComponent.og_title}  />
        <meta property="og:description" content={headComponent.og_des} />
        {/* <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/page" /> */}
        {/* เป็นการแสดงผลแบบสรุปเนื้อหาพร้อมภาพขนาดใหญ่ (รูปภาพจะถูกใช้เป็นส่วนหนึ่งในการแสดงผล) */}
        <meta name="twitter:card" content="summary_large_image" /> 
        {/* ชื่อเรื่องที่จะแสดงบน Twitter เมื่อมีการแชร์ลิงก์ */}
        <meta name="twitter:title" content={headComponent.twitter_title}  />
        {/* คำอธิบายที่จะแสดงใน Twitter ซึ่งจะช่วยให้ผู้ใช้เข้าใจเนื้อหาของลิงก์ได้ดียิ่งขึ้น */}
        <meta name="twitter:description" content={headComponent.twitter_des} />
        {/* URL ของภาพที่จะใช้แสดงผลใน Twitter card เมื่อมีการแชร์ลิงก์  */}
        {/* <meta name="twitter:image" content="https://example.com/twitter-image.jpg" /> */}
      </head>

    <ServiceHero />
    <ServiceFeature />
    </>
  )
}

export default Service