import React from 'react'
import Image from "next/image"
import imageFirst from '../assets/01_pic.jpg';

function ExperiencesSection() {
  return (
    <section id="experiences">
      
      <div className="flex flex-wrap gap-2 place-items-center justify-center py-0 lg:gap-8 lg:px-20 lg:py-10 space-y-5 lg:space-y-0">

        {/* Title Section */}
        <h2 className='p-2 place-self-center text-center w-full lg:w-max bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md text-[#FAF8F0] text-2xl lg:text-4xl font-bold'>
          The Journeys That Makes Me A Person
        </h2>

        {/* Experience Section 1 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start space-y-5 lg:space-x-5">
          <div className=" lg:basis-5/12 order-first">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className='rounded-md'
            />
          </div>
          <div className="lg:basis-7/12 order-last">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
        </div>

        {/* Experience Section 2 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start gap-5">
          <div className=" lg:basis-7/12 order-last lg:order-first">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
          <div className="lg:basis-5/12 place-self-center lg:place-self-start order-first lg:order-last">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className='rounded-md'
            />
          </div>
        </div>

        {/* Experience Section 3 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start space-x-5">
          <div className="lg:basis-5/12 place-self-center lg:place-self-start order-first">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className='rounded-md'
            />
          </div>
          <div className="lg:basis-7/12 order-last">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExperiencesSection;
