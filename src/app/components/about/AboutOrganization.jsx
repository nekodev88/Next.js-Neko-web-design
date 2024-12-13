"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";
import ScrollAnimation from "../ScrollAnimation";

const AboutOrganization = () => {
  const { content } = useLanguage();
  const aboutOrganizationTitle =
    content.about_section[4].about_organization[0].title || []; //title
  const aboutOrganizationEmpDev =
    content.about_section[4].about_organization[6].dev || [];
  const aboutOrganizationEmpDesign =
    content.about_section[4].about_organization[7].design || [];
  const aboutOrganizationEmpManagement =
    content.about_section[4].about_organization[8].management || [];
  // const aboutOrganizationCeo = content.about_section[4].about_organization[1].ceo || []; //ceo
  // const aboutOrganizationGeneral_ad = content.about_section[4].about_organization[2].general_ad || []; //general_ad
  // const aboutOrganizationPersonnel_ad = content.about_section[4].about_organization[3].personnel_ad || []; //personnel_ad
  // const aboutOrganizationDeveloper = content.about_section[4].about_organization[4].developer || []; //developer
  // const aboutOrganizationGeneral_em = content.about_section[4].about_organization[5].general_em || []; //general_em

  return (
    // <div className="w-full h-auto mt-32 flex justify-center items-center">
    //   <div className="w-full xl:w-5/6 flex flex-col justify-center items-center gap-14">
    //     {/* ceo */}
    //     <div className="organization-box1">
    //       <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
    //         {aboutOrganizationTitle.ceo}
    //       </h1>
    //       <div className="organization-box2 sm:self-center sm:rounded-md sm:w-96 sm:shadow-2xl sm:shadow-gray-400/50">
    //         <img
    //           src={aboutOrganizationCeo.pic}
    //           alt={aboutOrganizationCeo.name}
    //           className="w-full h-auto object-contain rounded-t-md"
    //         />
    //         <div className="p-4 flex flex-col justify-center items-center">
    //           <p className="font-semibold text-customYellow mb-3">
    //             {aboutOrganizationCeo.position}
    //           </p>
    //           <h2 className="text-lg font-semibold">
    //             {aboutOrganizationCeo.name}
    //           </h2>
    //           <p className="text-customGray1">{aboutOrganizationCeo.email}</p>
    //           <p className="text-customGray1">{aboutOrganizationCeo.tel}</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* General Administrator */}
    //     <div className="organization-box1">
    //       <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
    //         {aboutOrganizationTitle.general_ad}
    //       </h1>

    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
    //         {aboutOrganizationGeneral_ad.map((person, index) => (
    //           <div key={index} className="organization-box2">
    //             <img
    //               src={person.pic}
    //               alt={person.name}
    //               className="w-full h-auto object-contain rounded-t-md"
    //             />
    //             <div className="p-4 flex flex-col justify-center items-center">
    //               <p className="font-semibold text-customYellow mb-3">
    //                 {person.position}
    //               </p>
    //               <h2 className="text-lg font-semibold">{person.name}</h2>
    //               <p className="text-customGray1">{person.email}</p>
    //               <p className="text-customGray1">{person.tel}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Personnel Administration Unit */}
    //     <div className="organization-box1">
    //       <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
    //         {aboutOrganizationTitle.personnel_ad}
    //       </h1>
    //       <div className="organization-box2 sm:self-center sm:rounded-md sm:w-96 sm:shadow-2xl sm:shadow-gray-400/50">
    //         <img
    //           src={aboutOrganizationPersonnel_ad.pic}
    //           alt={aboutOrganizationPersonnel_ad.name}
    //           className="w-full h-auto object-contain rounded-t-md"
    //         />
    //         <div className="p-4 flex flex-col justify-center items-center">
    //           <p className="font-semibold text-customYellow mb-3">
    //             {aboutOrganizationPersonnel_ad.position}
    //           </p>
    //           <h2 className="text-lg font-semibold">
    //             {aboutOrganizationPersonnel_ad.name}
    //           </h2>
    //           <p className="text-customGray1">{aboutOrganizationPersonnel_ad.email}</p>
    //           <p className="text-customGray1">{aboutOrganizationPersonnel_ad.tel}</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Developer */}
    //     <div className="organization-box1">
    //       <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
    //         {aboutOrganizationTitle.developer}
    //       </h1>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
    //         {aboutOrganizationDeveloper.map((person, index) => (
    //           <div key={index} className="organization-box2">
    //             <img
    //               src={person.pic}
    //               alt={person.name}
    //               className="w-full h-auto object-contain rounded-t-md"
    //             />
    //             <div className="p-4 flex flex-col justify-center items-center">
    //               <p className="font-semibold text-customYellow mb-3">
    //                 {person.position}
    //               </p>
    //               <h2 className="text-lg font-semibold">{person.name}</h2>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* General staff */}
    //     <div className="organization-box1">
    //       <h1 className="text-center md:self-start font-semibold text-3xl text-customYellow">
    //         {aboutOrganizationTitle.general_em}
    //       </h1>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {aboutOrganizationGeneral_em.map((person, index) => (
    //           <div key={index} className="organization-box2">
    //             <img
    //               src={person.pic}
    //               alt={person.name}
    //               className="w-full h-auto object-contain rounded-t-md"
    //             />
    //             <div className="p-4 flex flex-col justify-center items-center">
    //               <p className="font-semibold text-customYellow mb-3">
    //                 {person.position}
    //               </p>
    //               <h2 className="text-lg font-semibold">{person.name}</h2>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="my-24 flex flex-col justify-center items-center">
      <ScrollAnimation className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-customYellow leading-[40px] sm:leading-[60px]">
          {aboutOrganizationTitle.title}
        </h1>
        <p className="text-customGray1 text-center px-5">{aboutOrganizationTitle.des}</p>
      </ScrollAnimation>
      <div className="w-full lg:w-3/5">
        <div className="grid grid-rows gap-3">
          <div className="p-[1px] bg-customYellow"></div>

          {/* หัวข้อที่ 1 */}
          <div className="grid grid-rows sm:grid-rows-none sm:grid-cols-[40%_60%] text-center sm:text-start">
            <div className="mb-3 sm:mb-0">
              <h3 className="text-customBrown text-xl">{aboutOrganizationTitle.emp_title[0]?.title}</h3>
            </div>

            <div className="leading-7">
              {aboutOrganizationEmpDev.map((item, index) => (
                <h3 key={index}>{item.emp}</h3>
              ))}
            </div>
          </div>

          <div className="p-[1px] bg-customYellow"></div>

          {/* หัวข้อที่ 2 */}
          <div className="grid grid-rows sm:grid-rows-none sm:grid-cols-[40%_60%] text-center sm:text-start">
            <div className="mb-3 sm:mb-0">
              <h3 className="text-customBrown text-xl">{aboutOrganizationTitle.emp_title[1]?.title}</h3>
            </div>

            <div className="leading-7">
              {aboutOrganizationEmpDesign.map((item, index) => (
                <h3 key={index}>{item.emp}</h3>
              ))}
            </div>
          </div>

          <div className="p-[1px] bg-customYellow"></div>

          {/* หัวข้อที่ 3 */}
          <div className="grid grid-rows sm:grid-rows-none sm:grid-cols-[40%_60%] text-center sm:text-start">
            <div className="mb-3 sm:mb-0">
              <h3 className="text-customBrown text-xl">{aboutOrganizationTitle.emp_title[2]?.title}</h3>
            </div>

            <div className="leading-7">
              <h3>{aboutOrganizationEmpManagement}</h3>
            </div>
          </div>

          <div className="p-[1px] bg-customYellow"></div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src="/picture/about-us/orgneko.png" alt="org neko" className="w-full md:w-4/5 object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default AboutOrganization;
