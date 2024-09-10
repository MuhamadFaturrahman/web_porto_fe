
import React from 'react'
import Image from "next/image"
import imageFirst from '../assets/01_pic.jpg';

function ExperiencesSection() {
  return (
    <section id='#experiences'>
        {/* Title Section */}
        <div className="md:grid md:grid-cols-12 gap-2 items-center py-0 lg:gap-8 lg:px-20 lg:py-10 space-y-5 lg:space-y-0">
            <h2 className='col-span-12 place-self-center text-center w-full lg:w-max bg-gradient-to-br from-[#054d7d] to-[#18A4E0] inline-block rounded-md  text-[#FAF8F0] text-2xl lg:text-4xl font-bold'>
                The Journeys That Makes Me A Person
            </h2>
            {/* Experience Section 1 */}
            <div className="col-span-12 lg:col-span-5 place-self-center lg:place-self-start">
              <Image
                  src = {imageFirst}
                  alt="Stock photo of Graphic Designer"
                  className='rounded-md '
                  />
            </div> 
          
          <div className="md:col-span-7">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
          {/* Experience Section 2 */}
          <div className="md:col-span-7">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
          <div className="col-span-12 lg:col-span-5 place-self-center lg:place-self-start">
              <Image
                  src = {imageFirst}
                  alt="Stock photo of Graphic Designer"
                  className='rounded-md '
                  />
          </div>
          {/* Experience Section 1 */}
          <div className="col-span-12 lg:col-span-5 place-self-center lg:place-self-start">
              <Image
                  src = {imageFirst}
                  alt="Stock photo of Graphic Designer"
                  className='rounded-md '
                  />
            </div> 
          
          <div className="md:col-span-7">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
          
        </div>
        
    </section>
  )
}

export default ExperiencesSection