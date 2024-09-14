/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import SkillsTab from './SkillsTab';
import { motion } from 'framer-motion';
import image1 from '../assets/01_pic.jpg';
import SkillsCard from './SkillsCard';

const CERTIFICATE_DATA = [
  {
    id: "cert_1",
    title: "Card 1",
    image: image1, // Use image1 directly
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit quis voluptas rerum alias nulla perspiciatis? Soluta eius rerum at consequuntur accusamus, odit obcaecati, earum eligendi, aliquid ipsum explicabo labore?",
  },
  {
    id: "cert_2",
    title: "Card 2",
    image: image1, // Use image1 directly
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit quis voluptas rerum alias nulla perspiciatis? Soluta eius rerum at consequuntur accusamus, odit obcaecati, earum eligendi, aliquid ipsum explicabo labore?",
  },
  {
    id: "cert_3",
    title: "Card 3",
    image: image1, // Use image1 directly
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit quis voluptas rerum alias nulla perspiciatis? Soluta eius rerum at consequuntur accusamus, odit obcaecati, earum eligendi, aliquid ipsum explicabo labore?",
  },
];

const TAB_DATA = [
  {
    title: "Technical Expertise",
    id: "technical",
    content: (
      <ul className='list-disc'>
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
      <ul className='list-disc'>
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
  const [fade, setFade] = useState(true);

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
        <p className="text-[#FAF8F0]">
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
                  x: TAB_DATA.findIndex((tabs) => tabs.id === tab) * 165, // Adjust the x position based on tab index
                  width: '165px', // Adjust the width according to tab size
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
        <div className="flex flex-wrap lg:flex-row gap-4 px-10 justify-center">
          {CERTIFICATE_DATA.map((data) => (
            <SkillsCard key={data.id} id={data.id} title={data.title} image={data.image} description={data.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
