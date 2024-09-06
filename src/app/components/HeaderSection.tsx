/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image"
import imgHeader from '../assets/profilePic.png';

const HeaderSection = () => {
  return (
    <section className='lg:pl-20'>
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-auto">
            <div className="col-span-7 place-self-center lg:pr-8">
                <h2 className="bg-white inline-block bg-clip-padding text-[#033252]  mb-2 text-2xl lg:text-4xl font-bold ">Well Hello People!</h2>
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    I'm Muhamad Faturrahman
                </h1>
                <p className='text-[#FAF8F0] text-lg xl:text-xl'>
                Highly skilled Information Technology Engineering graduate with a GPA of 3.86, achieving Cum Laude honors from the Garut Institute of Technology. Expertise in mobile and web application development, UI/UX design, and strong proficiency in database management systems. Proven entrepreneurial experience in running a small business focused on graphic design services via social media, demonstrating capabilities in digital marketing and client engagement.
                </p>
                <div>
                    <button className='rounded-md mr-6 my-6 px-6 py-3 border-2 border-[#18A4E0] hover:bg-[#18A4E0] hover:text-white transition duration-300 ease-in-out'>Download CV</button>
                    <button className='rounded-md mr-6 my-6 px-6 py-3 bg-gradient-to-br from-slate-50 to-[#18A4E0] text-[#033252] hover:from-[#18A4E0] hover:to-[#18A4E0] hover:text-white transition duration-300 ease-in-out'>Contact Me</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 py-10 lg:py-0 lg:pl-8">
                <div className="rounded-full bg-gradient-to-t from-blue-900 to-[#033252] w-[400px] h-[400px] relative ">
                    <Image
                    src={imgHeader}
                    alt="Logo Just Friday for header"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={400} height={400}
                    />
                </div>
            
            </div>
            
        </div>
        
        
    </section>
  )
}

export default HeaderSection
