// app/page.js หรือไฟล์ที่คุณต้องการให้ดึงข้อมูลจากไฟล์ JSON
import Hero from "./components/page/Hero";
import LogoSlide from "./components/page/LogoSlide";
import About from "./components/page/About";
import { Services } from "./components/page/Services";
import Testimonial from "./components/page/Testimonial";
import PortfolioExploreMenu from "./components/portfolio/PortfolioExploreMenu";
import Head from "next/head";

// ฟังก์ชันที่ดึงข้อมูลจากไฟล์ JSON ใน public
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

// Component หลัก
export default async function Home({ params }) {
  const lang = params.lang || 'th';  // กำหนดภาษาจาก params หรือใช้ 'th' เป็นค่า default
  const content = await getContent(lang);  // ดึงข้อมูลจากไฟล์ JSON

  const headComponent = content.head_meta_tag?.[0]?.page || {};

  // ดึง keywords จาก JSON
  const keywordsArray = headComponent.keyword?.map(item => item.keyword_content) || [];
  const keywords = keywordsArray.join(', ');

  return (
    <>
      <Head>
        <title>{headComponent.title || 'Default Title'}</title>
        <meta name="description" content={headComponent.des_content || 'Default Description'} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={headComponent.author_content || 'Default Author'} />
      </Head>

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
