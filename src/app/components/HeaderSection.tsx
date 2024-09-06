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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit repellendus ipsa tempora distinctio, accusantium delectus cum consectetur commodi. Dolore totam vel temporibus ad corrupti tempora ipsa numquam aut recusandae.
                </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 py-10 lg:py-0 lg:pl-8">
                <div className="rounded-full bg-gradient-to-t from-blue-900 to-[#033252] w-[300px] h-[300px] relative ">
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
