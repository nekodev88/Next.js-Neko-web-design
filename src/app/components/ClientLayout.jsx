'use client'

import React from 'react'
import { useState, useEffect } from "react";
import { Outfit, IBM_Plex_Sans_Thai } from 'next/font/google'
import { createContext, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    weight: ['100', '200', '300', '400', '500', '600', '700']
})

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
    subsets: ['thai'],
    variable: '--font-ibm-plex-sans-thai',
    weight: ['100', '200', '300', '400', '500', '600', '700']
})

//สร้างcontectปรับภาษา
const LanguagesContext = createContext()

export function useLanguage(){
    return useContext(LanguagesContext)
}

const ClientLayout = ({children}) => {

    const [language, setLanguage] = useState('th')
    const [content, setContent] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

     // โหลดข้อมูลการแปลตามภาษา
    useEffect(() => {
      const fetchLanguageData = async (lang) => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(`/locales/${lang}.json`);
  
          if (!response.ok) {
            throw new Error('Failed to fetch translation data');
          }
  
          const data = await response.json();
          setContent(data);
        } catch (err) {
          setError(err.message);
          setContent({});
        } finally {
          setLoading(false);
        }
      };
  
      fetchLanguageData(language);
    }, [language]);
  
    // เลือกคลาสของฟอนต์ตามภาษา
    const fontClass = language === 'th' ? ibmPlexSansThai.className : outfit.className;

  return (
    <LanguagesContext.Provider value={{ language, setLanguage, content, error, loading }}>
      <div className={`${fontClass}`}>
        {loading ? (
          <div className="flex items-center justify-center h-screen">Loading...</div>
        ) : error ? (
          <div className="p-4 bg-red-100 text-red-700">Error: {error}</div>
        ) : (
          <>
            <Navbar />
            <main className="pt-20 px-3 md:px-10">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </LanguagesContext.Provider>
  )
}

export default ClientLayout