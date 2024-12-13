'use Client'

import React from 'react'
import ScrollAnimation from '../../ScrollAnimation'

const AiHero = () => {
  return (
    <section className="h-[20rem] w-full bg-[url('/picture/computer.jpg')] bg-cover bg-center object-cover absolute inset-0 mt-20">
      <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center inset-0 bg-black bg-opacity-50">
        <ScrollAnimation className="w-full lg:w-[60%] text-shadow text-center lg:text-end">
          <h1 className="text-3xl sm:text-5xl font-bold text-customYellow mb-10 leading-[40px] sm:leading-[60px]">Portfolio - Ai Chat</h1>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default AiHero