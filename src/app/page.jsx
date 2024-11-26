import Hero from "./components/page/Hero";
import LogoSlide from "./components/page/LogoSlide";
import About from "./components/page/About";
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
      <LogoSlide />
      <About />
      <Services />
      <Testimonial />
      <PortfolioExploreMenu />
    </>
  );
}


// "use client";

// import Hero from "./components/page/Hero";
// import LogoSlide from "./components/page/LogoSlide";
// import About from "./components/page/About";
// import { Services } from "./components/page/Services";
// import Testimonial from "./components/page/Testimonial";
// import PortfolioExploreMenu from "./components/portfolio/PortfolioExploreMenu";
// import { useLanguage } from "./components/ClientLayout";
// import Head from "next/head";

// export default function Home() {
//   const { content } = useLanguage();
//   const headComponent = content.head_meta_tag[0]?.page || {} //optional changing

//   // ดึง keywords จาก JSON
//   const keywordsArray = headComponent.keyword?.map(item => item.keyword_content) || [];
//   // รวมคำค้นหาเป็นสตริง
//   const keywords = keywordsArray.join(', ');

//   return (
//     <>
//       <Head>
//         <title>{headComponent.title}</title>
//         <meta
//           name="description" content={headComponent.des_content}
//         />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={headComponent.author_content} />
//         {/* <link rel="canonical" href="https://yourwebsite.com/" /> */}
//       </Head>

//       <Hero />
//       <LogoSlide />
//       <About />
//       <Services />
//       <Testimonial />
//       <PortfolioExploreMenu />
//     </>
//   );
// }
