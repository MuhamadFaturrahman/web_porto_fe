/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from "next/image"
import imgHeader from '../assets/profilePic.png';
import { TypeAnimation } from 'react-type-animation';
import { LinkIcon } from '@heroicons/react/24/solid';



const HeaderSection = () => {
    
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
  return (
    <section>
        <div className="lg:flex lg:flex-row justify-center lg:justify-start space-y-5 lg:space-x-5 lg:px-20">
            <div className="lg:basis-7/12 place-self-center lg:pr-8 ">
                <h2 className="bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md  mb-2 px-3 py-2 text-[#FAF8F0] text-xl lg:text-4xl font-bold ">Well Hello People!</h2>
                <h1 className="text-[#FAF8F0] mb-4 text-xl  lg:text-4xl font-bold md:font-extrabold">
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
                <div className="lg:flex lg:space-x-4">
                    <button
                        onClick={() =>
                        window.open(
                            'https://drive.google.com/drive/folders/1IdPY5xB9TNcZwlWmq6OXAAoLgjuIHxCI?usp=drive_link',
                            '_blank'
                        )
                        }
                        className="group rounded-md mb-3 lg:mb-0 px-6 py-3 bg-white bg-opacity-5 shadow-lg border-2 border-[#18A4E0] hover:bg-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit"
                    >
                        Download CV{' '}
                        <span className="font-light text-xs text-[#18A4E0] group-hover:text-[#FAF8F0] transition-colors duration-300 ease-in-out italic">
                        [PDF]
                        </span>
                    </button>

                    <button
                        onClick={() =>
                        window.open(
                            'https://drive.google.com/drive/folders/1Fpkpr7ktoTu3UYZF3TDZE-c_-mup7Xqo?usp=drive_link',
                            '_blank'
                        )
                        }
                        className="group rounded-md mb-3 lg:mb-0 px-6 py-3 bg-white bg-opacity-5 shadow-lg border-2 border-[#18A4E0] hover:bg-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit"
                    >
                        Download Portofolio{' '}
                        <span className="font-light text-xs text-[#18A4E0] group-hover:text-[#FAF8F0] transition-colors duration-300 ease-in-out italic">
                        [PDF]
                        </span>
                    </button>

                    <button
                        onClick={() => handleScroll('contact')}
                        className="flex items-center justify-center space-x-2 rounded-md px-6 py-3 shadow-lg bg-gradient-to-br from-slate-50 to-[#b7ccd5] text-[#033252] font-medium hover:from-[#18A4E0] hover:to-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit"
                    >
                        Contact Me
                        <LinkIcon className="w-5 h-5 ml-2" />
                    </button>
                    </div>

            </div>
            <div className="lg:basis-5/12 mt-4 lg:mt-0 py-10  lg:py-0 lg:pl-8">
                <div className="mb-2 px-3 rounded-full bg-gradient-to-t from-blue-900 to-[#033252] w-[240px] h-[240px] md:w-[360px] md:h-[360px] relative mx-auto">
                    <Image
                    src={imgHeader}
                    alt="Logo Just Friday for header"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
                    />
                </div>
                <p className='text-center italic font-light text-sm md:text-xl'>It's me, Muhamad Faturrahman</p>
            </div> 
        </div>        
    </section>
  )
}

export default HeaderSection
