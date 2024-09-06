/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from "next/image"
import imgHeader from '../assets/profilePic.png';
import { TypeAnimation } from 'react-type-animation';


const HeaderSection = () => {
  return (
    <section className='lg:pl-10'>
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-auto">
            <div className="col-span-7 place-self-center lg:pr-8 ">
                <h2 className="bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md  text-[#033252]  mb-2 px-3 py-2 text-[#FAF8F0] text-2xl lg:text-4xl font-bold ">Well Hello People!</h2>
                <h1 className="text-[#FAF8F0] mb-4 text-2xl lg:text-4xl font-extrabold">
                    <span>I'm {""}</span>
                    <TypeAnimation
                        sequence={[
                            'Muhamad Faturrahman',
                            1000,
                            'Front-end Developer',
                            1000,
                            'UI/UX Designer',
                            1000,
                            'Graphic Designer',
                            1000,
                            'Still Human',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#FAF8F0] xl:text-xl mb-6'>
                Highly skilled Information Technology Engineering graduate with a GPA of 3.86, achieving Cum Laude honors from the Garut Institute of Technology. Expertise in mobile and web application development, UI/UX design, and strong proficiency in database management systems. Proven entrepreneurial experience in running a small business focused on graphic design services via social media, demonstrating capabilities in digital marketing and client engagement.
                </p>
                <div>
                    <button className='rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 border-2 border-[#18A4E0] hover:bg-[#18A4E0] hover:text-white transition duration-300 ease-in-out w-full sm:w-fit'>Download CV</button>
                    <button className='rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 bg-gradient-to-br from-slate-50 to-[#b7ccd5] text-[#033252] font-medium hover:from-[#18A4E0] hover:to-[#18A4E0] hover:text-white transition duration-300 ease-in-out w-full sm:w-fit'>Contact Me</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 py-10 lg:py-0 lg:pl-8">
                <div className="mb-2 rounded-full bg-gradient-to-t from-blue-900 to-[#033252] w-[360px] h-[360px] relative ">
                    <Image
                    src={imgHeader}
                    alt="Logo Just Friday for header"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
                    />
                </div>
                <p className='place-self-center text-center italic'>It's me, Muhamad Faturrahman</p>
            
            </div>
            
        </div>
        
        
    </section>
  )
}

export default HeaderSection
