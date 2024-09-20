import { AcademicCapIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardDetails {
  openModal: (id: string) => void;
  id: string;
  title: string;
  thumbnail: StaticImageData; // Use StaticImageData for imported images in Next.js
  description: string;
}

const SkillsCard: React.FC<CardDetails> = ({ id, title, thumbnail, description, openModal }) => {
  return (
    <div key={id} className="flex flex-col bg-white group relative bg-opacity-15 rounded-lg shadow-lg p-5 mb-10 mx-1 items-start text-start lg:max-w-sm h-[500px] overflow-hidden">
    {/* Image Container */}
    <div className="w-full h-1/2 mb-4 rounded-sm flex justify-center items-center">
      <Image
        src={thumbnail}
        alt={title}
        className="object-cover w-full h-full rounded-md"
        priority
      />
    </div>
    {/* Card Content */}
    <h3 className="text-md font-semibold mb-2">{title}</h3>
    <p className="text-sm text-justify mb-4 lg:mb-0 flex-grow">{description}</p>
    
    <button
    className='flex md:mt-auto items-center justify-center rounded-md px-6 py-3 shadow-lg space-x-2 bg-white bg-opacity-5 border-2 border-[#18A4E0] hover:bg-[#18A4E0] text-[#18A4E0] hover:text-[#FAF8F0] transition duration-300 ease-in-out w-full'
    onClick={() => openModal(id)}>
      <span className='text-[#FAF8F0]'>See Certification</span>
      <AcademicCapIcon className='w-5 h-6 text-inherit' />
    </button>
  </div>

  );
};

export default SkillsCard;
