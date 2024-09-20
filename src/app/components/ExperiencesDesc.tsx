/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imageFirst from '../assets/01_pic.jpg';
import imageSecond from '../assets/02_pic.jpg';
import imageThird from '../assets/03_pic.jpg';
import { ArrowTopRightOnSquareIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';


interface ExperiencesDescProps {
  openModal: (id: string) => void; // Function that opens the modal
}

const ExperiencesDesc: React.FC<ExperiencesDescProps> = ({ openModal }) => {
  // Initialize the screenSize state within the component
  const [screenSize, setScreenSize] = useState(false);
  


  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize(true);
      } else {
        setScreenSize(false);
      }
    };


    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenSize) {

    return (
      <>
        {/* Large Screen Experience Section 1 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-5/12">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
          <div className="lg:basis-7/12 space-y-3">
            <h3 className="text-xl font-bold">From Passion to Profession: My Graphic Design Evolution</h3>
            <p>My journey into graphic design began in high school, where I became captivated by vector art and the creative potential it offered. Driven by this passion, I launched a small business, diving headfirst into the world of technology and side hustles. Collaborating with school and campus organizations, I crafted compelling social media graphics—infographics, posts, and stories—that made an impact. This early foray into design not only honed my skills but also laid the groundwork for my future career, blending creativity with entrepreneurial spirit.</p>
            <div className='flex space-x-4'>
              <button className='flex items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
              onClick={() => openModal('graphicDesign')}>
                <span className='text-[#FAF8F0]'>See the Experiences</span>
                <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
              </button>
              <button className='flex items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
              onClick={() => window.open('https://www.instagram.com/justfriday_design/', '_blank')}>
                <span className='text-[#FAF8F0]'>See My Side Hustle</span>
                <ArrowTopRightOnSquareIcon className='w-5 h-5 text-inherit' />
              </button>
            </div>
          </div>
        </div>
        {/* Large Screen Experience Section 2 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-7/12 space-y-3">
            <h3 className="text-xl font-bold">Innovative Front-End Development: Bridging Theory and Practice</h3>
            <p>College marked a pivotal chapter as I embarked on an internship that immersed me in the dynamic world of front-end web development. Working with Next.js and React, I navigated the complexities of modern web technologies while adapting to a professional environment. The experience was both challenging and rewarding, as I tackled the intricacies of new knowledge and cultural shifts with the support of a dedicated team and mentor. Alongside mastering an array of technologies—HTML, CSS, PHP, Dart, Python, C, C++, React JS, Flutter, JavaScript, and Java—I also embraced leadership as a Lab Instructor (PIC) and Lecturer Assistant. This role sharpened my ability to lead, organize, and inspire, further shaping my professional trajectory.</p>
            <button className='flex items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
            onClick={() => openModal('frontEnd')}>
              <span className='text-[#FAF8F0]'>See the Experiences</span>
              <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
            </button>
          </div>
          <div className="lg:basis-5/12">
            <Image
              src={imageSecond}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
        </div>
        {/* Large Screen Experience Section 3 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-5/12">
            <Image
              src={imageThird}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
          <div className="lg:basis-7/12 space-y-3">
            <h3 className="text-xl font-bold">Designing Impact: My Journey into UI/UX Excellence</h3>
            <p>As I approached the final stages of my academic journey, my focus shifted to UI/UX Design with a commitment to improving usability. My thesis project, centered around the ITG Virtual Tour Web Prototype, allowed me to apply The Five Planes Method to real-world challenges. This project was a transformative experience, showcasing my ability to blend graphic design principles with advanced UI/UX methodologies. By prioritizing user-centered design, I aimed to create interfaces that were not only functional but also engaging and intuitive. As I reached the end of this chapter, I graduated from the Garut Institute of Technology with a Bachelor's Degree in Informatics Engineering, achieving Cum Laude honors with a GPA of 3.86—marking the end of the beginning of my professional journey.</p>
            <div className='flex space-x-4'>
              <button className='flex items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
              onClick={() => openModal('uiux')}>
                <span className='text-[#FAF8F0]'>See the Experiences</span>
                <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
              </button>
              <button className='flex items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
              onClick={() => window.open('https://www.figma.com/proto/4WLyVMuUo14ncs7lJC8lF5/Prototype-Website-Virtual-Tour-ITG?node-id=1-2&t=ia8K4qUwRevv4K3e-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&hide-ui=1', '_blank')}>
                <span className='text-[#FAF8F0]'>See My Thesis Project</span>
                <ArrowTopRightOnSquareIcon className='w-5 h-5 text-inherit' />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // If screenSize is false (small screens)
  return (
    <>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-lg font-bold">From Passion to Profession: My Graphic Design Evolution</h3>
        <p className='text-sm'>My journey into graphic design began in high school, where I became captivated by vector art and the creative potential it offered. Driven by this passion, I launched a small business, diving headfirst into the world of technology and side hustles. Collaborating with school and campus organizations, I crafted compelling social media graphics—infographics, posts, and stories—that made an impact. This early foray into design not only honed my skills but also laid the groundwork for my future career, blending creativity with entrepreneurial spirit.</p>
        <div className='flex flex-col w-full'>
          <button className='flex justify-center items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
            onClick={() => openModal('graphicDesign')}>
                <span className='text-[#FAF8F0]'>See the Experiences</span>
                <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
            </button>
            <button className='flex justify-center items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
            onClick={() => window.open('https://www.instagram.com/justfriday_design/', '_blank')}>
              <span className='text-[#FAF8F0]'>See My Side Hustle</span>
              <ArrowTopRightOnSquareIcon className='w-5 h-5 text-inherit' />
            </button>
        </div>
          
        
      </div>

      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageSecond}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-lg font-bold">Innovative Front-End Development: Bridging Theory and Practice</h3>
        <p className='text-sm'>College marked a pivotal chapter as I embarked on an internship that immersed me in the dynamic world of front-end web development. Working with Next.js and React, I navigated the complexities of modern web technologies while adapting to a professional environment. The experience was both challenging and rewarding, as I tackled the intricacies of new knowledge and cultural shifts with the support of a dedicated team and mentor. Alongside mastering an array of technologies—HTML, CSS, PHP, Dart, Python, C, C++, React JS, Flutter, JavaScript, and Java—I also embraced leadership as a Lab Instructor (PIC) and Lecturer Assistant. This role sharpened my ability to lead, organize, and inspire, further shaping my professional trajectory.</p>
        <div className="flex flex-col w-full">
          <button className='flex justify-center items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
          onClick={() => openModal('frontEnd')}>
            <span className='text-[#FAF8F0]'>See the Experiences</span>
            <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
          </button>
        </div>
      </div>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageThird}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-lg font-bold">Designing Impact: My Journey into UI/UX Excellence</h3>
        <p className='text-sm'>As I approached the final stages of my academic journey, my focus shifted to UI/UX Design with a commitment to improving usability. My thesis project, centered around the ITG Virtual Tour Web Prototype, allowed me to apply The Five Planes Method to real-world challenges. This project was a transformative experience, showcasing my ability to blend graphic design principles with advanced UI/UX methodologies. By prioritizing user-centered design, I aimed to create interfaces that were not only functional but also engaging and intuitive. As I reached the end of this chapter, I graduated from the Garut Institute of Technology with a Bachelor's Degree in Informatics Engineering, achieving Cum Laude honors with a GPA of 3.86—marking the end of the beginning of my professional journey.</p>
        <div className="flex flex-col w-full">
          <button className='flex justify-center items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
                onClick={() => openModal('uiux')}>
                  <span className='text-[#FAF8F0]'>See the Experiences</span>
                  <ArrowUpRightIcon className='w-5 h-5 text-inherit' />
                </button>
                <button className='flex justify-center items-center space-x-2 rounded-md mr-6 mb-3 lg:mb-6 px-6 py-3 shadow-lg bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full sm:w-fit'
                onClick={() => window.open('https://www.figma.com/proto/4WLyVMuUo14ncs7lJC8lF5/Prototype-Website-Virtual-Tour-ITG?node-id=1-2&t=ia8K4qUwRevv4K3e-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&hide-ui=1', '_blank')}>
                  <span className='text-[#FAF8F0]'>See My Thesis Project</span>
                  <ArrowTopRightOnSquareIcon className='w-5 h-5 text-inherit' />
                </button>
        </div>
              
            
      </div>
      </>
  );
}

export default ExperiencesDesc;
