/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useEffect, useState } from 'react';
import SkillsTab from './SkillsTab';
import { motion } from 'framer-motion';
import image1 from '../assets/cert_01.png';
import image2 from '../assets/cert_02.png';
import image3 from '../assets/cert_03.png';
import image4 from '../assets/img_others.jpg';
import SkillsCard from './SkillsCard';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import ModalComp from './ModalComp';

const CERTIFICATE_DATA = [
  {
    id: "cert_1",
    title: "ITS Database by Certiport",
    thumbnail: image1,
    description: "The ITS (Information Technology Specialist) Database certification by Certiport is an international credential that verifies advanced proficiency in database management. It covers key areas such as database design, implementation, and administration.",
  },
  {
    id: "cert_2",
    title: "Junior Graphic Designer by BNSP",
    thumbnail: image2,
    description: "Junior Graphic Design certification from BNSP (Badan Nasional Sertifikasi Profesi) Indonesia recognizes foundational skills and knowledge in graphic design. It validates competency in visual design, creative processes, and the use of design software and tools.",
  },
  {
    id: "cert_3",
    title: "PTESOL by UPI Language Center",
    thumbnail: image3,
    description: "The PTESOL (Professional Teaching English to Speakers of Other Languages) certification from UPI Language Center is a national credential that evaluates and certifies one's ability to teach English effectively to non-native speakers.",
  },
  {
    id: "cert_others",
    title: "Other Certification",
    thumbnail: image4,
    description: "Other certification that show improvement and progress of myself",
  },
  
  
];

const TAB_DATA = [
  {
    title: "Technical Expertise",
    id: "technical",
    content: (
      <ul className='list-disc sm:text-base text-sm'>
        <li><span className='font-medium'>Microsoft Office Suite:</span> Proficient in Microsoft Word, Excel, and PowerPoint.</li>
        <li><span className='font-medium'>Programming Languages:</span> Knowledgeable in HTML, CSS, PHP, Dart, Python, C, C++, JavaScript, and Java.</li>
        <li><span className='font-medium'>Frameworks/Libraries:</span> Proficient in Bootstrap, Flutter, CodeIgniter, and React JS.</li>
        <li><span className='font-medium'>Workspace Tools:</span> Experienced with Visual Studio Code and GitHub.</li>
        <li><span className='font-medium'>Database Management Systems:</span> Skilled in XAMPP, MySQL, and Apache.</li>
        <li><span className='font-medium'>Multimedia Editing Software:</span> Proficient in Figma, CorelDraw, Adobe Photoshop, and Adobe Premiere.</li>
      </ul>
    ),
  },
  {
    title: "Personal Expertise",
    id: "personal",
    content: (
      <ul className='list-disc  sm:text-base text-sm'>
        <li>Leadership Skills</li>
        <li>Effective Communicator</li>
        <li>Quick Learner</li>
        <li>Quick to Adapt</li>
        <li>Creative Thinker</li>
        <li>Able to Work Effectively in a Team</li>
      </ul>
    ),
  },
];

function SkillsSection() {
  const [tab, setTab] = useState("technical");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const handleOpenModal = (id: string) => {
    setActiveId(id); // Set the idProps to the clicked button's id
    setIsModalOpen(true); // Open the modal
  };

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };

      // Set initial value based on current window size
      handleResize();

      // Add event listener to update on window resize
      window.addEventListener('resize', handleResize);

      // Clean up event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  const handleTabTransition = (id: string) => {
    setFade(false);
    setTimeout(() => {
      setTab(id);
      setFade(true);
    }, 300);
  };

  return (
    <section id="skills">
      <div className="flex flex-wrap lg:gap-4 lg:px-20 space-y-2 lg:space-y-0">
        {/* Title Section */}
        <div className="w-full flex justify-center">
          <h2 className="p-2 my-2 w-full text-center lg:w-max bg-gradient-to-br from-[#054d7d] to-[#18A4E0] rounded-md text-[#FAF8F0] text-2xl lg:text-4xl font-bold">
            The Abilities That Empower My Work
          </h2>
        </div>
        <p className="text-[#FAF8F0] text-sm sm:text-base">
          As I journey through the evolving world of technology, I've developed key skills that help me tackle challenges with creativity and precision. Along the way, I’ve earned certifications that validate my expertise and drive my growth. Below is a list of the abilities and certifications that fuel my passion and power my work in tech.
        </p>
        <div className="w-full flex flex-col space-y-2">
          <div className="flex justify-center">
            <div className="relative">
              {TAB_DATA.map((tabs) => (
                <SkillsTab
                  key={tabs.id}
                  active={tabs.id === tab}
                  selectTab={() => handleTabTransition(tabs.id)}
                  label={tabs.title}
                />
              ))}
              <motion.div
                className="absolute bottom-0 h-[2px] bg-[#18A4E0]"
                layout
                initial={false}
                animate={{
                  x: TAB_DATA.findIndex((tabs) => tabs.id === tab) * (isSmallScreen ? 145 : 160),
                  width: isSmallScreen ? '140px' : '165px'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <div
            key={tab}
            className={`mx-5 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <span className='px-5 font-semibold text-[#FAF8F0] border-b-2 border-[#18A4E0] text-center'>
            Certification
          </span>
        </div>
        <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        >
          
            {CERTIFICATE_DATA.map((data) => (
              <SwiperSlide key={data.title}>
                <SkillsCard key={data.id} id={data.id} title={data.title} thumbnail={data.thumbnail} description={data.description} openModal={handleOpenModal} />
              </SwiperSlide>
            ))}
          
        </Swiper>
      </div>
      {isModalOpen && (
        <ModalComp idProps={activeId} onClose={() => setIsModalOpen(false)}/>
      )}
    </section>
  );
}

export default SkillsSection;
