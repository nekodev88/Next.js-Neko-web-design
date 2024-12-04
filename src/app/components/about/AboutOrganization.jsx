"use client";

import React from "react";
import { useLanguage } from "../ClientLayout";

const AboutOrganization = () => {
  const { content } = useLanguage();
  const aboutOrganizationTitle = content.about_section[4].about_organization[0].title || []; //title
  const aboutOrganizationCeo = content.about_section[4].about_organization[1].ceo || []; //ceo
  const aboutOrganizationGeneral_ad = content.about_section[4].about_organization[2].general_ad || []; //general_ad
  const aboutOrganizationPersonnel_ad = content.about_section[4].about_organization[3].personnel_ad || []; //personnel_ad
  const aboutOrganizationDeveloper = content.about_section[4].about_organization[4].developer || []; //developer
  const aboutOrganizationGeneral_em = content.about_section[4].about_organization[5].general_em || []; //general_em

  return (
    <div className="w-full h-auto mt-32 flex justify-center items-center">
      <div className="w-full xl:w-5/6 flex flex-col justify-center items-center gap-14">
        {/* ceo */}
        <div className="organization-box1">
          <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
            {aboutOrganizationTitle.ceo}
          </h1>
          <div className="organization-box2 sm:self-center sm:rounded-md sm:w-96 sm:shadow-2xl sm:shadow-gray-400/50">
            <img
              src={aboutOrganizationCeo.pic}
              alt={aboutOrganizationCeo.name}
              className="w-full h-auto object-contain rounded-t-md"
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <p className="font-semibold text-customYellow mb-3">
                {aboutOrganizationCeo.position}
              </p>
              <h2 className="text-lg font-semibold">
                {aboutOrganizationCeo.name}
              </h2>
              <p className="text-customGray1">{aboutOrganizationCeo.email}</p>
              <p className="text-customGray1">{aboutOrganizationCeo.tel}</p>
            </div>
          </div>
        </div>

        {/* General Administrator */}
        <div className="organization-box1">
          <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
            {aboutOrganizationTitle.general_ad}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {aboutOrganizationGeneral_ad.map((person, index) => (
              <div key={index} className="organization-box2">
                <img
                  src={person.pic}
                  alt={person.name}
                  className="w-full h-auto object-contain rounded-t-md"
                />
                <div className="p-4 flex flex-col justify-center items-center">
                  <p className="font-semibold text-customYellow mb-3">
                    {person.position}
                  </p>
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                  <p className="text-customGray1">{person.email}</p>
                  <p className="text-customGray1">{person.tel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personnel Administration Unit */}
        <div className="organization-box1">
          <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
            {aboutOrganizationTitle.personnel_ad}
          </h1>
          <div className="organization-box2 sm:self-center sm:rounded-md sm:w-96 sm:shadow-2xl sm:shadow-gray-400/50">
            <img
              src={aboutOrganizationPersonnel_ad.pic}
              alt={aboutOrganizationPersonnel_ad.name}
              className="w-full h-auto object-contain rounded-t-md"
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <p className="font-semibold text-customYellow mb-3">
                {aboutOrganizationPersonnel_ad.position}
              </p>
              <h2 className="text-lg font-semibold">
                {aboutOrganizationPersonnel_ad.name}
              </h2>
              <p className="text-customGray1">{aboutOrganizationPersonnel_ad.email}</p>
              <p className="text-customGray1">{aboutOrganizationPersonnel_ad.tel}</p>
            </div>
          </div>
        </div>

        {/* Developer */}
        <div className="organization-box1">
          <h1 className="self-center md:self-start font-semibold text-3xl text-customYellow">
            {aboutOrganizationTitle.developer}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {aboutOrganizationDeveloper.map((person, index) => (
              <div key={index} className="organization-box2">
                <img
                  src={person.pic}
                  alt={person.name}
                  className="w-full h-auto object-contain rounded-t-md"
                />
                <div className="p-4 flex flex-col justify-center items-center">
                  <p className="font-semibold text-customYellow mb-3">
                    {person.position}
                  </p>
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General staff */}
        <div className="organization-box1">
          <h1 className="text-center md:self-start font-semibold text-3xl text-customYellow">
            {aboutOrganizationTitle.general_em}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutOrganizationGeneral_em.map((person, index) => (
              <div key={index} className="organization-box2">
                <img
                  src={person.pic}
                  alt={person.name}
                  className="w-full h-auto object-contain rounded-t-md"
                />
                <div className="p-4 flex flex-col justify-center items-center">
                  <p className="font-semibold text-customYellow mb-3">
                    {person.position}
                  </p>
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOrganization;
