
import React from 'react'
import Image from "next/image"
import imageFirst from '../assets/01_pic.jpg';

function ExperiencesSection() {
  return (
    <section className='scroll-px-20' id='#experiences'>
        {/* Title Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-auto space-y-5">
            <h2 className='lg:col-span-12 place-self-center text-center px-4 w-full lg:w-max bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md  text-[#FAF8F0] text-xl lg:text-4xl font-bold'>
                The Journeys That Makes Me A Person
            </h2>
            {/* Image 1 Section */}
            <div className=" lg:col-span-4 flex justify-center lg:justify-start my-5 lg:my-0">
            <Image
                src = {imageFirst}
                alt="Stock photo of Graphic Designer"
                className='absolute'
                width={400}
                height={400}
                />        
        </div>
        {/* Desc 1 Section */}
        <div className="col-span-1 lg:col-span-8 lg:pl-10 px-5 lg:px-0 mx-5 lg:mx-0">
        <h3 className="text-2xl font-bold">Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
        </div>
        </div>
        
    </section>
  )
}

export default ExperiencesSection