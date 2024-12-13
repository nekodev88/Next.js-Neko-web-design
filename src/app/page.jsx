import Hero from "./components/page/Hero";
import LogoSlide from "./components/page/LogoSlide";
import About from "./components/page/About";
import Target from "./components/page/Target";
import { Services } from "./components/page/Services";
import Testimonial from "./components/page/Testimonial";
import PortfolioExploreMenu from "./components/portfolio/PortfolioExploreMenu";

// ฟังก์ชันที่ดึงข้อมูลจากไฟล์ JSON
async function getContent(lang = "th") {
  try {
    const res = await fetch(`http://localhost:3000/locales/${lang}.json`);
    if (!res.ok) {
      throw new Error('Failed to fetch content');
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching content:", error);
    return {};
  }
}

// generateMetadata
export async function generateMetadata() {
  const contentTh = await getContent("th");  
  const contentEn = await getContent("en");

  const headComponentTh = contentTh.head_meta_tag?.[0]?.page || {};  
  const headComponentEn = contentEn.head_meta_tag?.[0]?.page || {}; 

  // รวมข้อมูลทั้งสองภาษาใน metadata
  return {
    title: `${headComponentTh.title} | ${headComponentEn.title}`,  
    description: `${headComponentTh.des_content} | ${headComponentEn.des_content}`, 
    openGraph: {
      title: `${headComponentTh.og_title} | ${headComponentEn.og_title}`,
      description: `${headComponentTh.og_des} | ${headComponentEn.og_des}`,
    },
    twitter: {
      title: `${headComponentTh.twitter_title} | ${headComponentEn.twitter_title}`,
      description: `${headComponentTh.twitter_des} | ${headComponentEn.twitter_des}`,
    },
  };
}

// Component หลัก
export default async function Home() {

  return (
    <>
      <Hero />
      {/* <LogoSlide /> */}
      <About />
      <Services />
      <Target />
      <Testimonial />
      <PortfolioExploreMenu />
    </>
  );
}