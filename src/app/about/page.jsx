"use client";

import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutFeature from '../components/about/AboutFeature'
import AboutNumber from '../components/about/AboutNumber'
import AboutStickyScroll from '../components/about/AboutStickyScroll'
import { useLanguage } from '../components/ClientLayout';
import AboutOrganization from '../components/about/AboutOrganization';
import AboutOrgDiagrame from '../components/about/AboutOrgDiagrame';

const About = () => {
  const { content } = useLanguage();
  const headComponent = content.head_meta_tag[1].about || []; 

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

    <AboutHero />
    <AboutOrganization />
    {/* <AboutOrgDiagrame /> */}
    <AboutFeature /> 
    <AboutNumber />
    <AboutStickyScroll />
    </>
    
  )
}

export default About
