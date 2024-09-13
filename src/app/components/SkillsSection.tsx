/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import SkillsTab from './SkillsTab';

const TAB_DATA = [
    {
        title: "Technical Expertise",
        id: "technical",
        content: (
          <ul className='list-disc'>
            <li><span className='font-medium'>Microsoft Office Suite:</span> Proficient in Microsoft Word, Excel, and PowerPoint.</li>
            <li><span className='font-medium'>Programming Languages:</span> Knowledgeable in HTML, CSS, PHP, Dart, Python, C, C++, JavaScript, and Java</li>
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
      <ul>
        <li>Leadership Skills</li>
        <li>Effective Communicator</li>
        <li>Quick Learner</li>
        <li>Quick to Adapt</li>
        <li>Creative Thinker</li>
        <li>Able to Work Effectively in a Team</li>
      </ul>
    ),
  }
  
];

function SkillsSection() {
  const [tab, setTab] = useState("technical");

  const handleTabTransition = (id: string) => {
    setTab(id);
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
            <SkillsTab selectTab={() => handleTabTransition("technical")} active={tab === "technical"}>
              Technical Expertise
            </SkillsTab>

            <SkillsTab selectTab={() => handleTabTransition("personal")} active={tab === "personal"}>
              Personal Expertise
            </SkillsTab>        
          </div>

          <div className='mx-5'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <div className="w-full flex justify-center">
            <span className='px-5 font-semibold text-[#FAF8F0] border-b-2 border-[#18A4E0] text-center'>
                Certification
            </span>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
